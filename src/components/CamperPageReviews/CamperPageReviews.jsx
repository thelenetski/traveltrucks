import css from "./CamperPageReviews.module.css";
import sprite from "/sprite.svg";

const CamperPageReviews = ({ data }) => {
  console.log(data);
  const reviews = data?.reviews;
  return (
    <div className={css.main}>
      {reviews.map((item, index) => {
        return (
          item.reviewer_rating === 5 && (
            <div className={css.reviewBox} key={index}>
              <span>{item.reviewer_name[0]}</span>
              <div className={css.reviewNameStar}>
                <p>{item.reviewer_name}</p>
                <div className={css.reviewStars}>
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <svg className={css.star} key={starIndex}>
                      <use href={sprite + "#icon-star"}></use>
                    </svg>
                  ))}
                </div>
              </div>
              <p>{item.comment}</p>
            </div>
          )
        );
      })}
    </div>
  );
};

export default CamperPageReviews;
