export enum TypesPage {
  SET_MAX_PAGE = 'SET_MAX_PAGE',
  SET_PAGE = 'SET_PAGE',
}

export interface ActionPage {
  type: TypesPage;
  payload: number;
}

function setPage(payload: number): ActionPage {
  return {
    type: TypesPage.SET_PAGE,
    payload,
  };
}

function setMaxPage(payload: number): ActionPage {
  return {
    type: TypesPage.SET_MAX_PAGE,
    payload,
  };
}

export const actionCreatorsPages = { setPage, setMaxPage };
