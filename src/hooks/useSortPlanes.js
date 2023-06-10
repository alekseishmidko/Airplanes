import { useState, useMemo } from "react";
// кастомный хук для сортировки массива
export const useSortPlanes = (planes = []) => {
  // дефолтное состояние ( то есть будет по возрастанию)
  const [isDescSort, setIsDescSort] = useState(false);

  const sortedPlanes = useMemo(() => {
    // пушится массив данных
    const sortablePlanes = [...planes];
    // сортировка по убыванию
    sortablePlanes.sort((a, b) => {
      if (+a.price < +b.price) return isDescSort ? 1 : -1;
      if (+a.price > +b.price) return isDescSort ? -1 : 1;

      return 0;
    });
    // отсортированный массив
    return sortablePlanes;
    // хук срабатывает если изменятся или параметр сортировки или сам массив исходных данных
  }, [isDescSort, planes]);
  // хук возвращает параметр сортировки, ф-ю изменения параметра сортировки и отсортированный массив
  return {
    sortedPlanes,
    isDescSort,
    setIsDescSort,
  };
};
