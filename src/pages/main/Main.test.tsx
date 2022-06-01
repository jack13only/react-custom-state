import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { RiMObject } from '../../repositories/fetchRiM';
import Main from './Main';
import { ContextApp } from '../../state/reducer';

test('render Main', () => {
  const { container } = render(<Main />);
  expect(container.firstChild).toHaveClass('main-wrapper');
});

// describe('Test api', () => {
//   const dispatch = () => {};
//   const rim: RiMObject = {
//     created: '1234',
//     episode: ['1'],
//     gender: 'Male',
//     id: 1,
//     image: 'img1',
//     location: {
//       name: 'Mars',
//       url: 'url1',
//     },
//     name: 'Jack',
//     origin: {
//       name: 'Earth',
//       url: 'url2',
//     },
//     species: 'spec1',
//     status: 'alive',
//     type: 'type1',
//     url: 'urlX',
//   };
//   const state = {
//     isCardsError: false,
//     isLoading: false,
//     activeModal: true,
//     indexForModal: 1,
//     inputValue: '',
//     rimArray: [rim],
//     games: [],
//     idW3: 0,
//     params: {
//       gender: '',
//       status: '',
//       species: '',
//     },
//   };

//   it('Fetch real character', async () => {
//     global.fetch = jest.fn(() =>
//       Promise.resolve({
//         json: () => Promise.resolve({ results: [rim] }),
//       })
//     ) as jest.Mock;

//     render(
//       <ContextApp.Provider value={{ state, dispatch }}>
//         <Main />
//       </ContextApp.Provider>
//     );
//     const input = screen.getByRole('searchbox') as HTMLInputElement;
//     fireEvent.keyDown(input, { key: 'Enter', keyCode: 13 });
//     let cardTitle;
//     await waitFor(() => (cardTitle = screen.getByText(rim.name)));
//     fireEvent.click(cardTitle as unknown as HTMLElement);
//     // state.activeModal = true;

//     await waitFor(() => expect(screen.getAllByText(rim.name)).toHaveLength(1));
// await waitFor(() => expect(screen.getByText(rim.created)).toBeInTheDocument());
// await waitFor(() => expect(screen.getByText(rim.species)).toBeInTheDocument());
// await waitFor(() => expect(screen.getByText(rim.status)).toBeInTheDocument());
// await waitFor(() => expect(screen.getByText(rim.location.name)).toBeInTheDocument());
// screen.debug();
// });

// it('Fetch fake character', async () => {
//   global.fetch = jest.fn(() =>
//     Promise.resolve({
//       json: () => Promise.resolve({ error: 'There is nothing here' }),
//     })
//   ) as jest.Mock;

//   render(<Main />);
//   const input = screen.getByRole('searchbox') as HTMLInputElement;
//   fireEvent.change(input, { target: { value: 'jjjjjjjjjjjddddddddd' } });
//   fireEvent.keyDown(input, { key: 'Enter', keyCode: 13 });

//   await waitFor(() => expect(screen.getByText(/Error loading data/i)).toBeInTheDocument());
// });
// });
