import React from 'react'
import { render } from '@testing-library/react'
import { CompletionMoviePopup } from './CompletionMoviePopup'

describe('CompletionMoviePopup tests', () => {

    test('To match snapshot', () => {
        const {asFragment} = render(<CompletionMoviePopup completionText={'Some text'}/>)
        expect(asFragment()).toMatchSnapshot()
    })
})