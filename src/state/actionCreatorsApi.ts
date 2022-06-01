import { RiMObject } from '../repositories/fetchRiM';

export enum TypesApi {
  SET_CARDS_ERROR = 'SET_CARDS_ERROR',
  SET_LOADING = 'SET_LOADING',
  SET_RIM_ARRAY = 'SET_RIM_ARRAY',
  SET_INPUT_VALUE = 'SET_INPUT_VALUE',
}

export interface ActionApi {
  type: TypesApi;
  payload: boolean | number | [] | Array<RiMObject> | string;
}

function setCardsError(payload: boolean): ActionApi {
  return {
    type: TypesApi.SET_CARDS_ERROR,
    payload,
  };
}

function setLoading(payload: boolean): ActionApi {
  return {
    type: TypesApi.SET_LOADING,
    payload,
  };
}

function setRimArray(payload: Array<RiMObject>): ActionApi {
  return {
    type: TypesApi.SET_RIM_ARRAY,
    payload,
  };
}

function setInputValue(payload: string): ActionApi {
  return {
    type: TypesApi.SET_INPUT_VALUE,
    payload,
  };
}

export const actionCreatorsApi = {
  setCardsError,
  setLoading,
  setRimArray,
  setInputValue,
};
