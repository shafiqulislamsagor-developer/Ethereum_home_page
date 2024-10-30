import React from "react";
import Chart from "react-apexcharts";

const EthChart: React.FC = () => {
  const options: ApexCharts.ApexOptions | undefined = {
    chart: {
      type: "area",
      toolbar: {
        show: false,
      },
    },
    colors: ["#2a4365"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2024-08-01T00:00:00.000Z",
        "2024-08-10T00:00:00.000Z",
        "2024-08-20T00:00:00.000Z",
        "2024-09-01T00:00:00.000Z",
        "2024-09-10T00:00:00.000Z",
        "2024-09-20T00:00:00.000Z",
        "2024-10-01T00:00:00.000Z",
        "2024-10-10T00:00:00.000Z",
        "2024-10-20T00:00:00.000Z",
      ],
      labels: {
        style: {
          colors: "#A0AEC0",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#A0AEC0",
        },
      },
    },
    tooltip: {
      x: {
        format: "dd MMM",
      },
    },
    grid: {
      borderColor: "#E2E8F0",
    },
    fill: {
      opacity: 0.5,
    },
  };

  const series = [
    {
      name: "ETH/USD",
      data: [2200, 2100, 2150, 2120, 2180, 2250, 2280, 2260, 2240],
    },
  ];
  const timeData = ["1m", "3m", "6m", "1y", "all"];

  return (
    <div className="bg-white max-w-screen-xl mx-auto rounded-lg p-6">
      <h2 className="text-2xl font-medium text-gray-800 text-center">
        ETH/USD
      </h2>
      <div className="flex justify-between text-xs items-center my-4">
        <div className="flex items-center gap-2">
          <p className="inline-block font-medium text-gray-600">ZOOM</p>
          {timeData.map((item) => (
            <button className="mx-1 px-3 py-1 text-sm font-medium text-gray-700 bg-gray-200 rounded">
              {item}
            </button>
          ))}
        </div>
        <div className="text-xs flex items-center gap-2">
          <p>From</p>
          <input className="border rounded-md p-1 " type="date" name="" id="" />
          <p>To</p>
          <input className="border rounded-md p-1 " type="date" name="" id="" />
        </div>
      </div>
      <Chart options={options} series={series} type="area" height={320} />
    </div>
  );
};

export default EthChart;
