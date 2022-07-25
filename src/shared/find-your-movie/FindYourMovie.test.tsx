import React from 'react'
import { render } from '@testing-library/react'
import { FindYourMovie } from './FindYourMovie'
import { ProvidersMock } from '../../../__mocks__/ProviderMock'

describe('FindYourMovie tests', () => {

    test('To match snapshot', () => {
        const {asFragment} = render(<ProvidersMock><FindYourMovie/></ProvidersMock>)
        expect(asFragment()).toMatchSnapshot()
    })
})