import React from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";
import BecomeDriverSection from "../components/UI/BecomeDriverSection";

import driveImg from "../assets/all-images/drive.jpg";
import OurMembers from "../components/UI/OurMembers";
import "../styles/about.css";

const About = () => {
  return (
    <Helmet title="About">
      <CommonSection title="About Us" />
      <AboutSection aboutClass="aboutPage" />

      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img src={driveImg} alt="" className="w-100 rounded-3" />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className="section__title">
                    Мы стремимся предоставлять решения для безопасных поездок
                </h2>

                <p className="section__description">
                В "DriveEasy" мы делаем аренду автомобилей легкой, удобной и доступной
                 для каждого клиента. Наша компания стремится предложить широкий выбор 
                 автомобилей различных классов и марок, чтобы удовлетворить потребности 
                 самых взыскательных клиентов.
                </p>

                <p className="section__description">
                "DriveEasy" предлагает разнообразные модели автомобилей, от экономичных
                 и компактных до премиум-класса и внедорожников. Независимо от того, нужен ли
                  вам автомобиль на выходные, на длительное путешествие или на замену временно 
                  недоступному транспорту, мы найдем подходящий вариант для вас.
                </p>

                <div className=" d-flex align-items-center gap-3 mt-4">
                  <span className="fs-4">
                    <i class="ri-phone-line"></i>
                  </span>

                  <div>
                    <h6 className="section__subtitle">Нужна помощь?</h6>
                    <h4>+996708441590</h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <BecomeDriverSection />

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h2 className="section__title">Наши сотрудники</h2>
            </Col>
            <OurMembers />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default About;
