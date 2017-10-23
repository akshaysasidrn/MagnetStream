import React, { Component } from "react";

import StreamPage from "./StreamPage";
import CircularProgress from "material-ui/CircularProgress";

const StreamContainer = class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: [],
      currentPage: 0
    };
  }

  componentDidMount() {
    // landing on root path by default renders movies
    let type = "movies";
    if (this.props.match.params.type) {
      type = this.props.match.params.type;
    }
    fetch(`/api/${type}`)
      .then(res => res.json())
      .then(pages => this.setState({ pages }));
  }

  componentWillReceiveProps(nextProps) {
    fetch(`/api/${nextProps.match.params.type}`)
      .then(res => res.json())
      .then(pages => {
        this.setState({ pages });
      });
  }

  render() {
    return this.state.pages.length ? (
      <div>
        {this.props.match.type}
        <StreamPage page={this.state.pages[this.state.currentPage]} />
      </div>
    ) : (
      <CircularProgress />
    );
  }
};

export default StreamContainer;
