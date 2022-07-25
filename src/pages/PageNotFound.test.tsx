import React from 'react'
import { render } from '@testing-library/react'
import { PageNotFound } from './PageNotFound'

describe('PageNotFound tests', () => {

    test('To match snapshot', () => {
        const {asFragment} = render(<PageNotFound/>)
        expect(asFragment()).toMatchSnapshot()
    })
})