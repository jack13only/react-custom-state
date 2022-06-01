const STATUS = ['', 'Alive', 'Dead', 'unknown'];
const GENDER = ['', 'Female', 'Male', 'Genderless', 'unknown'];
const SPECIES = [
  '',
  'Human',
  'Alien',
  'Humanoid',
  'Animal',
  'Robot',
  'Cronenberg',
  'Disease',
  'unknown',
];

export type ParamsValues = {
  status: string;
  gender: string;
  species: string;
};

export const paramsValues = {
  STATUS,
  GENDER,
  SPECIES,
};
