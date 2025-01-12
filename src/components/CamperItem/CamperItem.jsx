import css from './CamperItem.module.css'
import sprite from "/sprite.svg";

const CamperItem = (data) => {
    const location = data?.data?.location ?? '';
    const [country, city] = location.split(',').map(item => item.trim());

    return (
        <article className={css.camperItemWrap}>
            <img src={data?.data?.gallery[0]?.thumb} alt="camper-picture" />
            <div className={css.camperItemInfo}>
                {/* -----------------TITLE------------------ */}
                <div className={css.titleWrap}>
                    <h4>{data?.data?.name.slice(0, 27) + (data?.data?.name.length > 26 ? '...' : '')}</h4>
                    <div className={css.titleWrapPriceBox}>
                        <p>{`€${data?.data?.price}.00`}</p>
                        <button>
                            <svg className={css.fav}>
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
                    <p>{data?.data?.description.slice(0, 60) + '...' }</p>
                </div>
                {/* --------------Vehicle equipment-------------- */}
                <div className={css.equipTagsWrap}>
                    {data?.data?.AC && <div className={css.equipTag}>
                        <svg className={css.wind}>
                            <use href={sprite + "#icon-wind"}></use>
                        </svg>
                        <p>AC</p>
                    </div>}
                    {data?.data?.TV && <div className={css.equipTag}>
                        <svg className={css.tv}>
                            <use href={sprite + "#icon-tv"}></use>
                        </svg>
                        <p>TV</p>
                    </div>}
                    {data?.data?.bathroom && <div className={css.equipTag}>
                        <svg className={css.bathroom}>
                            <use href={sprite + "#icon-bathroom"}></use>
                        </svg>
                        <p>Bathroom</p>
                    </div>}
                    {data?.data?.engine && <div className={css.equipTag}>
                        <svg className={css.engine}>
                            <use href={sprite + "#icon-fuel-pump"}></use>
                        </svg>
                        <p style={{textTransform: 'capitalize'}}>{data?.data?.engine}</p>
                    </div>}
                    {data?.data?.transmission && <div className={css.equipTag}>
                        <svg className={css.transmission}>
                            <use href={sprite + "#icon-diagram"}></use>
                        </svg>
                        <p style={{textTransform: 'capitalize'}}>{data?.data?.transmission}</p>
                    </div>}
                    {data?.data?.kitchen && <div className={css.equipTag}>
                        <svg className={css.kitchen}>
                            <use href={sprite + "#icon-cup-hot"}></use>
                        </svg>
                        <p>Kitchen</p>
                    </div>}
                    {data?.data?.radio && <div className={css.equipTag}>
                        <svg className={css.radio}>
                            <use href={sprite + "#icon-ui-radios"}></use>
                        </svg>
                        <p>Radio</p>
                    </div>}
                    {data?.data?.water && <div className={css.equipTag}>
                        <svg className={css.water}>
                            <use href={sprite + "#icon-water"}></use>
                        </svg>
                        <p>Water</p>
                    </div>}
                </div>
                {/* --------------Show more-------------- */}
                <div className={css.showMoreBtn}>
                    <button>Show more</button>
                </div>
            </div>
        </article>
    );
}

export default CamperItem;