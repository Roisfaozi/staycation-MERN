import React from 'react'
import { render } from '@testing-library/react'
import Breadcrumb from '../element/Breadcrumb/index'
import landingPage from 'json/landingPage.json'
import InputNumber from 'element/Form/InputNumber'

export default class Example extends React.Component {

    state = {
        value: '1'
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        const breadcrimb = [
            { pageTitle: 'Home', pageHref: '' },
            { pageTitle: 'House Details', pageHref: '' }
        ]

        return (
            <div className="container">
                <div className="row align-items-center justify-content-center" style={{ height: '100vh' }}>
                    <div className="col-auto">
                        <InputNumber
                            max={30}
                            suffix='night'
                            onChange={this.handleChange}
                            name='value'
                            value={this.state.value}
                        />

                    </div>
                </div>
            </div>

        )
    }

}


