import { render, screen } from '@testing-library/react';
import App from './App';

test('renders game name in Header', () => {
  render(<App />);
  const gameName = screen.getByText(/Snake cat/i);
  expect(gameName).toBeInTheDocument();
});

test('start point equal to zero', () => {
  render(<App />);
  const startPoint = screen.getByText(/Current point/i);
  expect(startPoint).toBeInTheDocument();
  expect(startPoint.textContent?.slice(-1)).toEqual('0');
});

test('wall disabled by default', () => {
  render(<App />);
  const wallCheckBox = screen.getByLabelText('Wall');
  expect(wallCheckBox).toBeInTheDocument();
  expect(wallCheckBox).not.toBeChecked();
});

