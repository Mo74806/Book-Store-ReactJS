import React from "react";
import SwiperSection from "../components/SwiperSection/SwiperSection";
import DealOfWeek from "../components/DealOfWeek/DealOfWeek";
import WhatsInTrend from "../components/WhatsInTrend/WhatsInTrend";
import WhatsPeopleSay from "../components/WhatsPeopleSay/WhatsPeopleSay";
import Popular from "../components/Popular/Popular";
import Landing from "../components/Landing/Landing";
export default function Home() {
  return (
    <div>
      <Landing />
      <SwiperSection />
      <DealOfWeek />
      <WhatsInTrend />
      <WhatsPeopleSay />
      <Popular />
    </div>
  );
}
