import { render, screen } from '@testing-library/react';
import Navbar from './index';


test('render navbar inputs', () => {
    render(<Navbar />);

    const imagem = screen.getByRole('img')

    expect(imagem).toBeInTheDocument();

})