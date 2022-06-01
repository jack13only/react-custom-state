import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card';
import { RiMObject } from '../../repositories/fetchRiM';

describe('test Cards', () => {
  const testObj: RiMObject = {
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
  };

  it('check Cards', () => {
    render(<Card id={testObj.id} image={testObj.image} name={testObj.name} />);
    const cardTitle = screen.getByText(testObj.name);
    expect(cardTitle).toBeInTheDocument;
    expect(screen.getByAltText(testObj.name)).toBeInTheDocument;
  });
});
