import { render, screen } from '@testing-library/react'
import {App} from './App'
import { ProvidersMock } from '../__mocks__/ProviderMock'

describe('Router tests', () => {

    test('Should redirect to Search page by default', () => {
        render(
            <ProvidersMock>
                <App/>
            </ProvidersMock>
        )
        const searchPage = screen.getByTestId('search-page')
        expect(searchPage).toBeInTheDocument()
    })
})