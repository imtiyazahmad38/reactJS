import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const CarouselSlider = () => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState([]);
  let request = {
    request: { type: "getBannerSlider", devicetype: "I" },
    requestinfo: {},
  };
  useEffect(() => {
    setLoading(true);
    fetch("http://api.mifragroup.com/WebService/getResponse", {
      method: "post",
      crossDomain: true,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(request),
    })
      .then((res) => res.json())
      .then((result) => {
        setResponse(result.response.images);
        console.log(response);
        setLoading(false);
      })
      .catch((ex) => {
        setLoading(false);
        setResponse([]);
      });
  }, []);
  return (
    <div>
      <Carousel fade>
        {loading !== true ? (
          response.length > 0 ? (
            response.map((obj) => (
              <Carousel.Item key={obj.id}>
                <img className="d-block w-100 h-50" src={obj.imageName} alt="slider" />
              </Carousel.Item>
            ))
          ) : (
            ""
          )
        ) : (
          <p>loading</p>
        )}
      </Carousel>
    </div>
  );
};

export default CarouselSlider;
