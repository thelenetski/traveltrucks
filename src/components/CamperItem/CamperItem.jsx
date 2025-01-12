import css from "./CamperItem.module.css";
import sprite from "/sprite.svg";
import Equipments from "../Equipments/Equipments";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectFavCampers } from "../../redux/selectors";
import { addFav } from "../../redux/campersSlice";
import clsx from "clsx";

const CamperItem = (data) => {
  const location = data?.data?.location ?? "";
  const [country, city] = location.split(",").map((item) => item.trim());
  const fav = useSelector(selectFavCampers);
  const dispatch = useDispatch();

  const addFavorites = (item) => {
    dispatch(addFav({ id: item }));
  };

  return (
    <article className={css.camperItemWrap}>
      <img src={data?.data?.gallery[0]?.thumb} alt="camper-picture" />
      <div className={css.camperItemInfo}>
        {/* -----------------TITLE------------------ */}
        <div className={css.titleWrap}>
          <h4>
            {data?.data?.name.slice(0, 27) +
              (data?.data?.name.length > 26 ? "..." : "")}
          </h4>
          <div className={css.titleWrapPriceBox}>
            <p>{`€${data?.data?.price}.00`}</p>
            <button onClick={() => addFavorites(data?.data?.id)}>
              <svg
                className={clsx(css.fav, {
                  [css.favActive]: fav.some(
                    (item) => item.id === data?.data?.id
                  ),
                })}
              >
                <use href={sprite + "#icon-fav"}></use>
              </svg>
            </button>
          </div>
        </div>
        {/* -----------------REVIEWS/COUNTRY------------------ */}
        <div className={css.reviewsCountryWrap}>
          <div className={css.reviews}>
            <svg className={css.star}>
              <use href={sprite + "#icon-star"}></use>
            </svg>
            <p>{`${data?.data?.rating}(${data?.data?.reviews.length} Reviews)`}</p>
          </div>
          <div className={css.location}>
            <svg className={css.map}>
              <use href={sprite + "#icon-map"}></use>
            </svg>
            <p>{`${city}, ${country}`}</p>
          </div>
        </div>
        {/* -----------------DESCRIPTION------------------ */}
        <div className={css.descrWrap}>
          <p>{data?.data?.description.slice(0, 60) + "..."}</p>
        </div>
        {/* --------------Vehicle equipment-------------- */}
        <div className={css.equipTagsWrap}>
          {data?.data?.AC && (
            <div className={css.equipTag}>
              <Equipments item="AC" />
            </div>
          )}
          {data?.data?.TV && (
            <div className={css.equipTag}>
              <Equipments item="TV" />
            </div>
          )}
          {data?.data?.bathroom && (
            <div className={css.equipTag}>
              <Equipments item="Bathroom" />
            </div>
          )}
          {data?.data?.engine && (
            <div className={css.equipTag}>
              <Equipments item={data?.data?.engine} />
            </div>
          )}
          {data?.data?.transmission && (
            <div className={css.equipTag}>
              <Equipments item={data?.data?.transmission} />
            </div>
          )}
          {data?.data?.kitchen && (
            <div className={css.equipTag}>
              <Equipments item="Kitchen" />
            </div>
          )}
          {data?.data?.radio && (
            <div className={css.equipTag}>
              <Equipments item="Radio" />
            </div>
          )}
          {data?.data?.water && (
            <div className={css.equipTag}>
              <Equipments item="Water" />
            </div>
          )}
        </div>
        {/* --------------Show more-------------- */}
        <div className={css.showMoreBtn}>
          <Link
            className={css.button}
            to={`${data?.data?.id.toString()}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Show more
          </Link>
        </div>
      </div>
    </article>
  );
};

export default CamperItem;
