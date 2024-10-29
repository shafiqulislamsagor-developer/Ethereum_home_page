import ExchangeTable from "./ExchangeTable";

export default function EthereumPriceTable() {
  const priceData = [
    {
      title: "24-Hour High",
      price: "$2,606.65",
      color: "",
    },
    {
      title: "24-Hour Low",
      price: "$2,606.65",
      color: "",
    },
    {
      title: "24-Hour Change",
      price: "$2,606.65",
      color: "text-green",
    },
    {
      title: "Market Cap",
      price: "$2,606.65",
      color: "",
    },
  ];
  return (
    <div className="max-w-screen-xl mx-auto my-10">
      <h1 className="text-[40px] font-bold">Ethereum Price: USD/ETH</h1>
      <h3 className="text-7xl font-bold text-center mt-5">$ 2,606.65</h3>
      <p className="text-4xl font-medium text-green text-center mt-2">+5.30%</p>
      <div className="grid grid-cols-4 my-10 items-center justify-around text-center">
        {priceData.map((price) => (
          <div>
            <h1 className="text-2xl">{price.title}</h1>
            <p className={`text-4xl font-bold mt-2 ${price.color}`}>
              {price.price}
            </p>
          </div>
        ))}
      </div>
      <ExchangeTable />
    </div>
  );
}
