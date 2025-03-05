"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { ReportPDF } from "@/components/reportPDF";

const data = [
    { name: "Jan", income: 4000, expenses: 2400 },
    { name: "Feb", income: 3000, expenses: 1398 },
    { name: "Mar", income: 2000, expenses: 9800 },
    { name: "Apr", income: 2780, expenses: 3908 },
    { name: "May", income: 1890, expenses: 4800 },
    { name: "Jun", income: 2390, expenses: 3800 },
];

export default function Reports() {
    const [reportType, setReportType] = useState("monthly");

    return (
        <>
            <Navbar />
            <div className="space-y-6 p-14">
                <div className="flex justify-between items-center">
                    <h1 className="text-3xl font-bold">Financial Reports</h1>
                    <div className="flex items-center space-x-4">
                        <Select value={reportType} onValueChange={setReportType}>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Select report type" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="monthly">Monthly</SelectItem>
                                <SelectItem value="quarterly">Quarterly</SelectItem>
                                <SelectItem value="yearly">Yearly</SelectItem>
                            </SelectContent>
                        </Select>
                        {typeof window !== "undefined" && (
                            <PDFDownloadLink document={<ReportPDF reportType={reportType} />} fileName="financial_report.pdf">
                                {({ loading }) => (
                                    <Button>Download PDF</Button>
                                )}
                            </PDFDownloadLink>
                        )}
                    </div>
                </div>
                <Card>
                    <CardHeader>
                        <CardTitle>Income vs Expenses ({reportType.charAt(0).toUpperCase() + reportType.slice(1)})</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ResponsiveContainer width="100%" height={400}>
                            <BarChart data={data}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="income" fill="#8884d8" />
                                <Bar dataKey="expenses" fill="#82ca9d" />
                            </BarChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>
                <div className="grid gap-6 md:grid-cols-2">
                    <Card>
                        <CardHeader>
                            <CardTitle>Top Expense Categories</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2">
                                <li className="flex justify-between">
                                    <span>Food</span>
                                    <span>$1,200</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Transportation</span>
                                    <span>$800</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Entertainment</span>
                                    <span>$600</span>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Savings Rate</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-4xl font-bold text-center">15%</div>
                            <p className="text-center text-sm text-gray-500 mt-2">of total income</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
            <Footer />
        </>
    );
}
