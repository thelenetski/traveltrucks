import { useForm } from 'react-hook-form';
import css from './FiltersPanel.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { resetFilters, setFilters } from '../../redux/filterSlice';
import { resetCampers } from '../../redux/campersSlice';
import { selectFilters } from '../../redux/selectors';
import FilterLocation from '../FilterLocation/FilterLocation';

const FiltersPanel = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);

  const { register, handleSubmit, watch, reset } = useForm({
    defaultValues: {
      AC: filters.AC || false,
      TV: filters.TV || false,
      bathroom: filters.bathroom || false,
      kitchen: filters.kitchen || false,
      microwave: filters.microwave || false,
      refrigerator: filters.refrigerator || false,
      form: filters.form || false,
      transmission: filters.transmission || false,
    },
  });

  const equipmentOptions = ['AC', 'TV', 'Bathroom', 'Kitchen', 'Microwave', 'Refrigerator', 'Automatic'];
  const vehicleTypeOptions = ['Van', 'Fully Integrated', 'Alcove'];

  // Собираем только активные значения фильтров
  const buildActiveFilters = (data) => {
    const activeFilters = {};

    // Записываем выбранные чекбоксы (true)
    equipmentOptions.forEach((key) => {
      if (data.Automatic) {
        return activeFilters.transmission = 'automatic';
      }
      if (data[key]) {
        if (key === "AC" || key === "TV") {
         return activeFilters[key] = true;
        } 
        activeFilters[key.toLocaleLowerCase()] = true;
      };
    });


    if (data.form) {
      vehicleTypeOptions.forEach((key) => {
        if (data.form === 'Van') {
          return activeFilters.form = 'panelTruck';
        }
        if (data.form === 'Fully Integrated') {
          return activeFilters.form = 'fullyIntegrated';
        }
        activeFilters.form = key;
      });
    }

    return activeFilters;
  };

  const onSubmit = (data) => {
    dispatch(resetCampers());
    const activeFilters = buildActiveFilters(data);
    dispatch(setFilters({location: filters.location, ...activeFilters}));
  };

  const handleReset = () => {
    reset();
    dispatch(resetFilters());
};

  return (
    <aside className={css.filtersPanel}>
      <FilterLocation />
      <form onSubmit={handleSubmit(onSubmit)}>
        <h4>Filters</h4>
        {/* Фильтры по оборудованию */}
        <h5>Vehicle equipment</h5>
        <div className={css.filterGroup}>
          {equipmentOptions.map((item) => (
            <label
              key={item}
              className={`${css.filterButton} ${watch(item) ? css.active : ''}`}
            >
              <input
                type="checkbox"
                {...register(item)}
                style={{ display: 'none' }}
              />
              {item}
            </label>
          ))}
        </div>

        {/* Фильтры по типу транспортного средства */}
        <h5>Vehicle type</h5>
        <div className={css.filterGroup}>
          {vehicleTypeOptions.map((type) => (
            <label
              key={type}
              className={`${css.filterButton} ${
                watch('form') === type ? css.active : ''
              }`}
            >
              <input
                type="radio"
                value={type}
                {...register('form')}
                style={{ display: 'none' }}
              />
              {type}
            </label>
          ))}
        </div>

        {/* Кнопки действий */}
        <button className={css.searchButton} type="submit">
          Search
        </button>
        <button
          className={css.resetButton}
          type="button"
          onClick={handleReset}
        >
          Reset
        </button>
      </form>
    </aside>
  );
};

export default FiltersPanel;
