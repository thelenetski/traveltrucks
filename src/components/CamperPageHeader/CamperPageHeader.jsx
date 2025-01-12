import css from "./CamperPageHeader.module.css";
import sprite from "/sprite.svg";

const CamperPageHeader = ({ data }) => {
  const location = data?.location ?? "";
  const [country, city] = location.split(",").map((item) => item.trim());
  return (
    <div className={css.header}>
      <h4>{data?.name}</h4>
      <div className={css.info}>
        <svg className={css.star}>
          <use href={sprite + "#icon-star"}></use>
        </svg>
        <p>{`${data?.rating}(${data?.reviews?.length} Reviews)`}</p>
        <div className={css.location}>
          <svg className={css.map}>
            <use href={sprite + "#icon-map"}></use>
          </svg>
          <p>{`${city}, ${country}`}</p>
        </div>
      </div>
      <p className={css.price}>{`€${data?.price}.00`}</p>
    </div>
  );
};

export default CamperPageHeader;
