import React from 'react';
import { render, screen } from '@testing-library/react';
import Thumbnails from './Component/Thumbnails/Thumbnails';

test('renders thumbnails correctly', async () => {
  render(<Thumbnails />);
  const thumbnails = await screen.findAllByRole('img');
  expect(thumbnails.length).toBe(10); // Assuming _limit=10 in API call
});
