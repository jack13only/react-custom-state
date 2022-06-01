import { IW3Card } from '../components/w3card/W3card';

export enum TypesForm {
  SET_GAMES = 'SET_GAMES',
  SET_IDW3 = 'SET_IDW3',
}

export interface ActionForm {
  type: TypesForm;
  payload: number | IW3Card;
}

function setGames(payload: IW3Card): ActionForm {
  return {
    type: TypesForm.SET_GAMES,
    payload,
  };
}

function setIdW3(payload: number): ActionForm {
  return {
    type: TypesForm.SET_IDW3,
    payload,
  };
}

export const actionCreatorsForm = { setGames, setIdW3 };
