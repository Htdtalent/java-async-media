import React from 'react';
import { render } from '@testing-library/react';
import { act } from "react-dom/test-utils";
import App from './App';

const testData = [
  {
    "sightingId": 1,
    "bugType": "Ladybug",
    "order": "Coleptera",
    "description": "mature ladybug in the grass",
    "date": "2020-10-05",
    "interest": 5.5,
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Coccinella_magnifica01.jpg/640px-Coccinella_magnifica01.jpg"
  }
];

test('renders ladybug', async () => {

  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(testData)
    }));

  await act(async () => {
    render(<App />);
  });

  const card = document.querySelector(".card");
  expect(card).toBeInTheDocument();

  const cardTitle = card.querySelector(".card-title");
  expect(cardTitle.innerHTML).toBe("Ladybug");
});
