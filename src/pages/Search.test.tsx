import React from 'react'
import { render } from '@testing-library/react'
import { Search } from './Search'

describe('Search tests', () => {

    test('To match snapshot', () => {
        const {asFragment} = render(<Search/>)
        expect(asFragment()).toMatchSnapshot()
    })
})