import React from 'react';

export default class ErrorHandling extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error) {
        this.setState = ({hasError: true})
    }

    render () {
        if (this.state.hasError) {
            return <h1>Somethins Wrong</h1>
        }

        return this.props.children
    }
}