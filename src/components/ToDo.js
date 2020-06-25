import React from 'react'
import { connect } from 'react-redux'

const ToDo = ({ id, todo, completed }) => {

    return (
        <li>{todo}</li>
    )

}

export default ToDo