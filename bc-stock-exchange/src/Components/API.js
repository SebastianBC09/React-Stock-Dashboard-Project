import React from 'react';

class API extends React.Component {
  state = {
    loading: true,
    error: null,
    data: {}
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {
    this.setState ({ loading: true, error: null })

    try {
      const data = await fetch('api.marketstack.com/v1/tickers/aapl/eod?access_key=1b6bd2c61164ca620bf83bae4a10194b')
      .then (response => response.json())
      .then (data => console.log(data))

      this.setState({ loading: false, data: data }
        )
    } catch (error) {
      this.setState({ loading: false, error: error })
    }
  }

  render() {
    if(this.state.loading === true) {
      return 'Loading...'
    }
    return (
      <h1>Should display Apple Stock info</h1>
    )
  }
}

export default API
