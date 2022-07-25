import React from 'react'
import { render } from '@testing-library/react'
import { MainContent } from './MainContent'
import { ProvidersMock } from '../../../__mocks__/ProviderMock'

describe('MainContent tests', () => {

    test('To match snapshot', () => {
        const {asFragment} = render(<ProvidersMock><MainContent/></ProvidersMock>)
        expect(asFragment()).toMatchSnapshot()
    })
})