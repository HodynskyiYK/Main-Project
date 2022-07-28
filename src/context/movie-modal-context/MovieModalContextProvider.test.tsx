import React from 'react'
import { render } from '@testing-library/react'
import { ProvidersMock } from '../../../__mocks__/ProviderMock'

describe('MovieModalContextProvider tests', () => {

    test('To match snapshot', () => {
        const {asFragment} = render(<ProvidersMock><div>Children</div></ProvidersMock>)
        expect(asFragment()).toMatchSnapshot()
    })
})