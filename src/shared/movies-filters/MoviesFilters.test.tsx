import React from 'react'
import { render } from '@testing-library/react'
import { MoviesFilters } from './MoviesFilters'
import { FILTERS_VALUES } from './filtersConstants'
import { ProvidersMock } from '../../../__mocks__/ProviderMock'

describe('MoviesFilters tests', () => {

    test('To match snapshot', () => {
        const {asFragment} = render(<ProvidersMock>
            <MoviesFilters filters={FILTERS_VALUES}/>
        </ProvidersMock>)
        expect(asFragment()).toMatchSnapshot()
    })
})