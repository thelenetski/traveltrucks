import { useDispatch, useSelector } from 'react-redux';
import css from './CatalogPage.module.css'
import { useEffect, useRef, useState } from 'react';
import {fetchCampers} from '../../redux/campersOps'
import { selectFilters, selectLoading } from '../../redux/selectors';
import Loader from '../../components/Loader/Loader'
import CamperItem from '../../components/CamperItem/CamperItem';
import LoadBtnMore from '../../components/LoadBtnMore/LoadBtnMore';
import FiltersPanel from '../../components/FiltersPanel/FiltersPanel';

const CatalogPage = () => {
    const dispatch = useDispatch();
    const loading = useSelector(selectLoading);
    const filters = useSelector(selectFilters);

    const [articles, setArticles] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [hasMore, setHasMore] = useState(false);
    const articlesRef = useRef(null);

    const itemsPerPage = 4;

    const loadCampers = (page) => {
        dispatch(
        fetchCampers({
            limit: itemsPerPage,
            page,
        })
        )
        .unwrap()
        .then((data) => {
            setArticles((prev) => {
                const newItems = data.items.filter(
                    (item) => !prev.some((prevItem) => prevItem.id === item.id)
                );
                return [...prev, ...newItems];
            });

            data.items.length < itemsPerPage ? setHasMore(false) : setHasMore(true);
        })
        .catch((error) => {
            console.error(error); 
            setHasMore(false);
        });
    };

    useEffect(() => {
        loadCampers(currentPage);
    }, [currentPage]); 

    useEffect(() => {
        setArticles([]); 
        setCurrentPage(1);
        loadCampers(1);
    }, [filters]);

    
    const handlePageChange = () => {
        if (hasMore) {
        const nextPage = currentPage + 1;
        setCurrentPage(nextPage);
        loadCampers(nextPage);
        }
    };

    useEffect(() => {
        if (currentPage > 1) scrollWindow();
      }, [articles, currentPage]);

    const scrollWindow = () => {
        window.scrollBy({
          top: 368,
          behavior: 'smooth',
        });
      };

 return (
    <main className={css.main}>
        <div className={css.container}>
            <FiltersPanel/>
            <section className={css.catalog}>
                {articles.length === 0 && <p style={{textAlign: 'center'}}>Nothing found</p>}
                <ul ref={articlesRef}>
                    {articles.map(item => {
                        return (
                            <li key={item.id}>
                                <CamperItem data={item}/>
                            </li>
                        )
                    })}
                </ul>
                {hasMore && <LoadBtnMore onNext={handlePageChange}>{loading.main ? 'Loading...' : 'Load more'}</LoadBtnMore>}
                {loading.main && <Loader/>}
            </section>
        </div>
    </main>
 );   
}

export default CatalogPage;