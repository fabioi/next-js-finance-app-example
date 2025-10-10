import { useFormatCurrency } from "@/hooks/use-format-currency";

export default function TransactionItem({ type, category, description, amount }) {
      const formatAmount = useFormatCurrency(amount);


      return (
            <div className="flex w-full items-center">
                  <div className="flex items-center mr-4 grow">
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