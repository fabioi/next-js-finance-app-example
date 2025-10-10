import { useMemo } from "react";

export default function Trend({
    type, amount, prevAmount
}) {

    const colorClasses = {
        Income: 'text-green-700 dark:text-green-300',
        Expense: 'text-red-700 dark:text-red-300',
        Investment: 'text-indigo-700 dark:text-indigo-300',
        Savings: 'text-yellow-700 dark:text-yellow-300',
    }

    const calcPercentageChange = (prevAmount, amount) => {
        if (!prevAmount || !amount) {
            return 0;
        }

        return ((amount - prevAmount) / prevAmount) * 100;
    }


    const percentageChange = useMemo(() => calcPercentageChange(prevAmount, amount),
        [prevAmount, amount]
    );

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('it-IT', {
            style: 'currency',
            currency: 'EUR',
        }).format(amount);
    }

    return (
        <div>
            <div>
                <div className={`font-semibold ${colorClasses[type]}`}>{type} </div>
            </div>
            <div className="text-2xl font-bold text-black dark:text-white mb-2">
                {formatCurrency(Number(amount ?? 0))}
            </div>
            <div className="flex space-x-1 items-center text-sm">

                {percentageChange.toFixed(2)}% vs last period
            </div>
        </div>
    )

}
