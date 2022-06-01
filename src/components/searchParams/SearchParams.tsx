import React, { useContext } from 'react';
import './SearchParams.scss';
import { ParamsValues, paramsValues } from '../../shared/constants/search';
import { useForm } from 'react-hook-form';
import { ContextApp } from '../../state/reducer';
import { setParams } from '../../state/actionCreatorsParams';

type IProps = {
  onFetchCards: () => void;
  // onKeyPress: (e: { keyCode: number }) => void;
};

const SearchParams = ({ onFetchCards }: IProps): JSX.Element => {
  const { STATUS, GENDER, SPECIES } = paramsValues;
  const { state, dispatch } = useContext(ContextApp);
  const { params } = state;
  const { register, handleSubmit } = useForm<ParamsValues>({
    defaultValues: { gender: params.gender, status: params.status, species: params.species },
  });

  const onSubmit = (e: ParamsValues) => {
    dispatch(setParams(e));
    onFetchCards();
  };

  return (
    <form onChange={handleSubmit(onSubmit)} className="search-params">
      <label className="search-params__label-status">
        <div className="search-params__label-title">Status:</div>
        <select {...register('status')} className="search-params__select-status">
          {STATUS.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </label>
      <label className="search-params__label-gender">
        <div className="search-params__label-title">Gender:</div>
        <select {...register('gender')} className="search-params__select-gender">
          {GENDER.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </label>
      <label className="search-params__label-species">
        <div className="search-params__label-title">Species:</div>
        <select {...register('species')} className="search-params__select-species">
          {SPECIES.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </label>
    </form>
  );
};

export default SearchParams;
