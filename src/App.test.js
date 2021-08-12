import { render, screen } from '@testing-library/react';
import AlertForm from './AlertForm';

test('renders learn react link', () => {
  render(<AlertForm />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
