import PageHeader from "@/app/components/page-header";
import TransactionItem from "@/app/components/transaction-item";
import Trend from "@/app/components/trend";
import TransactionSummaryItem from "@/app/components/transaction-summary-item";

export default function Page() {
    return (
        <>
            <h1 className="text-4xl mt-8">Playground</h1>
            <div>
                <div>
                    <h2 className="mb-4 text-lg font-mono">PageHeader</h2>
                    <hr className="mb-4 border-gray-200 dark:border-gray-800" />
                    <div><PageHeader /></div>
                </div>
            </div>

            <div>
                <h2 className="mb-4 text-lg font-mono">Trend</h2>
                <hr className="mb-4 border-gray-200 dark:border-gray-800" />
                <div className="flex space-x-4">
                    <Trend type="Income" amount={1200} prevAmount={1000} />
                    <Trend type="Expense" amount={700} prevAmount={1200} />
                    <Trend type="Investment" amount={500} prevAmount={700} />
                    <Trend type="Savings" amount={200} prevAmount={500} />
                </div>
            </div>

            <div>
                <h2 className="mb-4 text-lg font-mono">TransactionItem</h2>
                <hr className="mb-4 border-gray-200 dark:border-gray-800" />
                <div className="space-y-4">
                    <TransactionItem type="Income" description="Salary" amount={1200} />
                    <TransactionItem type="Saving" description="Savings" amount={500} />
                    <TransactionItem type="Expense" category="Food" description="Rent" amount={29} />
                </div>
            </div >

            <div>
                <h2 className="mb-4 text-lg font-mono">TransactionSummaryItem</h2>
                <hr className="mb-4 border-gray-200 dark:border-gray-800" />
                <div className="space-y-4">
                    <TransactionSummaryItem date="2023-01-01" amount={3500} />
                    <hr className="mb-4 border-gray-200 dark:border-gray-800" />
                    <TransactionItem type="Income" description="Salary" amount={1200} />
                    <TransactionItem type="Saving" description="Savings" amount={500} />
                    <TransactionItem type="Expense" category="Food" description="Rent" amount={29} />
                </div>
            </div >
        </>
    )
}
