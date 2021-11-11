// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { render, cleanup } from '@testing-library/react';
import LogIn from '../components/LogIn';
import { MemoryRouter } from 'react-router-dom';

afterEach(cleanup)

describe('Coleccion test of LogIg', () => {
    test('should render', () => {
      expect(render(<MemoryRouter><LogIn ></LogIn></MemoryRouter>)).toMatchSnapshot();
    }); 
    /* expect(
        screen.getByLabelText('Correo Electrónico:')
        ).toBeInTheDocument(); */
    // expect(
    //     screen.getByPlaceholderText('ejemplo@ejemplo.com')
    //     ).toBeInTheDocument();
    
        
    // expect(screen.getByPlaceholderText('Ingrese su contraseña')).toBeInTheDocument();
    
    // test('test call with email and password', () =>{

    // })
})