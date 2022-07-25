import React from 'react'
import { render } from '@testing-library/react'
import { Loader } from './Loader'

describe('Loader tests', () => {

    test('To match snapshot', () => {
        const {asFragment} = render(<Loader/>)
        expect(asFragment()).toMatchSnapshot()
    })
})