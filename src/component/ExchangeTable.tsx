import React from "react";

interface ExchangeData {
  exchange: string;
  price: string;
  change: string;
  percentChange: string;
  high: string;
  low: string;
  volume: string;
  marketCap: string;
}

const data: ExchangeData[] = [
  {
    exchange: "Gdax",
    price: "$2,616.60",
    change: "$133.38",
    percentChange: "+5.37%",
    high: "$2,631.04",
    low: "$2,478.67",
    volume: "$287,394,445.2",
    marketCap: "$315.05 B",
  },
  {
    exchange: "Bitfinex",
    price: "$2,620.00",
    change: "$133.00",
    percentChange: "+5.35%",
    high: "$2,630.20",
    low: "$2,483.10",
    volume: "$7,968,099.4",
    marketCap: "$315.46 B",
  },
  {
    exchange: "Kraken",
    price: "$2,615.75",
    change: "$132.28",
    percentChange: "+5.33%",
    high: "$2,630.00",
    low: "$2,480.46",
    volume: "$99,724,988.4",
    marketCap: "$314.95 B",
  },
  {
    exchange: "Gemini",
    price: "$2,617.38",
    change: "$131.78",
    percentChange: "+5.30%",
    high: "$2,626.88",
    low: "$2,479.24",
    volume: "$17,022,287.8",
    marketCap: "$315.15 B",
  },
];

const tableHeader: string[] = [
  "Exchange",
  "Price",
  "Change",
  "% Change",
  "24-Hour High",
  "24-Hour Low",
  "24-Hour Volume",
  "Market Cap",
];

const ExchangeTable: React.FC = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            {tableHeader.map((title) => (
              <th className="px-4 py-2 border-r text-left font-bold text-slate-900 border-b">
                {title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="text-slate-900">
              <td className="px-4 font-medium py-2 border-r border-b">
                {row.exchange}
              </td>
              <td className="px-4 font-medium py-2 border-r border-b">
                {row.price}
              </td>
              <td className="px-4 font-medium py-2 border-r border-b text-green">
                {row.change}
              </td>
              <td className="px-4 font-medium py-2 border-r border-b text-green">
                {row.percentChange}
              </td>
              <td className="px-4 font-medium py-2 border-r border-b">
                {row.high}
              </td>
              <td className="px-4 font-medium py-2 border-r border-b">
                {row.low}
              </td>
              <td className="px-4 font-medium py-2 border-r border-b">
                {row.volume}
              </td>
              <td className="px-4 font-medium py-2 border-b">
                {row.marketCap}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExchangeTable;
