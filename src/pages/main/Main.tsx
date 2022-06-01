import React, { useContext } from 'react';
import { Cards, Search, SearchParams, Pagination } from '../../components';
import { fetchFilteredCharacters } from '../../repositories/fetchRiM';
import KEY_CODES from '../../shared/constants/keyCodes';
import { actionCreatorsApi } from '../../state/actionCreatorsApi';
import { actionCreatorsPages } from '../../state/actionCreatorsPage';
import { ContextApp } from '../../state/reducer';
import './Main.scss';

const Main = (): JSX.Element => {
  const { state, dispatch } = useContext(ContextApp);
  const { setPage, setMaxPage } = actionCreatorsPages;
  const { setCardsError, setLoading, setRimArray, setInputValue } = actionCreatorsApi;
  const { rimArray, isCardsError, isLoading, params, inputValue, maxPage } = state;

  const inputHandler = (value: string) => {
    dispatch(setInputValue(value));
  };

  const onKeyPress = (e: { keyCode: number }) => {
    if (e.keyCode === KEY_CODES.enter) onFetchCards();
  };

  const onFetchCards = async (page = 1) => {
    const { gender, status, species } = params;
    dispatch(setPage(page));
    dispatch(setLoading(true));
    dispatch(setCardsError(false));
    const data = await fetchFilteredCharacters(inputValue, gender, status, species, page);
    if (data.results) {
      dispatch(setRimArray(data.results));
      dispatch(setMaxPage(data.info.pages));
      dispatch(setLoading(false));
    } else {
      dispatch(setRimArray([]));
      dispatch(setMaxPage(0));
      dispatch(setCardsError(true));
      dispatch(setLoading(false));
    }
  };

  return (
    <div className="main-wrapper" data-testid="main">
      <Search
        value={inputValue}
        inputHandler={inputHandler}
        onKeyPress={onKeyPress}
        onFetchCards={onFetchCards}
      />
      <SearchParams onFetchCards={onFetchCards} />
      {isCardsError && (
        <div className="main-wrapper__error-load">
          <img src="../../images/rim/error.png" alt="error" />
          <div>Error loading data</div>
        </div>
      )}
      {isLoading && (
        <div className="main-wrapper__loading">
          <img src="../../images/rim/loading.gif" alt="loading" />
        </div>
      )}
      {!!maxPage && <Pagination onFetchCards={onFetchCards} />}
      {!isLoading && !!rimArray.length && <Cards rimArray={rimArray} />}
    </div>
  );
};

export default Main;
