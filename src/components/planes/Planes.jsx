import React from "react";
import styles from "../planes/styles.module.css";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import Spinner from "../spinner/Spinner";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import PlaneItem from "../planeItem/PlaneItem";
import { useDispatch, useSelector } from "react-redux";
import { getPlanes } from "../../store/planesSlice/planesSlice";
const Planes = () => {
  const dispatch = useDispatch();
  const { planes, isLoading } = useSelector((state) => state.planesSlice);
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
        <ContentWrapper className={styles.planesHeader}></ContentWrapper>
      </div>
      {/* <ContentWrapper className={styles.planesGrid}> */}
      {/* {sortedPlanes && */}
      {/* // sortedPlanes.map((plane) => <PlaneItem key={plane._id} {...plane} /> */}
      {/* )} */}
      {planes &&
        planes.map((item, index) => <PlaneItem {...item} key={index} />)}
      {/* </ContentWrapper> */}
    </div>
  );
};

export default Planes;
//   <div className={styles.sort}>
//     <ContentWrapper className={styles.planesHeader}>

//       <Button
//         className={styles.sortBtn}
//         //   onClick={() => setIsDescSort(!isDescSort)}
//       >
//         {/* Сортировать по цене {`${isDescSort ? "+" : "-"}`} */}
//       </Button>
//       <Link to={"/create-plane"} className={styles.createPlaneBtn}>
//         Добавить самолет
//       </Link>
//     </ContentWrapper>
//   </div>
//   <ContentWrapper className={styles.planesGrid}>
//     {/* {sortedPlanes && */}
//     {/* // sortedPlanes.map((plane) => <PlaneItem key={plane._id} {...plane} /> */}
//     {/* )} */}
//   </ContentWrapper>
// </div>
