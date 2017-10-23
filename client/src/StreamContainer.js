import React, { Component } from "react";

import StreamPage from "./StreamPage";
import CircularProgress from "material-ui/CircularProgress";

import { connect } from "react-redux";
import { fetchPages } from "./actions/StreamContainer";

const StreamContainer = class extends Component {
  componentDidMount() {
    // landing on root path by default renders movies
    let type = "movies";
    if (this.props.match.params.type) {
      type = this.props.match.params.type;
    }
    this.props.fetchPages(type);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.type !== nextProps.match.params.type) {
      this.props.fetchPages(nextProps.match.params.type);
    }
  }

  render() {
    if (this.props.hasError) {
      return <h3>{this.props.errorMessage}</h3>;
    }

    if (this.props.noPagesAvailable) {
      return <h3>No streams available</h3>;
    }

    return this.props.pages.length ? (
      <div>
        {this.props.match.type}
        <StreamPage page={this.props.pages[this.props.currentPage]} />
      </div>
    ) : (
      <CircularProgress />
    );
  }
};

function mapStateToProps(state) {
  return {
    pages: state.stream.pages,
    hasError: state.stream.hasError,
    errorMessage: state.stream.errorMessage.message,
    noPagesAvailable: state.stream.noPagesAvailable,
    currentPage: state.stream.currentPage
  };
}

const mapDispatchToProps = {
  fetchPages
};

export default connect(mapStateToProps, mapDispatchToProps)(StreamContainer);
