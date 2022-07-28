import React from 'react'
import { render } from '@testing-library/react'
import { SearchMoviesList } from './SearchMoviesList'
import { ProvidersMock } from '../../../__mocks__/ProviderMock'

describe('Home tests', () => {

    test('To match snapshot', () => {
        const {asFragment} = render(<ProvidersMock>
            <SearchMoviesList/>
        </ProvidersMock>)
        expect(asFragment()).toMatchSnapshot()
    })
})