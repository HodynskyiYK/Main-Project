import React from 'react'
import { Select } from './Select'
import { render, screen } from '@testing-library/react'

describe('Select tests', () => {
    let options: string[]
    beforeEach(() => {
        options = ['option1', 'option2']
    })

    test('To match snapshot', () => {
        const {asFragment} = render(<Select selectName={'select'} options={options} />)
        expect(asFragment()).toMatchSnapshot()
    })

    test('label text', () => {
        render(<Select selectName={'select'} options={options} labelText={'label text'} />)
        const label = screen.getByText(/label text/i)
        expect(label).toBeInTheDocument()
    })
})