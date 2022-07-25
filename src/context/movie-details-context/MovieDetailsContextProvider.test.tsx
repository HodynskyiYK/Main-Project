import React from 'react'
import { render } from '@testing-library/react'
import { MovieDetailsContextProvider } from './MovieDetailsContextProvider'

describe('MovieDetailsContextProvider tests', () => {

    test('To match snapshot', () => {
        const {asFragment} = render(<MovieDetailsContextProvider>
            <div>Children</div>
        </MovieDetailsContextProvider>)
        expect(asFragment()).toMatchSnapshot()
    })
})