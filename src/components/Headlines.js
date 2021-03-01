import React from 'react';
import { connect } from 'react-redux';
import { makeApiCall } from './../actions/index';

class Headlines extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   error: null,
    //   isLoaded: false,
    //   headlines: []
    // }; all state handled by Redux now
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(makeApiCall());
  }

  render() {
    const { error, isLoading, headlines } = this.props;
    if (error) {
      return <>Error: {error.message} </>;
    } else if (isLoading) {
      return <>Loading... </>;
    } else {
      return (
        <>
          <h1>Headlines</h1>
          <ul>
            {headlines.map((headline, index) =>
              <li key={index}>
                <h3>{headline.title}</h3>
                <p>{headline.abstract}</p>
              </li>
            )}
          </ul>
        </>
      );
    }
  }

}

const mapStateToProps = state => {
  return {
    headlines: state.headlines,
    isLoading: state.isLoading,
    error: state.error
  }
}

export default connect(mapStateToProps)(Headlines);