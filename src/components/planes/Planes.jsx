import React from "react";
import styles from "../planes/styles.module.css";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import Spinner from "../spinner/Spinner";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import PlaneItem from "../planeItem/PlaneItem";
import { useDispatch, useSelector } from "react-redux";
import { getPlanes } from "../../store/planesSlice/planesSlice";
import { useSortPlanes } from "../../hooks/useSortPlanes";
const Planes = () => {
  const dispatch = useDispatch();
  const { planes, isLoading } = useSelector((state) => state.planesSlice);

  // Забросил массив в кастомный хук для сортировки по возрастанию или убыванию(если придет Null чтобы хук не сломался подставится пустой массив)
  const { isDescSort, setIsDescSort, sortedPlanes } = useSortPlanes(
    planes || []
  );
  React.useEffect(() => {
    dispatch(getPlanes());
  }, [dispatch]);
  if (isLoading === true) {
    return <Spinner />;
  }

  console.log(planes);

  return (
    <div>
      <div className={styles.sort}>
        <ContentWrapper className={styles.planesHeader}>
          <Button
            className={styles.sortBtn}
            onClick={() => setIsDescSort(!isDescSort)}
          >
            Сортировать по цене {`${isDescSort ? "+" : "-"}`}
          </Button>
          <Link to={"/create-plane"} className={styles.createPlaneBtn}>
            Добавить самолет
          </Link>
        </ContentWrapper>
      </div>
      <ContentWrapper className={styles.planesGrid}>
        {sortedPlanes &&
          sortedPlanes.map((item) => <PlaneItem key={item._id} {...item} />)}
      </ContentWrapper>
    </div>
  );
};

export default Planes;
