import Link from "next/link";


export function Navbar() {

    return (
        <nav className="w-full bg-sky-700 p-4">
            <div className=" flex items-center pl-10 pr-10">
                <h1 className="text-4xl font-bold mr-auto">Transactio</h1>
                <ul className="flex justify-evenly w-1/2">
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
                <div className="ml-auto">
                    logout
                </div>
            </div>
        </nav>
    )


}