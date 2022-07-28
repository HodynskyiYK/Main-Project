import React from 'react'
import { render } from '@testing-library/react'
import { DeleteMovieModal } from './DeleteMovieModal'
import { ProvidersMock } from '../../../__mocks__/ProviderMock'

describe('DeleteMovieModal tests', () => {

    test('To match snapshot', () => {
        const {asFragment} = render(<ProvidersMock><DeleteMovieModal/></ProvidersMock>)
        expect(asFragment()).toMatchSnapshot()
    })
})