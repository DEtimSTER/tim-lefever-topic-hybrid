"use client"
import {ReactNode, useState} from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts"
import {Navbar} from "@/components/navbar";
import {Footer} from "@/components/footer";


const data: { name: string; value: number }[] = [
    { name: "Stocks", value: 400 },
    { name: "Bonds", value: 300 },
    { name: "Real Estate", value: 200 },
    { name: "Crypto", value: 100 },
];

const COLORS: string[] = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];


export default function Investments() {
    const [isAddingInvestment, setIsAddingInvestment] = useState(false)

    return (
        <>
            <Navbar/>
            <div className="space-y-6 p-14">
                <div className="flex justify-between items-center">
                    <h1 className="text-3xl font-bold">Investments</h1>
                    <Dialog open={isAddingInvestment} onOpenChange={setIsAddingInvestment}>
                        <DialogTrigger asChild>
                            <Button>Add Investment</Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Add New Investment</DialogTitle>
                            </DialogHeader>
                            <form className="space-y-4">
                                <div>
                                    <Label htmlFor="investmentName">Investment Name</Label>
                                    <Input id="investmentName"/>
                                </div>
                                <div>
                                    <Label htmlFor="amount">Amount</Label>
                                    <Input id="amount" type="number"/>
                                </div>
                                <div>
                                    <Label htmlFor="type">Type</Label>
                                    <Select>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select type"/>
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="stocks">Stocks</SelectItem>
                                            <SelectItem value="bonds">Bonds</SelectItem>
                                            <SelectItem value="realEstate">Real Estate</SelectItem>
                                            <SelectItem value="crypto">Cryptocurrency</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <Button type="submit">Save Investment</Button>
                            </form>
                        </DialogContent>
                    </Dialog>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                    <Card>
                        <CardHeader>
                            <CardTitle>Investment Distribution</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ResponsiveContainer width="100%" height={300}>
                                <PieChart>
                                    <Pie data={data} cx="50%" cy="50%" labelLine={false} outerRadius={80} fill="#8884d8"
                                         dataKey="value">
                                        {data.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
                                        )) as ReactNode}
                                    </Pie>
                                    <Legend/>
                                </PieChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Investment Details</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Type</TableHead>
                                        <TableHead>Amount</TableHead>
                                        <TableHead>Percentage</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {data.map((item) => (
                                        <TableRow key={item.name}>
                                            <TableCell>{item.name}</TableCell>
                                            <TableCell>${item.value}</TableCell>
                                            <TableCell>
                                                {((item.value / data.reduce((acc, cur) => acc + cur.value, 0)) * 100).toFixed(2)}%
                                            </TableCell>
                                        </TableRow>
                                    )) as ReactNode}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </div>
            </div>
            <Footer/>
        </>
    )
}
