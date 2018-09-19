import React, { Component } from 'react'

import './photo.css'

import imagemCirao from '../../assets/images/cirao.jpg'

export default class Photo extends Component {
    render() {
        return (
            <figure>
                <img src={ imagemCirao } alt="Cirão da Massa" />
            </figure>
        )
    }
}