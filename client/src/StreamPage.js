import React, { Component } from "react";

import StreamDetail from "./StreamDetail";
import CircularProgress from "material-ui/CircularProgress";

import { connect } from "react-redux";
import { fetchPageDetails } from "./actions/StreamPage";

const StreamPage = class extends Component {
  componentDidMount() {
    this.props.fetchPageDetails(this.props.page);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.page !== nextProps.page) {
      this.props.fetchPageDetails(nextProps.page);
    }
  }

  render() {
    if (this.props.hasError) {
      return <h3>{this.props.errorMessage}</h3>;
    }

    if (this.props.noStreamsAvailable) {
      return <h3>No streams for this page </h3>;
    }

    return this.props.streams.length ? (
      <ul className="horizontal-list">
        {this.props.streams.map(stream => (
          <li key={stream._id}>
            <StreamDetail stream={stream} />
          </li>
        ))}
      </ul>
    ) : (
      <CircularProgress />
    );
  }
};

function mapStateToProps(state) {
  return {
    streams: state.page.streams,
    hasError: state.page.hasError,
    errorMessage: state.page.errorMessage.message,
    noStreamsAvailable: state.page.noStreamsAvailable,
    currentPage: state.page.currentPage
  };
}

const mapDispatchToProps = {
  fetchPageDetails
};

export default connect(mapStateToProps, mapDispatchToProps)(StreamPage);
