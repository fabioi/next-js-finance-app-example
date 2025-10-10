import PageHeader from "@/app/components/page-header";
import Trend from "@/app/components/trend";

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
                    <Trend type="Income" amount={1000} prevAmount={1000} />
                    <Trend type="Expense" amount={1000} prevAmount={1200} />
                    <Trend type="Investment" amount={1000} prevAmount={700} />
                    <Trend type="Savings" amount={1000} prevAmount={500} />
                </div>
            </div>
        </>
    )
}
