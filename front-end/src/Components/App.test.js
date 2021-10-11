import { render, screen, mount } from '@testing-library/react';
import App from './App';

test('renders title', () => {
    render(<App />)
    const titleElement = screen.getByText(/Video Fuse/i)
    expect(titleElement).toBeInTheDocument()
});
