import React from 'react';
import { render, screen } from '@testing-library/react';
import W3Card, { IW3Card } from './W3card';

test('render W3card', () => {
  const item: IW3Card = {
    nickname: 'Player',
    race: 'worm',
    date: '2222-11-11',
    fog: '0',
    id: 666,
    imagePreviewUrl: 'image-prev',
  };
  render(<W3Card {...item} />);
  expect(screen.getByText(item.nickname)).toBeInTheDocument();
  expect(screen.getByText(item.race)).toBeInTheDocument();
  expect(screen.getByText(item.date)).toBeInTheDocument();
  expect(screen.getByText(/OFF/)).toBeInTheDocument();
});

test('render W3card', () => {
  const item: IW3Card = {
    nickname: 'Player2',
    race: 'ferret',
    date: '3333-01-01',
    fog: '1',
    id: 333,
    imagePreviewUrl: 'image-prev2',
  };
  render(<W3Card {...item} />);
  expect(screen.getByText(item.nickname)).toBeInTheDocument();
  expect(screen.getByText(item.race)).toBeInTheDocument();
  expect(screen.getByText(item.date)).toBeInTheDocument();
  expect(screen.getByText(/ON/)).toBeInTheDocument();
});
