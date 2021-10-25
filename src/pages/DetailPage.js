import Activities from 'parts/Activities'
import BookingForm from 'parts/BookingForm'
import FeaturedImage from 'parts/FeaturedImage'
import Footer from 'parts/Footer'
import Header from 'parts/Header'
import PageDetailDescription from 'parts/PageDetailDescription'
import PageDetailItem from 'parts/PageDetailItem'
import Testimoni from 'parts/Testimoni'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Fade from 'react-reveal/Fade'
import { checkoutBooking } from 'store/actions/checkout'
import { fetchPage } from 'store/actions/page'

class DetailPage extends Component {
  componentDidMount() {
    window.title = 'Details Page'
    window.scrollTo(0, 0)

    if (!this.props.page[this.props.match.params.id])
      this.props.fetchPage(
        `${process.env.REACT_APP_HOST}api/v1/member/detail-page/${this.props.match.params.id}`,
        this.props.match.params.id
      )
  }

  render() {
    const { page, match } = this.props
    if (!page[match.params.id]) return null
    const breadcrumb = [
      { pageTitle: 'Home', pageHref: '' },
      { pageTitle: 'House Details', pageHref: '' },
    ]
    return (
      <>
        <Header {...this.props} />
        <PageDetailItem breadcrumb={breadcrumb} data={page[match.params.id]} />
        <FeaturedImage data={page[match.params.id].imageId} />
        <section className="container">
          <div className="row">
            <div className="col-7 pr-5">
              <Fade bottom>
                <PageDetailDescription data={page[match.params.id]} />
              </Fade>
            </div>
            <div className="col-5">
              <Fade bottom>
                <BookingForm
                  itemDetails={page[match.params.id]}
                  startBooking={this.props.checkoutBooking}
                />
              </Fade>
            </div>
          </div>
        </section>

        <Activities data={page[match.params.id].activityId} />
        <Testimoni data={page[match.params.id].testimonial} />
        <Footer />
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  page: state.page,
})

export default connect(mapStateToProps, { checkoutBooking, fetchPage })(
  DetailPage
)
