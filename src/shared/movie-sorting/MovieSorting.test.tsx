import React from 'react'
import { render } from '@testing-library/react'
import { MovieSorting } from './MovieSorting'
import { ProvidersMock } from '../../../__mocks__/ProviderMock'

describe('MovieSorting tests', () => {

    test('To match snapshot', () => {
        const {asFragment} = render(<ProvidersMock>
            <MovieSorting/>
        </ProvidersMock>)
        expect(asFragment()).toMatchSnapshot()
    })
})