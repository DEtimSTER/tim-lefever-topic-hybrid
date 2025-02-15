import Link from "next/link";


export function Navbar() {

    return(
        <nav className="w-full bg-sky-700 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-4xl font-bold">Transactio</h1>
                <ul className="flex space-x-4">
                    <li>
                        <Link href="/">Dashboard</Link>
                    </li>
                    <li>
                        <Link href="/transactions">Transactions</Link>
                    </li>
                    <li>
                        <Link href="/budgets">Budgets</Link>
                    </li>
                    <li>
                        <Link href="/goals">Goals</Link>
                    </li>
                    <li>
                        <Link href="/investments">Investments</Link>
                    </li>
                    <li>
                        <Link href="/reports">Reports</Link>
                    </li>
                </ul>
                <div>
                    logout
                </div>
            </div>
        </nav>
    )
}