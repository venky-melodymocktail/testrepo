import React from 'react'
import { create, update } from 'react-test-renderer'
import TestApp from '../TestApp'

describe('My first snapshot test', () => {
    test('testing app button', () => {
        let tree = create(<TestApp />)
        expect(tree.toJSON()).toMatchSnapshot()
    })
})

describe('Changing our button name to Hide', () => {
    test('toggle the button', () => {
        let tree = create(<TestApp />)

        let instance = tree.getInstance()

        expect(instance.state.isActive).toBe(false)

        // changing  the state
        instance.handleClick()

        expect(instance.state.isActive).toBe(true)

        expect(tree.toJSON()).toMatchSnapshot()
    })
})
