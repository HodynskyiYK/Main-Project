import React from 'react'
import { Logo } from './Logo'
import { render } from '@testing-library/react'


describe('Logo tests', () => {

    test('To match snapshot', () => {
        const {asFragment} = render(<Logo/>)
        expect(asFragment()).toMatchSnapshot()
    })
})