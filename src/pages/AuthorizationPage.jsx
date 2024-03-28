import React,{useState, } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";

import "../styles/authorization.css";

const AuthorizationPage = () => {
    // Состояния для хранения значений полей ввода
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    // Обработчик отправки формы
    const handleSubmit = (event) => {
      event.preventDefault();
      // Здесь вы можете выполнить логику для отправки учетных данных на сервер
      console.log('Email:', email);
      console.log('Password:', password);
    };
  
    return (
      <div>
        <h2>Страница авторизации</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Пароль:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Войти</button>
        </form>
      </div>
    );
  };
  

export default AuthorizationPage;