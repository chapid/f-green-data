import { useEffect, useContext } from 'react';
import Slider from 'react-slick';
import { MyLineItem } from "../../Components/LineActionCard";
import { LineItemContext } from '../../Context';
import { request } from '../../api/AxiosHandler';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carrousel.css";

function MyListLineActions() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  const contextItem = useContext(LineItemContext);

  useEffect(() => {
    request("GET", "/quantify-emissions/user")
      .then((response) => {
        contextItem.setMyLineActions(response.data);
      })
      .catch((error) => {
        console.error("Failed to fetch lines");
      });
  }, []);

  return (
    <div className='w-full max-w-5xl mx-auto'>
      <Slider {...settings}>
        {contextItem.myLineActions?.map((item) => (
          <MyLineItem
            key={item.id}
            title={item.name_action_line}
            baseYear={item.base_year}
            historicalYear={item.historic_year}
          />
        ))}
      </Slider>
    </div>
  );
}

export { MyListLineActions };