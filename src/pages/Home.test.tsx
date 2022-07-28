import React from 'react'
import { render } from '@testing-library/react'
import { Home } from './Home'

describe('Home tests', () => {

    test('To match snapshot', () => {
        const {asFragment} = render(<Home/>)
        expect(asFragment()).toMatchSnapshot()
    })
})