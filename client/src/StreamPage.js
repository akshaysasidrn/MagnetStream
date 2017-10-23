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

  componentDidMount() {
    fetch(`/api/${this.props.page}`)
      .then(res => res.json())
      .then(list => this.setState({ list }));
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
