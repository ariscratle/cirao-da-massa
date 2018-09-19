import React, { Component, Fragment } from 'react'
import Button from '../../components/Button'
import Swear from '../../components/Swear'
import Photo from '../../components/Photo'
import Loading from '../../components/Loading'
import * as SwearAction from '../../actions/SwearAction'

import './home.css'

export default class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            swear: ''
        }
    }

    componentDidMount() {
        this.loadNewSwear()
    }

    handleButton = () => {
        this.loadNewSwear();
    }

    loadNewSwear = () => {
        this.setState({ swear: '' })
        
        // Só para aparecer a mensagem 'Preparando o xingamento...' por um tempo =)
        setTimeout(() => {
            this.setState({ swear: SwearAction.Swear() })
        }, 1000);
    }

    render() {
        return (
            <Fragment>
                <Loading loading={ this.state.swear === '' } />

                <div className="page-home">
                    <div className="container">
                        <div className="header">
                            <h1 className="header__title">Cirão da Massa</h1>
                        </div>
                        
                        <Photo />

                        <Swear swear={ this.state.swear } />

                        <Button onClick={ this.handleButton } value="Me xinga, Ciro!" />
                    </div>
                </div>
            </Fragment>
        )
    }
}