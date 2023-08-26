import Header from "@/components/Header/Header";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Header', () => {
    it('renders a heading', () => {
      const { container } = render(<Header />);
   
      expect(container).toBeInTheDocument();
    })
  })