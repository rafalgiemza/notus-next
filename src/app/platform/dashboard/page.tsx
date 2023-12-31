import React from "react";

import HeaderStats from "@/components/HeaderStats/HeaderStats.js";
import CardPageVisits from "@/components/Cards/CardPageVisits.js";
import CardSocialTraffic from "@/components/Cards/CardSocialTraffic.js";

export default function DashboardPage() {
  return (
    <>
      <HeaderStats />
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardPageVisits />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardSocialTraffic />
        </div>
      </div>
    </>
  );
}
