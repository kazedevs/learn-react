import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
    const [data, setData] = useState({})

    useEffect(() => {
        if (!currency) return;

        // Using ExchangeRate-API (free tier) - gets all rates at once
        fetch(`https://api.exchangerate-api.com/v4/latest/USD`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Failed to fetch currency data')
                }
                return res.json()
            })
            .then((res) => {
                // Convert the rates object to match expected format
                // Create an object with currency codes as keys and rates as values
                const currencyData = {};
                Object.keys(res.rates).forEach(code => {
                    currencyData[code.toLowerCase()] = res.rates[code];
                });
                setData(currencyData);
            })
            .catch((err) => {
                console.error('Currency API Error:', err);
                // Fallback to empty object if API fails
                setData({});
            })
    }, [currency])

    return data;
}

export default useCurrencyInfo;