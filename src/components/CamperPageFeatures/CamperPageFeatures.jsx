import Equipments from "../Equipments/Equipments";
import css from "./CamperPageFeatures.module.css";

const CamperPageFeatures = ({ data }) => {
  const addTxtSpace = (txt) => {
    if (txt !== undefined && txt !== 0) {
      return txt.replace(/(\d)(?=[a-zA-Z])/g, "$1 ");
    }
  };

  return (
    <div className={css.camperPageFeatures}>
      <div className={css.equipTagsWrap}>
        {data?.AC && (
          <div className={css.equipTag}>
            <Equipments item="AC" />
          </div>
        )}
        {data?.TV && (
          <div className={css.equipTag}>
            <Equipments item="TV" />
          </div>
        )}
        {data?.bathroom && (
          <div className={css.equipTag}>
            <Equipments item="Bathroom" />
          </div>
        )}
        {data?.engine && (
          <div className={css.equipTag}>
            <Equipments item={data?.engine} />
          </div>
        )}
        {data?.transmission && (
          <div className={css.equipTag}>
            <Equipments item={data?.transmission} />
          </div>
        )}
        {data?.kitchen && (
          <div className={css.equipTag}>
            <Equipments item="Kitchen" />
          </div>
        )}
        {data?.radio && (
          <div className={css.equipTag}>
            <Equipments item="Radio" />
          </div>
        )}
        {data?.water && (
          <div className={css.equipTag}>
            <Equipments item="Water" />
          </div>
        )}
      </div>
      <h5>Vehicle details</h5>
      <div className={css.characteristics}>
        <div className={css.value}>
          <p>Form</p>
          <p>
            {data?.form
              ?.replace(/([A-Z])/g, " $1")
              ?.replace(/^./, (str) => str.toUpperCase())
              ?.toLowerCase()
              ?.replace(/^./, (str) => str.toUpperCase())}
          </p>
        </div>
        <div className={css.value}>
          <p>Length</p>
          <p>{addTxtSpace(data?.length)}</p>
        </div>
        <div className={css.value}>
          <p>Width</p>
          <p>{addTxtSpace(data?.width)}</p>
        </div>
        <div className={css.value}>
          <p>Height</p>
          <p>{addTxtSpace(data?.height)}</p>
        </div>
        <div className={css.value}>
          <p>Tank</p>
          <p>{addTxtSpace(data?.tank)}</p>
        </div>
        <div className={css.value}>
          <p>Consumption</p>
          <p>{data?.consumption}</p>
        </div>
      </div>
    </div>
  );
};

export default CamperPageFeatures;
