import React, { Component } from 'react'

import './swear.css'

export default class Swear extends Component {
    render() {
        return ( 
            <div className="swear">
                { this.props.swear.length === 0 && <span>Preparando o xingamento...</span> }
                
                { this.props.swear.length > 0 && this.props.swear }
            </div>
        )
    }
}