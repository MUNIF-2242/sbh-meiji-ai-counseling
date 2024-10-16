import PricingTableContent from "@/components/pricing-table/PricingTableContent";
import Head from "next/head";
import React from "react";

const pricingTable = () => {
  return (
    <>
      <Head>
        <title>Digiboard - Pricing Table 1</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/favicon.png" />
      </Head>
      <div className="body-padding">
        <PricingTableContent />
      </div>
    </>
  );
};

export default pricingTable;
