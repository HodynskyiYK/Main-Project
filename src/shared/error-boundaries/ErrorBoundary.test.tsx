import React from 'react'
import { render } from '@testing-library/react'
import { ErrorBoundary } from './ErrorBoundaries'

const Something = () => null

describe('ErrorBoundary tests', () => {

    test('To match snapshot', () => {
        const {asFragment} = render(<ErrorBoundary errorText={'Some error'}>
            <Something/>
        </ErrorBoundary>)
        expect(asFragment()).toMatchSnapshot()
    })
})