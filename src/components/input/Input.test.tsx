import React from 'react'
import { Input } from './Input'
import { render, screen } from '@testing-library/react'

describe('Input tests', () => {

    test('To match snapshot', () => {
        const {asFragment} = render(<Input
            inputType={'text'}
            inputName={'name'}
        />)
        expect(asFragment()).toMatchSnapshot()
    })

    test('is label in document', () => {
        render(<Input
            inputType={'text'}
            inputName={'name'}
            labelText={'label text'}
        />)
        const label = screen.getByText(/label text/i)
        expect(label).toBeInTheDocument()
    })

    test('is error message in document', () => {
        render(<Input
            inputType={'text'}
            inputName={'name'}
            errorMessage={'some error'}
        />)
        const errorMessage = screen.getByText(/some error/i)
        expect(errorMessage).toBeInTheDocument()
    })
})