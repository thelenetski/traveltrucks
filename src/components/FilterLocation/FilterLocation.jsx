import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './FilterLocation.module.css';
import { selectFilters } from '../../redux/selectors';
import { setFilters } from '../../redux/filterSlice';

const FilterLocation = () => {
  const dispatch = useDispatch();

  const [query, setQuery] = useState(''); 
  const [showSuggestions, setShowSuggestions] = useState(false);

  const filters = useSelector(selectFilters);

  // const uniqueLocations = Array.from(
  //   new Set(campers?.items?.map((camper) => camper.location))
  // );

  const uniqueLocations = [
    "Ukraine, Kyiv",
    "Ukraine, Poltava",
    "Ukraine, Dnipro",
    "Ukraine, Odesa",
    "Ukraine, Kharkiv",
    "Ukraine, Sumy",
    "Ukraine, Lviv"
  ]

  const filteredLocations = uniqueLocations.filter((location) =>
    location.toLowerCase().includes(query.toLowerCase())
  );

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    setShowSuggestions(true); 
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); 
      if (query) {
        handleSelectLocation(query);
      }
    }
  };

  const handleSelectLocation = (location) => {
    setQuery(location.split(', ').reverse().join(', ')); // Kyiv, Ukraine
    setShowSuggestions(false);
    dispatch(setFilters({ ...filters, location })); // Отправляем локацию в Redux
  };

  return (
    <div className={css.filtersPanel}>
      <div className={css.locationInput}>
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          value={query}
          placeholder="City"
          onKeyDown={handleKeyDown}
          onChange={handleInputChange}
          onFocus={() => setShowSuggestions(true)}
        />
        {/* Список подсказок */}
        {showSuggestions && (
          <ul className={css.suggestionsList}>
            {filteredLocations.map((location, index) => (
              <li
                key={index}
                onClick={() => handleSelectLocation(location)}
              >
                {location.split(', ').reverse().join(', ')} {/* Kyiv, Ukraine */}
              </li>
            ))}
            {filteredLocations.length === 0 && (
              <li className={css.noResults}>No results found</li>
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default FilterLocation;
