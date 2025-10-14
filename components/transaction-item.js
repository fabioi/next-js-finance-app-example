import { useFormatCurrency } from "@/hooks/use-format-currency";
import { HandCoins, Landmark, PiggyBank, Wallet } from "lucide-react";

export default function TransactionItem({ type, category, description, amount }) {

      const typesMap = {
            Income: {
                  icon: HandCoins,
                  colors: "text-green-500 dark:text-green-500",
            },
            Expense: {
                  icon: Wallet,
                  colors: "text-red-500 dark:text-red-500",
            },
            Saving: {
                  icon: PiggyBank,
                  colors: "text-indigo-500 dark:text-yellow-500",
            },
            Investment: {
                  icon: Landmark,
                  colors: "text-yellow-500 dark:text-yellow-500",
            },
      }


      // Icon component is an alias for the icon component from the typesMap
      const IconComponent = typesMap[type].icon;
      const IconColor = typesMap[type].colors;
      const formatAmount = useFormatCurrency(amount);


      return (
            <div className="flex w-full items-center">
                  <div className="flex items-center mr-4 grow">
                        <IconComponent className={`${IconColor} mr-2 w-4 h-4`} />
                        <div>{description}</div>
                  </div>

                  <div className="min-w-[150px] items-center hidden md:flex">
                        {category && (
                              <div className="rounded-md text-xs bg-gray-700 dark:bg-gray-100 text-gray-100 dark:text-black px-2 py-0.5">
                                    {category}
                              </div>
                        )}
                  </div>

                  <div className="min-w-[70px] text-right"> {formatAmount}</div>
                  <div className="min-w-[50px] flex justify-end">...</div>
            </div>
      )
}