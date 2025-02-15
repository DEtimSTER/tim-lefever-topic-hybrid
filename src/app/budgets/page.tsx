"use client";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import {ReactNode} from "react";
// Sample budget data
const budgetData = [
    { name: "Housing", amount: 1000, spent: 950, color: "#FF6384" },
    { name: "Food", amount: 500, spent: 450, color: "#36A2EB" },
    { name: "Transportation", amount: 300, spent: 280, color: "#FFCE56" },
    { name: "Utilities", amount: 200, spent: 180, color: "#4BC0C0" },
    { name: "Entertainment", amount: 150, spent: 100, color: "#9966FF" },
    { name: "Savings", amount: 300, spent: 300, color: "#FF9F40" },
];

export default function Budgets() {
    const [isAddingCategory, setIsAddingCategory] = useState(false);

    const totalBudget = budgetData.reduce((sum, item) => sum + item.amount, 0);

    return (
        <>
            <Navbar />
            <div className="space-y-6 p-14">
                <div className="flex justify-between items-center">
                    <h1 className="text-3xl font-bold">Budgets</h1>
                    <Dialog open={isAddingCategory} onOpenChange={setIsAddingCategory}>
                        <DialogTrigger asChild>
                            <Button>Add Category</Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Add New Budget Category</DialogTitle>
                            </DialogHeader>
                            <form className="space-y-4">
                                <div>
                                    <Label htmlFor="category">Category Name</Label>
                                    <Input id="category" />
                                </div>
                                <div>
                                    <Label htmlFor="limit">Monthly Limit</Label>
                                    <Input id="limit" type="number" />
                                </div>
                                <Button type="submit">Save Category</Button>
                            </form>
                        </DialogContent>
                    </Dialog>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    <Card>
                        <CardHeader>
                            <CardTitle>Budget Overview</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ResponsiveContainer width="100%" height={300}>
                                <PieChart>
                                    <Pie
                                        data={budgetData}
                                        dataKey="amount"
                                        nameKey="name"
                                        cx="50%"
                                        cy="50%"
                                        outerRadius={80}
                                        label
                                    >
                                        {budgetData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        )) as ReactNode}
                                    </Pie>
                                    <Tooltip />
                                    <Legend />
                                </PieChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Total Budget</CardTitle>
                        </CardHeader>
                        <CardContent className="pt-20">
                            <div className="text-4xl font-bold text-center">${totalBudget}</div>
                            <div className="text-center text-sm text-gray-500 mt-2">Total monthly budget</div>
                        </CardContent>
                    </Card>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {budgetData.map((category, index) => (
                        <Card key={index}>
                            <CardHeader>
                                <CardTitle>{category.name}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Progress value={(category.spent / category.amount) * 100} className="mb-2" />
                                <div className="flex justify-between text-sm">
                                    <span>${category.spent} / ${category.amount}</span>
                                    <span>{Math.round((category.spent / category.amount) * 100)}%</span>
                                </div>
                                <div className="mt-4 flex justify-between text-sm text-gray-500">
                                    <span>Remaining: ${category.amount - category.spent}</span>
                                    <span>{Math.round(((category.amount - category.spent) / category.amount) * 100)}%</span>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}
