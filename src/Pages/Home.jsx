import React from "react";
import SwiperSection from "../components/SwiperSection/SwiperSection";
import DealOfWeek from "../components/DealOfWeek/DealOfWeek";
import WhatsInTrend from "../components/WhatsInTrend/WhatsInTrend";
import WhatsPeopleSay from "../components/WhatsPeopleSay/WhatsPeopleSay";
import Popular from "../components/Popular/Popular";
import Landing from "../components/Landing/Landing";
import { useDispatch, useSelector } from "react-redux";
export default function Home() {
  const { user } = useSelector((state) => state.userType);
  
return  (<div>
{user === "user"&&  
      (<div><Landing />
      <SwiperSection />
      <DealOfWeek />
      <WhatsInTrend />
      <WhatsPeopleSay />
      <Popular /></div>)}
    </div>)
  

}
