import React from 'react'
import { render } from '@testing-library/react'
import { AddMovie } from './AddMovie'
import { ProvidersMock } from '../../../__mocks__/ProviderMock'

describe('AddMovie tests', () => {

    test('To match snapshot', () => {
        const {asFragment} = render(<ProvidersMock><AddMovie/></ProvidersMock>)
        expect(asFragment()).toMatchSnapshot()
    })
})