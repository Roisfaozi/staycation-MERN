import Categories from 'parts/Categories'
import Footer from 'parts/Footer'
import Header from 'parts/Header'
import Hero from 'parts/Hero'
import MostPicked from 'parts/mostPicked'
import Testimoni from 'parts/Testimoni'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPage } from 'store/actions/page'
class LandingPage extends Component {
  constructor(props) {
    super(props)
    this.refMostPicked = React.createRef()
  }

  componentDidMount() {
    window.title = 'Staycation | Home'
    window.scrollTo(0, 0)

    if (!this.props.page.landingPage)
      this.props.fetchPage(`/landing-page`, 'landingPage')
  }
  render() {
    const { page } = this.props

    if (!page.hasOwnProperty('landingPage')) return null
    return (
      <>
        <Header {...this.props}></Header>
        <Hero refMostPicked={this.refMostPicked} data={page.landingPage.hero} />
        <MostPicked
          refMostPicked={this.refMostPicked}
          data={page.landingPage.mostPicked}
        />
        <Categories data={page.landingPage.category} />
        <Testimoni data={page.landingPage.testimonial} />
        <Footer />
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  page: state.page,
})

export default connect(mapStateToProps, { fetchPage })(LandingPage)
