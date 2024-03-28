import React from "react";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/footer.css";

const quickLinks = [
  {
    path: "/about",
    display: "О нас",
  },

  {
    path: "#",
    display: "Политика",
  },

  {
    path: "/cars",
    display: "Список машин",
  },
  {
    path: "/blogs",
    display: "Блог",
  },

  {
    path: "/contact",
    display: "Контакты",
  },
];

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="12">
            <div className="logo footer__logo">
              <h1>
                <Link to="/home" className=" d-flex align-items-center gap-2">
                  <i class="ri-car-line"></i>
                  <span>
                    Аренда машин
                  </span>
                </Link>
              </h1>
            </div>
            <p className="footer__logo-content">
            © 2024 DriveEasy. Все права защищены. 
            | Контакты: carrent@driveeasy.com | Телефон: +996552036757 |
             Местоположение: [Ахунбаева 125] | Политика конфиденциальности | 
             Условия использования
            </p>
          </Col>

          <Col lg="2" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title">Быстрые ссылки</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">Главный офис</h5>
              <p className="office__info">Ахунбаева 125, Бишкек, Кыргызстан</p>
              <p className="office__info">Номер телефона: +996552036757</p>

              <p className="office__info">Почта: arrent@driveeasy.com</p>

              <p className="office__info">Время работы: с 10:00 - до 19:00</p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="12">
            <div className="mb-4">
              <h5 className="footer__link-title">Информационный бюллетень</h5>
              <p className="section__description">Подпишитесь на нашу рассылку</p>
              <div className="newsletter">
                <input type="email" placeholder="почта" />
                <span>
                  <i class="ri-send-plane-line"></i>
                </span>
              </div>
            </div>
          </Col>

          <Col lg="12">
            <div className="footer__bottom">
              <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
                <i class="ri-copyright-line"></i>Copyright {year}, Developed by
                emir and abil. All rights reserved.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
