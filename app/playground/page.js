import Button from "@/components/button";
import PageHeader from '@/components/page-header';
import TransactionItem from '@/components/transaction-item';
import TransactionSummaryItem from '@/components/transaction-summary-item';
import Trend from '@/components/trend';

export default function Page() {
    return (<main className="space-y-8 mb-44">
        <h1 className="text-4xl mt-8">Playground</h1>

        <div>
            <h2 className="mb-4 text-lg font-mono">PageHeader</h2>
            <hr className="mb-4 border-gray-200 dark:border-gray-800" />
            <div><PageHeader /></div>
        </div>

        <div>
            <h2 className="mb-4 text-lg font-mono">Trend</h2>
            <hr className="mb-4 border-gray-200 dark:border-gray-800" />
            <div className="flex space-x-8">
                <Trend type="Income" amount={1000} prevAmount={900} />
                <Trend type="Expense" amount={12000} prevAmount={10000} />
                <Trend type="Investment" amount={7000} prevAmount={11100} />
                <Trend type="Saving" amount={500} prevAmount={950} />
            </div>
        </div>

        <div>
            <h2 className="mb-4 text-lg font-mono">TransactionItem</h2>
            <hr className="mb-4 border-gray-200 dark:border-gray-800" />
            <div className="space-y-4">
                <TransactionItem type="Income" description="Salary" amount={2000} />
                <TransactionItem type="Expense" category="Food" description="Going out to eat" amount={29} />
                <TransactionItem type="Saving" description="For children" amount={500} />
                <TransactionItem type="Investment" description="In Microsoft" amount={9000} />
            </div>
        </div>

        <div>
            <h2 className="mb-4 text-lg font-mono">TransactionSummaryItem + TransactionItem</h2>
            <hr className="mb-4 border-gray-200 dark:border-gray-800" />
            <div className="space-y-4">
                <TransactionSummaryItem date="2024-05-01" amount={3500} />
                <hr className="mb-4 border-gray-200 dark:border-gray-800" />
                <TransactionItem type="Income" description="Salary" amount={2000} />
                <TransactionItem type="Expense" category="Food" description="Going out to eat" amount={29} />
                <TransactionItem type="Saving" description="For children" amount={500} />
                <TransactionItem type="Investment" description="In Microsoft" amount={9000} />
            </div>
        </div>

        <div>
            <h2 className="mb-4 text-lg font-mono">Buttons</h2>
            <hr className="mb-4 border-gray-200 dark:border-gray-800" />
            <div className="space-x-4">
                <Button> Hello </Button>
                <Button variant="outline"> Hello </Button>
                <Button variant="ghost"> Hello </Button>
                <Button size="xs"> Hello </Button>
                <Button size="base"> Hello </Button>
                <Button size="large"> Hello </Button>

            </div>
        </div>
        <div>
            <h2 className="mb-4 text-lg font-mono">Forms</h2>
            <hr className="mb-4 border-gray-200 dark:border-gray-800" />
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <form>
                        <label className="text-gray-700 dark:text-grey-300 block mb-1">Name</label>
                        <input type="text" className="w-full rounded-md shadow-sm border-gray-300 bg-white dark:border-gray-700 dark:bg-gray-950" placeholder="Type something in here..." />
                    </form>
                </div>
            </div>

        </div>
        <div>
            <h2 className="mb-4 text-lg font-mono">City</h2>
            <hr className="mb-4 border-gray-200 dark:border-gray-800" />
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <form>
                        <label className="text-gray-700 dark:text-grey-300 block mb-1">Name</label>
                        <select type="text" className="w-full rounded-md shadow-sm border-gray-300 bg-white dark:border-gray-700 dark:bg-gray-950" >
                            <option value="Roma">Roma</option>
                            <option value="Milano">Milano</option>
                            <option value="Napoli">Napoli</option>
                        </select>

                    </form>
                </div>
            </div>

        </div>

        <div className="grid grid-cols-2 gap-4">
            <div>
                <form>
                    <label htmlFor="checkbox-name" className="text-gray-700 dark:text-grey-300 block mb-1">Name</label>
                    <input id="checkbox-name" type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-950 dark:text-blue-500" />
                </form>
            </div>
        </div>



    </main>)
}