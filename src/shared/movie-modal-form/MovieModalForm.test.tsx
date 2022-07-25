import React from 'react'
import { render } from '@testing-library/react'
import { MovieModalForm } from './MovieModalForm'
import { ProvidersMock } from '../../../__mocks__/ProviderMock'

describe('MovieModalForm tests', () => {

    test('To match snapshot', () => {
        const {asFragment} = render(<ProvidersMock>
            <MovieModalForm modalName={'Form title'}/>
        </ProvidersMock>)
        expect(asFragment()).toMatchSnapshot()
    })
})