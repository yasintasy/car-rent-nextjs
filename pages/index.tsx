import React from "react";
import Layout from "../components/layout";
import Card from "../components/card";
import StatisticCard from "../components/statistic-card";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip);

const data = {
  labels: ["Hired", "Canceled", "Pending"],
  datasets: [
    {
      label: "Total",
      data: [54, 20, 26],
      backgroundColor: ["#006AFF", "#52C93F", "#FF2727"],
    }
  ]
};

export default function Home() {
  return (
    <Layout>
      {/* today statistic */}
      <div className="flex flex-col py-8 space-y-4 overflow-auto w-80 bg-gray-04 px-7">
        <div>
          <h2 className="text-gray-01">Todays Statistic</h2>
          <span className="h5 text-gray-03 ">{new Date().toLocaleString("id-ID",
            {
              weekday: "long",
              day: "2-digit",
              month: "short",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              hour12: true,
            })}</span>
        </div>

        {/* income */}
        <StatisticCard
          title="Income"
          date="Today"
          amount={9460.00}
          percentage={-1.5}
          comparedText="Compared to $9940 yesterday"
          lastWeekTest="Last week $25658.00" />


        {/* expanses */}
        <StatisticCard
          title="Expenses"
          date="Today"
          amount={5660.00}
          percentage={2.5}
          comparedText="Compared to $5240 yesterday"
          lastWeekTest="Last week $25658.00" />

        <Card>
          <div className="flex flex-col space-y-[30px]">
            {/* header */}
            <div className="flex flex-row items-center justify-between">
              <h3 className="text-gray-02">Hire vs Cancel</h3>
              <span className="p5 text-gray-02 bg-[#F4F5F7] px-2 py-1 rounded-sm">Today</span>
            </div>

            <div>
              <Doughnut data={data} options={{ cutout: '70%' }} className="mb-6" />
              <div className="flex flex-col space-y-2">
                <div className="flex flex-row items-center">
                  <span className="flex-none w-4 h-4 rounded-full bg-primary"></span>
                  <p className="flex-1 ml-3 mr-6">Total Hired</p>
                  <p>54%<span className="text-green">↑</span></p>
                </div>
                <div className="flex flex-row items-center">
                  <span className="flex-none w-4 h-4 rounded-full bg-secondary"></span>
                  <p className="flex-1 ml-3 mr-6">Total Canceled</p>
                  <p>54%<span className="text-secondary">↓</span></p>
                </div>
                <div className="flex flex-row items-center">
                  <span className="flex-none w-4 h-4 rounded-full bg-green"></span>
                  <p className="flex-1 ml-3 mr-6">Total Pending</p>
                  <p>54%<span className="text-secondary">↓</span></p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <div className="flex-1 bg-white">C</div>
    </Layout>
  );
}
