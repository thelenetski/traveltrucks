import css from "./CamperPageGallery.module.css";

const CamperPageGallery = ({ data }) => {
  return (
    <div className={css.gallery}>
      {data?.gallery?.map((item, index) => {
        return <img src={item.original} alt="camper-image" key={index} />;
      })}
    </div>
  );
};

export default CamperPageGallery;
