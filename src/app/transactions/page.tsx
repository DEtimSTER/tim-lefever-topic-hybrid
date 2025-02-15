import {Navbar} from "@/components/navbar";
import {Footer} from "@/components/footer";
import { Button } from "@/components/ui/button"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {ReactNode} from "react";

import Link from "next/link";
import {Input} from "@/components/ui/input";


const transactions = [
    {
        date: "2024-02-15",
        status: "Completed",
        description: "Grocery shopping at Walmart",
        category: "Groceries",
        amount: 45.99,
    },
    {
        date: "2024-02-14",
        status: "Pending",
        description: "Netflix subscription",
        category: "Entertainment",
        amount: 15.99,
    },
    {
        date: "2024-02-13",
        status: "Completed",
        description: "Dinner at a restaurant",
        category: "Food & Drinks",
        amount: 78.50,
    },
    {
        date: "2024-02-12",
        status: "Failed",
        description: "Gym membership renewal",
        category: "Fitness",
        amount: 29.99,
    },
    {
        date: "2024-02-11",
        status: "Completed",
        description: "Electricity bill payment",
        category: "Utilities",
        amount: 120.75,
    },
    {
        date: "2024-02-10",
        status: "Completed",
        description: "Amazon order - headphones",
        category: "Shopping",
        amount: 89.99,
    },
];


export default function Transactions() {

    return (
        <>
            <Navbar/>
            <div className="space-y-6 p-14">
                <h1 className="text-3xl font-bold">Transactions</h1>
                <div className="flex justify-between items-center">
                    <Input type="search" placeholder="Search transactions..." className="max-w-sm" />
                    <Button asChild><Link href="/addtransaction">Add Transaction</Link></Button>
                </div>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className=" text-left">Date</TableHead>
                            <TableHead >Description</TableHead>
                            <TableHead >Category</TableHead>
                            <TableHead className="text-right">Amount</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {transactions.map((transaction, index) => (
                            <TableRow key={index}>
                                <TableCell className="text-left">{transaction.date}</TableCell>
                                <TableCell >{transaction.description}</TableCell>
                                <TableCell >{transaction.category}</TableCell>
                                <TableCell className="text-right">€ {transaction.amount.toFixed(2)}</TableCell>
                            </TableRow>
                        )) as ReactNode}
                    </TableBody>
                </Table>

            </div>
            <Footer/>
        </>
    )
}