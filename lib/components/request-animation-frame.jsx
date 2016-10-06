import React from "react";

export default function requestAnimationFrame(fn, Component) {
  return class RAF extends React.Component {
    constructor(props) {
      super(props);
      this.state = fn(props, {}, window.performance.now());
      this.update = this.update.bind(this);
    }

    componentDidMount() {
      this.requestId = window.requestAnimationFrame(this.update);
    }

    componentWillUnmount() {
      window.cancelAnimationFrame(this.requestId);
    }

    update(elapsed) {
      var newState = fn(this.props, this.state, elapsed);
      this.setState(newState); // eslint-disable-line react/no-set-state
      this.requestId = window.requestAnimationFrame(this.update);
    }

    render() {
      return <Component {...this.props} {...this.state} />;
    }
  };
}
