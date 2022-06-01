import React, { useContext, useEffect, useRef } from 'react';
import { actionCreatorsPages } from '../../state/actionCreatorsPage';
import { ContextApp } from '../../state/reducer';
import './Pagination.scss';

type IProps = {
  onFetchCards: (value: number | undefined) => void;
};

const Pagination = ({ onFetchCards }: IProps): JSX.Element => {
  const { state, dispatch } = useContext(ContextApp);
  const { page, maxPage } = state;
  const { setPage } = actionCreatorsPages;
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      onFetchCards(page);
    }
  }, [page]);

  return (
    <div className="pagination">
      {page > 1 && (
        <div className="page-left" role="button" onClick={() => dispatch(setPage(page - 1))}>
          &lt;
        </div>
      )}
      <div className="page">
        {page} of {maxPage}
      </div>
      {page < maxPage && (
        <div className="page-right" role="button" onClick={() => dispatch(setPage(page + 1))}>
          &gt;
        </div>
      )}
    </div>
  );
};

export default Pagination;
