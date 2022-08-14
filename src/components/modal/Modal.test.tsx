import React from 'react'
import { Modal } from './Modal'
import { render, screen } from '@testing-library/react'
import { ProvidersMock } from '../../../__mocks__/ProviderMock'

describe('Modal tests', () => {

    test('To match snapshot', () => {
        const {asFragment} = render(<ProvidersMock>
            <Modal>
                <span>Test</span>
            </Modal>)
        </ProvidersMock>)
        expect(asFragment()).toMatchSnapshot()
    })

    test('close button in modal', () => {
        render(<ProvidersMock>
            <Modal>
                <span>Test</span>
            </Modal>)
        </ProvidersMock>)
        const btn = screen.getByTestId('close-btn')
        expect(btn).toBeInTheDocument()
    })
})