import { render } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import App from '../App';
import { describe, it, expect } from 'vitest';

describe('App component', () => {
  it('renders learn react link', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/Learning React/i);
    expect(linkElement).toBeInTheDocument();
  });
});
