import React from "react";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import Button from "../../components/button/Button";
import styles from "../Order/styles.module.css";
import { useNavigate } from "react-router-dom";
const OrderPage = () => {
  const navigate = useNavigate();
  return (
    <ContentWrapper className={styles.order}>
      <h1>Ваш заказ будет доставлен в ближайшее время</h1>
      <Button containerClassName={styles.button} onClick={() => navigate("/")}>
        На главную
      </Button>
    </ContentWrapper>
  );
};

export default OrderPage;
