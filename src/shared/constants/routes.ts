interface IPATH {
  main: string;
  about: string;
  forms: string;
  notFound: string;
  id: string;
}

export const PATHS: IPATH = {
  main: '/',
  id: '/:id',
  about: '/about',
  forms: '/forms',
  notFound: '*',
};

export interface ILINKS {
  to: string;
  component: JSX.Element;
  name: string;
}

export const LINKS = [
  { to: PATHS.main, name: 'Main' },
  { to: PATHS.forms, name: 'Forms' },
  { to: PATHS.about, name: 'About us' },
];
