import css from "./Equipments.module.css";
import sprite from "/sprite.svg";

const Equipments = ({ item }) => {
  return (
    <>
      {item === "AC" && (
        <>
          <svg className={css.wind}>
            <use href={sprite + "#icon-wind"}></use>
          </svg>
          <p>{item}</p>
        </>
      )}
      {item === "TV" && (
        <>
          <svg className={css.tv}>
            <use href={sprite + "#icon-tv"}></use>
          </svg>
          <p>{item}</p>
        </>
      )}
      {item === "Bathroom" && (
        <>
          <svg className={css.bathroom}>
            <use href={sprite + "#icon-bathroom"}></use>
          </svg>
          <p>{item}</p>
        </>
      )}
      {(item === "petrol" || item === "diesel" || item === "hybrid") && (
        <>
          <svg className={css.engine}>
            <use href={sprite + "#icon-fuel-pump"}></use>
          </svg>
          <p style={{ textTransform: "capitalize" }}>{item}</p>
        </>
      )}
      {(item.toLowerCase() === "manual" ||
        item.toLowerCase() === "automatic") && (
        <>
          <svg className={css.transmission}>
            <use href={sprite + "#icon-diagram"}></use>
          </svg>
          <p style={{ textTransform: "capitalize" }}>{item}</p>
        </>
      )}
      {item === "Kitchen" && (
        <>
          <svg className={css.kitchen}>
            <use href={sprite + "#icon-cup-hot"}></use>
          </svg>
          <p>{item}</p>
        </>
      )}
      {item === "Radio" && (
        <>
          <svg className={css.radio}>
            <use href={sprite + "#icon-ui-radios"}></use>
          </svg>
          <p>{item}</p>
        </>
      )}
      {item === "Water" && (
        <>
          <svg className={css.water}>
            <use href={sprite + "#icon-water"}></use>
          </svg>
          <p>{item}</p>
        </>
      )}
      {item === "Microwave" && (
        <>
          <svg className={css.microwave}>
            <use href={sprite + "#icon-microwave"}></use>
          </svg>
          <p>{item}</p>
        </>
      )}
      {item === "Van" && (
        <>
          <svg className={css.van}>
            <use href={sprite + "#icon-bi_grid-1x2"}></use>
          </svg>
          <p>{item}</p>
        </>
      )}
      {item === "Fully Integrated" && (
        <>
          <svg className={css.fullyIntegrated}>
            <use href={sprite + "#icon-bi_grid"}></use>
          </svg>
          <p>{item}</p>
        </>
      )}
      {item === "Alcove" && (
        <>
          <svg className={css.alcove}>
            <use href={sprite + "#icon-bi_grid-3x3-gap"}></use>
          </svg>
          <p>{item}</p>
        </>
      )}
    </>
  );
};

export default Equipments;
