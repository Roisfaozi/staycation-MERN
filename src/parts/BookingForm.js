import Button from 'element/Button'
import InputDate from 'element/Form/InputDate'
import InputNumber from 'element/Form/InputNumber'
import propTypes from 'prop-types'
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class BookingForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {
        duration: 1,
        date: {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection',
        },
      },
    }
  }

  updateData = (e) => {
    this.setState({
      ...this.state,
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value,
      },
    })
  }

  startBooking = () => {
    const { data } = this.state
    this.props.startBooking({
      _id: this.props.itemDetails._id,
      duration: data.duration,
      date: {
        startDate: data.date.startDate,
        endDate: data.date.endDate,
      },
    })
    this.props.history.push('/checkout')
  }

  componentDidUpdate(prevProps, prevState) {
    const { data } = this.state
    if (prevState.data.date !== data.date) {
      const startDate = new Date(data.date.startDate)
      const endDate = new Date(data.date.endDate)
      const countDuration = new Date(endDate - startDate).getDate()
      this.setState({
        data: {
          ...this.state.data,
          duration: countDuration,
        },
      })
    }

    if (prevState.data.duration !== data.duration) {
      const startDate = new Date(data.date.startDate)
      const endDate = new Date(
        startDate.setDate(startDate.getDate() + +data.duration - 1)
      )
      this.setState({
        ...this.state,
        data: {
          ...this.state.data,
          date: {
            ...this.state.data.date,
            endDate: endDate,
          },
        },
      })
    }
  }

  render() {
    const { data } = this.state
    const { itemDetails, startBooking } = this.props
    return (
      <div className="card bordered" style={{ padding: '60px 80px' }}>
        <h5 className="h2 text-teal mb-4">
          ${itemDetails.price}{' '}
          <span className="text-gray-500 font-weight-light">
            per {itemDetails.unit}
          </span>
        </h5>
        <label htmlFor="duration">How Long you will stay?</label>
        <InputNumber
          max={30}
          suffix={' night'}
          isSuffixPlural
          onChange={this.updateData}
          name="duration"
          value={data.duration}
        />

        <label htmlFor="duration">How Long you will stay?</label>
        <InputDate onChange={this.updateData} name="date" value={data.date} />

        <h6
          className="text-gray-500 font-weigth-light"
          style={{ marginBottom: 40 }}>
          You will pay{' '}
          <span className="text-gray-900">
            ${itemDetails.price * data.duration} USD
          </span>{' '}
          per{' '}
          <span className="text-gray-900">
            {data.duration} {itemDetails.unit}
          </span>
        </h6>

        <Button
          className="btn"
          hasShadow
          isPrimary
          isBlock
          onClick={this.startBooking}>
          Continue To Book
        </Button>
      </div>
    )
  }
}

BookingForm.propTypes = {
  itemDetails: propTypes.object,
  startBooking: propTypes.func,
}

export default withRouter(BookingForm)
