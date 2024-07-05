import {render, screen } from '@testing-library/react';
import MotoCost from './Budget';

test('render title', () => { 
    render(<MotoCost />);
    const title = screen.getByText(/Gemmnial/i); 
    expect(title).toBeInTheDocument()
 })