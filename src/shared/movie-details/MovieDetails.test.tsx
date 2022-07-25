import React from 'react'
import { render } from '@testing-library/react'
import { MovieDetails } from './MovieDetails'
import { ProvidersMock } from '../../../__mocks__/ProviderMock'

describe('Home tests', () => {

    test('To match snapshot', () => {
        const {asFragment} = render(<ProvidersMock>
            <MovieDetails/>
        </ProvidersMock>)
        expect(asFragment()).toMatchSnapshot()
    })
})