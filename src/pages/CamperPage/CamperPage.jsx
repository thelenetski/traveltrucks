import { useDispatch, useSelector } from "react-redux";
import css from "./CamperPage.module.css";
import { useEffect, useState } from "react";
import { selectCampers, selectLoading } from "../../redux/selectors";
import Loader from "../../components/Loader/Loader";
import { fetchCampers } from "../../redux/campersOps";
import { useParams } from "react-router-dom";
import CamperPageHeader from "../../components/CamperPageHeader/CamperPageHeader";
import CamperPageGallery from "../../components/CamperPageGallery/CamperPageGallery";
import clsx from "clsx";
import CamperPageFeatures from "../../components/CamperPageFeatures/CamperPageFeatures";
import CamperPageForm from "../../components/CamperPageForm/CamperPageForm";
import CamperPageReviews from "../../components/CamperPageReviews/CamperPageReviews";

const CamperPage = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const { id } = useParams();
  const data = useSelector(selectCampers);
  const [infoGroupActive, setInfoGroupActive] = useState(true);

  useEffect(() => {
    dispatch(
      fetchCampers({
        id: id,
      })
    );
  }, [dispatch, id]);

  const activeHandler = () => {
    setInfoGroupActive(!infoGroupActive);
  };

  return (
    <main className={css.main}>
      {loading.main && <Loader />}
      {!loading.main && (
        <>
          <CamperPageHeader data={data} />
          <CamperPageGallery data={data} />
          <p className={css.descr}>{data?.description}</p>
          <div className={css.infoGroup}>
            <button
              className={clsx({ [css.active]: infoGroupActive })}
              onClick={activeHandler}
            >
              Features
            </button>
            <button
              className={clsx({ [css.active]: infoGroupActive === false })}
              onClick={activeHandler}
            >
              Reviews
            </button>
          </div>
          <div className={css.bottomGroup}>
            {infoGroupActive && <CamperPageFeatures data={data} />}
            {infoGroupActive === false && <CamperPageReviews data={data} />}
            <CamperPageForm />
          </div>
        </>
      )}
    </main>
  );
};

export default CamperPage;
