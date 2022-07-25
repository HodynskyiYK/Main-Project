import React from 'react'
import { render } from '@testing-library/react'
import { EmptyMovieList } from './EmptyMovieList'

describe('EmptyMovieList tests', () => {

    test('To match snapshot', () => {
        const {asFragment} = render(<EmptyMovieList/>)
        expect(asFragment()).toMatchSnapshot()
    })
})