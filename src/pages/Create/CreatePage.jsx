import React from "react";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import styles from "../Create/styles.module.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { createPlane } from "../../store/planeSlice/planeSlice";
const CreatePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { errors } = useSelector((state) => state.planeSlice);
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [capacity, setCapacity] = React.useState("");
  const [planeImage, setPlaneImage] = React.useState(null);
  const handleCreatePlane = React.useCallback(() => {
    const formData = new FormData();
    // добавляем в FormData следующие поля
    formData.append("name", name);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("capacity", capacity);
    formData.append("planeImage", planeImage);
    // передаю заполненную форму и затем
    dispatch(createPlane(formData)).then((res) => {
      if (!res.error) {
        console.log(res, "res");
        navigate(`/plane/${res.payload._id}`, { replace: true });
      }
    });
  }, [planeImage, name, price, description, capacity]);

  return (
    <ContentWrapper className={styles.createPlane}>
      <Button
        //   чтобы вернуться назад откуда пришел
        onClick={() => navigate(-1)}
        isBackButton={true}
        containerClassName={styles.backButtonContainer}
      >
        Назад
      </Button>
      <form className={styles.form}>
        <h1 className={styles.title}>Создать самолет</h1>
        <Input
          name="name"
          placeholder="Название самолёта"
          error={errors && errors.name && errors.name.message}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          name="price"
          placeholder="Цена самолёта"
          error={errors && errors.price && errors.price.message}
          onChange={(e) => setPrice(+e.target.value)}
        />
        <Input
          name="description"
          placeholder="Описание"
          error={errors && errors.description && errors.description.message}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Input
          name="capacity"
          placeholder="Вместимость"
          error={errors && errors.capacity && errors.capacity.message}
          onChange={(e) => setCapacity(e.target.value)}
        />
        <Input
          name="planeImage"
          type="file"
          error={errors && errors.planeImage && errors.planeImage.message}
          onChange={(e) => setPlaneImage(e.target.files[0])}
        />
        <Button
          containerClassName={styles.buttonContainer}
          onClick={handleCreatePlane}
        >
          Создать
        </Button>
      </form>
    </ContentWrapper>
  );
};

export default CreatePage;
