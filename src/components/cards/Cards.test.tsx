import React from 'react';
import { screen, render } from '@testing-library/react';
import Cards from './Cards';
import { RiMObject } from '../../repositories/fetchRiM';

describe('test Cards', () => {
  const testArray: Array<RiMObject> = [
    {
      created: '3333',
      episode: ['1'],
      gender: 'male',
      id: 1,
      image: 'img1',
      location: {
        name: 'mars',
        url: 'xxx',
      },
      name: 'vasya',
      origin: {
        name: 'mars',
        url: 'xxx',
      },
      species: 'unknown',
      status: 'alive',
      type: 'type1',
      url: 'zzz',
    },
    {
      created: '4444',
      episode: ['2'],
      gender: 'female',
      id: 2,
      image: 'img2',
      location: {
        name: 'moon',
        url: 'yyy',
      },
      name: 'petya',
      origin: {
        name: 'moon',
        url: 'yyy',
      },
      species: 'ferret',
      status: 'dead',
      type: 'type2',
      url: 'xyz',
    },
  ];

  it('render Cards wrapper', () => {
    // const { container } = render(<Cards rimArray={testArray} />);
    // expect(container.firstChild).toHaveClass('cards-container');
  });
  // it('check Cards', () => {
  //   render(<Cards rimArray={testArray} />);
  //   expect(screen.queryAllByTestId('test-card')).toHaveLength(2);
  //   expect(screen.queryAllByText(testArray[0].name)).toBeInTheDocument;
  //   expect(screen.queryAllByText(testArray[1].name)).toBeInTheDocument;
  // });
});
