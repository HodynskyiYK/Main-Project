import React from 'react'
import { render, screen } from '@testing-library/react'
import { TextArea } from './TextArea'


describe('TextArea tests', () => {

    test('To match snapshot', () => {
        const {asFragment} = render(<TextArea textAreaName={'test'} />)
        expect(asFragment()).toMatchSnapshot()
    })

    test('label text', () => {
        render(<TextArea textAreaName={'test'}  labelText={'label text'} />)
        const label = screen.getByText(/label text/i)
        expect(label).toBeInTheDocument()
    })
})