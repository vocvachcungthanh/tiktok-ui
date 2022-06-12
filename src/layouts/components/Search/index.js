import React from 'react';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import AccountItem from '~/components/AccountItem';
import { Wrapper as PopperWrapper } from '~/components/Poppper';
import { SearchIcon } from '~/components/Icons';

import styles from './Search.module.scss';
import { useDebounce } from '~/hooks';
import { getSearch } from '~/services/searchService';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = React.useState('');
    const [searchResult, setSearchResult] = React.useState([]);
    const [showResult, setShowResult] = React.useState(true);
    const [loading, setLoading] = React.useState(false);

    const debounced = useDebounce(searchValue);
    const inputRef = React.useRef();

    const handleChange = (e) => {
        let value = e.target.value;

        if (!value.startsWith(' ')) {
            setSearchValue(value);
        }
    };

    const handleClearSearch = () => {
        setSearchValue('');
        inputRef.current.focus();
        setSearchResult([]);
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    React.useEffect(() => {
        if (!!!debounced.trim()) {
            setSearchResult([]);
            return;
        }

        setLoading(true);

        const fetchApi = async () => {
            setLoading(true);

            const result = await getSearch({ q: debounced, type: 'less' });

            setLoading(false);

            setSearchResult(result);
        };

        fetchApi();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debounced]);

    return (
        // Using a wrapper <div> tag around the reference element solves this by creating a new parentNode context.
        <div>
            <HeadlessTippy
                interactive={true}
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Accounts</h4>

                            {searchResult.map((result) => (
                                <AccountItem key={result.id} dataItem={result} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className={cx('search')}>
                    <input
                        value={searchValue}
                        onChange={handleChange}
                        onFocus={() => setShowResult(true)}
                        ref={inputRef}
                        type="text"
                        placeholder="Search accounts and videos"
                        spellCheck={false}
                    />

                    {!!searchValue && !loading && (
                        <button className={cx('clear')} onClick={handleClearSearch}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}

                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                    <button className={cx('search-btn')} onMouseDown={handleSubmit}>
                        <SearchIcon />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
