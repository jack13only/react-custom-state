const rimUrl = 'https://rickandmortyapi.com/api/character';

export interface RiMObject {
  created: string;
  episode: Array<string>;
  gender: string;
  id: number;
  image: string;
  location: {
    name: string;
    url: string;
  };
  name: string;
  origin: {
    name: string;
    url: string;
  };
  species: string;
  status: string;
  type: string;
  url: string;
}

const createUrl = (
  name: string,
  gender: string,
  status: string,
  species: string,
  page: number
): string => {
  let newUrlParams = `${name ? `name=${name}&` : ''}${gender ? `gender=${gender}&` : ''}${
    status ? `status=${status}&` : ''
  }${species ? `species=${species}&` : ''}${page ? `page=${page}` : ''}`;
  if (newUrlParams.endsWith('&')) newUrlParams = newUrlParams.slice(0, newUrlParams.length - 1);
  return newUrlParams;
};

export async function fetchFilteredCharacters(
  name: string,
  gender: string,
  status: string,
  species: string,
  page: number
) {
  const newUrl = `${rimUrl}?${createUrl(name, gender, status, species, page)}`;
  try {
    const res = await fetch(newUrl);
    const result = await res.json();
    return result;
  } catch (error) {
    console.error('Ошибка:', error);
  }
}
