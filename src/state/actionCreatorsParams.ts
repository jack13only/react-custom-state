import { ParamsValues } from '../shared/constants/search';

export enum TypesParams {
  SET_PARAMS = 'SET_PARAMS',
}

export interface ActionParams {
  type: TypesParams;
  payload: ParamsValues;
}

export function setParams(payload: ParamsValues): ActionParams {
  return {
    type: TypesParams.SET_PARAMS,
    payload,
  };
}
