import { useMemo } from "react";


export const useFormatCurrency = (amount) => {
    const formatCurrency = (value) => {
        return new Intl.NumberFormat('it-IT', {
            style: 'currency',
            currency: 'EUR',
        }).format(value);
    };

    return useMemo(() => formatCurrency(amount), [amount]);
}