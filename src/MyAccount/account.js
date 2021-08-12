import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import CarouselSlider from "./carousel";

const Myaccount = () => {
  let history = useHistory();
  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      history.push("/login");
    }
  });
  return (
    <React.Fragment>
      
        <CarouselSlider />

    </React.Fragment>
  );
};

export default Myaccount;
