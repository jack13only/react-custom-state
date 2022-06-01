import React from 'react';
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import Forms from './Forms';
import { IW3Card } from '../../components/w3card/W3card';

describe('test Forms', () => {
  it('Render Forms', () => {
    render(<Forms />);
    expect(screen.getByText(/Nickname/i)).toBeInTheDocument();
    expect(screen.getByText(/Battle date/i)).toBeInTheDocument();
    expect(screen.getByText(/Playable race/i)).toBeInTheDocument();
    expect(screen.getByText(/Fog of war/i)).toBeInTheDocument();
    expect(screen.getByText(/Upload your avatar/i)).toBeInTheDocument();
    expect(screen.getByText(/Agree with rules/i)).toBeInTheDocument();
  });

  it('Test validation', async () => {
    render(<Forms />);
    const inputNickname = screen.getByPlaceholderText(/Enter your nickname/i) as HTMLInputElement;
    fireEvent.change(inputNickname, { target: { value: 'слива' } });

    const submitButton = screen.getByRole('button', { name: 'Submit' });
    await act(async () => {
      fireEvent.click(submitButton);
    });

    expect(screen.getByText(/Error: Only numbers and english letters!/)).toBeInTheDocument();
    expect(screen.getByText(/Error: Incorrect or empty date!/)).toBeInTheDocument();
    expect(screen.getByText(/Error: You need to upload file!/)).toBeInTheDocument();
    expect(screen.getByText(/Error: You need to agree with rules!/)).toBeInTheDocument();
    expect(screen.getByText(/Choose your race/i)).toBeInTheDocument();

    const resetButton = screen.getByRole('button', { name: 'Reset' });
    await act(async () => {
      fireEvent.click(resetButton);
    });

    const inputNicknameAfterReset = screen.queryByText(/Error: Only numbers and english letters!/);
    expect(inputNicknameAfterReset).toBeNull();
    const inputDateAfterReset = screen.queryByText(/Error: Incorrect or empty date!/);
    expect(inputDateAfterReset).toBeNull();
    const inputFileAfterReset = screen.queryByText(/Error: You need to upload file!/);
    expect(inputFileAfterReset).toBeNull();
    const inputAgreeAfterReset = screen.queryByText(/Error: You need to agree with rules!/);
    expect(inputAgreeAfterReset).toBeNull();
    const inputSelectAfterReset = screen.queryByText(/Choose your race/);
    expect(inputSelectAfterReset).toBeNull();
  });

  it('Test add card', async () => {
    window.URL.createObjectURL = jest.fn();
    const newGame: IW3Card = {
      nickname: 'Chip',
      race: 'Human',
      date: '2222-11-11',
      fog: '1',
      id: 666,
      imagePreviewUrl: 'chucknorris.png',
    };
    render(<Forms />);

    const inputNickname = screen.getByPlaceholderText(/Enter your nickname/i) as HTMLInputElement;
    fireEvent.change(inputNickname, { target: { value: newGame.nickname } });

    const inputDate = screen.getByPlaceholderText(/Date/i) as HTMLInputElement;
    fireEvent.change(inputDate, { target: { value: newGame.date } });

    const selectOne = screen.getByTestId('select') as HTMLSelectElement;
    fireEvent.change(selectOne, { target: { value: newGame.race } });

    const agreementCheckbox = screen.getByRole('checkbox') as HTMLInputElement;
    fireEvent.click(agreementCheckbox);

    const file = new File([newGame.imagePreviewUrl], newGame.imagePreviewUrl, {
      type: 'image/png',
    });
    const inputFile = screen.getByTestId('uploader') as HTMLInputElement;
    await waitFor(() => fireEvent.change(inputFile, { target: { files: [file] } }));

    expect(agreementCheckbox.checked).toBe(true);
    expect(screen.getByDisplayValue(newGame.nickname)).toBeInTheDocument();
    expect(screen.getByDisplayValue(newGame.date)).toBeInTheDocument();
    expect(screen.getByDisplayValue(newGame.race)).toBeInTheDocument();
    expect((inputFile.files as FileList)[0].name).toBe(newGame.imagePreviewUrl);
  });
});
