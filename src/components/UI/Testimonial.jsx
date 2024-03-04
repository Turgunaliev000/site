import React from "react";
import Slider from "react-slick";

import "../../styles/testimonial.css";

import amin from "../../assets/all-images/amin.jpg";
import medet from "../../assets/all-images/medet.jpg";
import kutya from "../../assets/all-images/kutya.jpg";
import lera from "../../assets/all-images/Lera.jpg";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p className="section__description">
        Весь процесс от бронирования до возврата автомобиля прошел
         гладко и без каких-либо проблем. Я был приятно удивлен гибкостью 
         условий аренды и разумными тарифами.


        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={amin} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Самишов Амин</h6>
            <p className="section__description">Покупатель</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        Я очень доволен опытом аренды автомобиля в компании "DriveEasy".
        С самого начала процесс был удивительно простым и удобным.
        Они предоставили мне широкий выбор автомобилей, из которых я мог выбрать тот, 
        который лучше всего подходил моим потребностям.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={medet} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Амантаев Медет</h6>
            <p className="section__description">Покупатель</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        Сотрудники компании были очень дружелюбны и профессиональны.
         Они ответили на все мои вопросы и объяснили все условия аренды
          очень ясно. Когда я забрал автомобиль, он был чистым, ухоженным и 
          полностью готовым к поездке.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={kutya} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Мадымаров Кутманбек</h6>
            <p className="section__description">Покупатель</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        Я определенно рекомендую компанию "DriveEasy" всем,
         кто ищет надежного партнера для аренды автомобиля. 
         Они делают процесс аренды простым и приятным, 
         что делает каждое путешествие еще более приятным и беззаботным.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={lera} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Набиева Валерия</h6>
            <p className="section__description">Покупатель</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonial;
