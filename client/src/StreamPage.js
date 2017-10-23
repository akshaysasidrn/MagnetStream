import React, { Component } from "react";

import StreamDetail from "./StreamDetail";
import CircularProgress from "material-ui/CircularProgress";

const StreamPage = class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  fetchStreamDetails = page => {
    fetch(`/api/${page}`)
      .then(res => res.json())
      .then(list => this.setState({ list }));
  };

  componentDidMount() {
    this.fetchStreamDetails(this.props.page);
  }

  componentWillReceiveProps(nextProps) {
    this.fetchStreamDetails(nextProps.page);
  }

  render() {
    return this.state.list.length ? (
      <ul className="horizontal-list">
        {this.state.list.map(stream => (
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
export default StreamPage;
