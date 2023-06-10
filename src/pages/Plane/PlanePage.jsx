import React from "react";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import Button from "../../components/button/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../components/spinner/Spinner";
import { getPlane } from "../../store/planeSlice/planeSlice";

import { useParams } from "react-router-dom";
import styles from "./styles.module.css";
const PlanePage = () => {
  const { plane, isLoading } = useSelector((state) => state.planeSlice);
  const { planes } = useSelector((state) => state.planesSlice);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  console.log(id, "id", plane, "plane", planes);
  React.useEffect(() => {
    dispatch(getPlane(id));
  }, [dispatch, id]);
  if (isLoading) return <Spinner />;
  return (
    plane && (
      <ContentWrapper className={styles.plane}>
        <div className={styles.descContent}>
          <Button onClick={() => navigate(-1)} isBackButton={true}>
            Назад
          </Button>
          <h1 className={styles.title}>{plane.name}</h1>
          <div className={styles.price}>{plane.price}$</div>
          <Button
            containerClassName={styles.buyBtnContainer}
            onClick={() => navigate("/order")}
          >
            Оформить заказ
          </Button>
          <p className={styles.desc}>{plane.description}</p>
        </div>
        <div className={styles.imageContent}>
          <img className={styles.image} src={plane.planeImage} alt="img" />
        </div>
      </ContentWrapper>
    )
  );
};

export default PlanePage;
