import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Testimonial from './Testimonial';

describe('Testimonial Component', () => {
  beforeEach(() => {
    // Mock window.matchMedia for responsive design testing
    window.matchMedia = jest.fn().mockImplementation(query => ({
      matches: query === '(min-width: 768px)', // This will make desktop view hidden
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
    }));
  });

  test('renders testimonial section with title', () => {
    render(<Testimonial />);
    expect(screen.getByText('What People Say')).toBeInTheDocument();
  });

  test('renders testimonial cards with correct content', () => {
    render(<Testimonial />);
    // Use queryAllByText to get all instances and check at least one exists
    expect(screen.queryAllByText('Mohammed Dayraki').length).toBeGreaterThan(0);
    expect(screen.queryAllByText('Linkhon Hasan').length).toBeGreaterThan(0);
  });

  test('mobile navigation controls work correctly', () => {
    render(<Testimonial />);

    // Find navigation buttons in mobile view
    const nextButton = screen.getByText('→');
    const prevButton = screen.getByText('←');

    // Initial state should show first testimonial
    const firstTestimonial = screen.queryAllByText('Mohammed Dayraki')[0];
    expect(firstTestimonial).toBeInTheDocument();

    // Click next
    fireEvent.click(nextButton);
    const secondTestimonial = screen.queryAllByText('Linkhon Hasan')[0];
    expect(secondTestimonial).toBeInTheDocument();

    // Click prev
    fireEvent.click(prevButton);
    expect(screen.queryAllByText('Mohammed Dayraki')[0]).toBeInTheDocument();
  });

  test('pagination dots work correctly', () => {
    render(<Testimonial />);

    // Get only the pagination dots by their specific classes
    const paginationDots = screen.getAllByRole('button').filter(
      button => button.classList.contains('w-2') && button.classList.contains('h-2')
    );

    // Should have 2 pagination dots
    expect(paginationDots).toHaveLength(2);

    // Click second dot
    fireEvent.click(paginationDots[1]);
    expect(screen.queryAllByText('Linkhon Hasan')[0]).toBeInTheDocument();
  });
}); 