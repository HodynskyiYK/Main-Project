import React from 'react'
import { render } from '@testing-library/react'
import { Button } from './Button'

describe('Button tests', () => {

    test('To match snapshot', () => {
        const {asFragment} = render(<Button buttonClassName={'btn'} buttonText={'button'}/>)
        expect(asFragment()).toMatchSnapshot()
    })
})