import React from 'react'
import { render } from '@testing-library/react'
import { Header } from './Header'
import { ProvidersMock } from '../../../__mocks__/ProviderMock'

describe('Header tests', () => {

    test('To match snapshot', () => {
        const {asFragment} = render(<ProvidersMock><Header/></ProvidersMock>)
        expect(asFragment()).toMatchSnapshot()
    })
})