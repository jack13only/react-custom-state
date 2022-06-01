import { createContext } from 'react';
import { IW3Card } from '../components/w3card/W3card';
import { RiMObject } from '../repositories/fetchRiM';
import { ParamsValues } from '../shared/constants/search';
import { ActionApi, TypesApi } from './actionCreatorsApi';
import { ActionForm, TypesForm } from './actionCreatorsForm';
import { ActionPage, TypesPage } from './actionCreatorsPage';
import { ActionParams, TypesParams } from './actionCreatorsParams';

export type State = {
  isCardsError: boolean;
  isLoading: boolean;
  inputValue: string;
  rimArray: Array<RiMObject>;
  games: Array<IW3Card>;
  idW3: number;
  params: ParamsValues;
  page: number;
  maxPage: number;
};

export const initialState = {
  isCardsError: false,
  isLoading: false,
  inputValue: '',
  rimArray: [],
  games: [],
  idW3: 0,
  params: {
    gender: '',
    status: '',
    species: '',
  },
  page: 1,
  maxPage: 1,
};

export function reducer(state: State, action: ActionApi | ActionForm | ActionParams | ActionPage) {
  const { type, payload } = action;
  switch (type) {
    case TypesApi.SET_CARDS_ERROR:
      return { ...state, isCardsError: payload as boolean };
    case TypesApi.SET_LOADING:
      return { ...state, isLoading: payload as boolean };
    case TypesApi.SET_INPUT_VALUE:
      return { ...state, inputValue: payload as string };
    case TypesApi.SET_RIM_ARRAY:
      return { ...state, rimArray: payload as [] | Array<RiMObject> };
    case TypesForm.SET_GAMES:
      return { ...state, games: [...state.games, payload] as Array<IW3Card> };
    case TypesForm.SET_IDW3:
      return { ...state, idW3: payload as number };
    case TypesParams.SET_PARAMS:
      return { ...state, params: payload as ParamsValues };
    case TypesPage.SET_PAGE:
      return { ...state, page: payload as number };
    case TypesPage.SET_MAX_PAGE:
      return { ...state, maxPage: payload as number };
    default:
      throw new Error();
  }
}

export const ContextApp = createContext<{
  state: State;
  dispatch: React.Dispatch<ActionApi | ActionForm | ActionParams | ActionPage>;
}>({
  state: initialState,
  dispatch: () => null,
});
