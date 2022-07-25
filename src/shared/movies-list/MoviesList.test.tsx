import React from 'react'
import { render } from '@testing-library/react'
import { MoviesList } from './MoviesList'
import { ProvidersMock } from '../../../__mocks__/ProviderMock'

describe('MoviesList tests', () => {

    test('To match snapshot', () => {
        const {asFragment} = render(<ProvidersMock>
            <MoviesList/>
        </ProvidersMock>)
        expect(asFragment()).toMatchSnapshot()
    })
})