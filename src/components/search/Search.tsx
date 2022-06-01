import React, { useEffect, useRef } from 'react';
import './Search.scss';
import lSInputName from '../../shared/constants/localStorage';

type IProps = {
  value: string;
  inputHandler: (value: string) => void;
  onKeyPress: (e: { keyCode: number }) => void;
  onFetchCards: () => void;
};

const Search = ({ value, inputHandler, onKeyPress, onFetchCards }: IProps): JSX.Element => {
  const refSearchValue = useRef(value);
  refSearchValue.current = value;

  useEffect(() => {
    const newInputValue: string = localStorage.getItem(lSInputName) || '';
    if (value !== newInputValue) onFetchCards();
    inputHandler(newInputValue);
    return function () {
      localStorage.setItem(lSInputName, refSearchValue.current);
    };
  }, []);

  const transformEventValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    inputHandler(event.target.value);
  };

  return (
    <div className="input-wrapper">
      <input
        className="input-wrapper__input"
        type="search"
        value={value}
        onChange={transformEventValue}
        onKeyDown={onKeyPress}
      />
    </div>
  );
};

export default Search;
