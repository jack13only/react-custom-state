import React, { useContext, useState } from 'react';
import './Forms.scss';
import { useForm } from 'react-hook-form';
import { W3Card } from '../../components/index';
import { defaultValuesW3, races } from '../../shared/constants/forms';
import { IW3Card } from '../../components/w3card/W3card';
import { ContextApp } from '../../state/reducer';
import { actionCreatorsForm } from '../../state/actionCreatorsForm';

export interface IW3CardError {
  nicknameError: boolean;
  dateError: boolean;
  checkRulesError: boolean;
  checkRaceError: boolean;
  imageLoadError: boolean;
}

type FormValues = {
  nicknameField: string;
  dateField: string;
  selectField: string;
  fogField: string;
  fileInput: FileList;
  checkRulesField: boolean;
};

const Forms = (): JSX.Element => {
  const { state, dispatch } = useContext(ContextApp);
  const { setGames, setIdW3 } = actionCreatorsForm;
  const { games, idW3 } = state;
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    reset,
    clearErrors,
  } = useForm<FormValues>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    defaultValues: defaultValuesW3,
  });

  const onSubmit = ({ nicknameField, selectField, dateField, fogField, fileInput }: FormValues) => {
    const file = URL.createObjectURL(fileInput[0]);

    const newGame: IW3Card = {
      nickname: nicknameField.trim(),
      race: selectField,
      date: dateField,
      fog: fogField,
      id: idW3 + 1,
      imagePreviewUrl: file,
    };

    dispatch(setGames(newGame));
    dispatch(setIdW3(newGame.id));
    setIsSuccess(true);
    reset();
    setTimeout(() => {
      setIsSuccess(false);
    }, 1000);
  };

  return (
    <>
      <div className="form-wrapper">
        <form onSubmit={handleSubmit(onSubmit)} className="form" data-testid="form">
          <label className="form__nickname" title="Only numbers and english letters">
            <span className="form__label-tittle">Nickname:</span>
            <input
              {...register('nicknameField', {
                required: true,
                onChange: () => clearErrors('nicknameField'),
                pattern: /^[A-Za-z0-9]+$/i,
              })}
              className="form__nickname-input"
              placeholder="Enter your nickname"
            />
            {errors.nicknameField && (
              <div className="form__error">Error: Only numbers and english letters!</div>
            )}
          </label>

          <label className="form__date" title="Date should be in the future">
            <span className="form__label-tittle">Battle date:</span>
            <input
              {...register('dateField', {
                required: true,
                onChange: () => clearErrors('dateField'),
                validate: (value) => Date.parse(value) - Date.now() > 0,
              })}
              type="date"
              className="form__date-input"
              placeholder="Date"
            />
            {errors.dateField && <div className="form__error">Error: Incorrect or empty date!</div>}
          </label>

          <label className="form__race">
            <span className="form__label-tittle">Playable race:</span>
            <select
              {...register('selectField', {
                required: true,
                onChange: () => clearErrors('selectField'),
                validate: (value) => value !== races[0],
              })}
              className="form__select-input"
              data-testid="select"
            >
              {races.map((race, index) => (
                <option key={race} value={race} disabled={index === 0 ? true : false}>
                  {race}
                </option>
              ))}
            </select>
            {errors.selectField && (
              <div className="form__error">Error: You need to choose race!</div>
            )}
          </label>

          <div className="form__fog">
            <div className="form__label-tittle">Fog of war:</div>
            <div className="form__fog-label-wrapper">
              <input
                {...register('fogField', { required: true })}
                type="radio"
                id="w3fog-no"
                value="0"
                className="form__fog-radio"
              />
              <input
                {...register('fogField', { required: true })}
                type="radio"
                id="w3fog-yes"
                value="1"
                className="form__fog-radio"
              />
              <label className="form__fog-label yes-fog" htmlFor="w3fog-yes">
                Yes
              </label>
              <label className="form__fog-label no-fog" htmlFor="w3fog-no">
                No
              </label>
            </div>
          </div>

          <label className="form__file">
            <span className="form__label-tittle">Upload your avatar:</span>
            <span className="form__file-input">
              <input
                type="file"
                data-testid="uploader"
                className="form__file-input2"
                placeholder="Upload your avatar"
                accept="image/*"
                {...register('fileInput', {
                  onChange: () => clearErrors('fileInput'),
                  required: true,
                  validate: (value) => !!value[0].name,
                })}
              />
            </span>
            {errors.fileInput && <div className="form__error">Error: You need to upload file!</div>}
          </label>

          <label className="form__rules">
            <span className="form__label-tittle">Agree with rules:</span>
            <span className="form__rules-agree">
              <input
                type="checkbox"
                {...register('checkRulesField', {
                  onChange: () => clearErrors('checkRulesField'),
                  required: true,
                })}
              />
              <span className="form__rules-agree2"> I Agree</span>
            </span>
            {errors.checkRulesField && (
              <div className="form__error">Error: You need to agree with rules!</div>
            )}
          </label>

          <label className="form__control">
            <input type="reset" value="Reset" className="form__reset" onClick={() => reset()} />
            <input
              type="submit"
              value="Submit"
              className="form__submit"
              disabled={!isDirty || !!Object.values(errors).length}
            />
          </label>
        </form>

        {isSuccess && <div className="success-wrapper"></div>}
      </div>

      <div className="w3card-wrapper">
        {!!games.length && games.map((game: IW3Card) => <W3Card {...game} key={game.id} />)}
      </div>
    </>
  );
};

export default Forms;
