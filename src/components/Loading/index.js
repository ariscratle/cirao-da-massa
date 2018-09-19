import React, { Component } from 'react'

import './loading.css'

export default class Loading extends Component {
    render() {
        return (
            <div className={`loading ${this.props.loading && 'active'} `}></div>
        )
    }
}