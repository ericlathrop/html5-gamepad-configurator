import PureRenderMixin from "react-addons-pure-render-mixin";
import React from "react";

export default function(Component) {
  var klass = class Pure extends React.Component {
    constructor(props) {
      super(props);
      this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
      return <Component {...this.props} />;
    }
  };
  klass.displayName = "Pure(" + Component.name + ")";
  return klass;
}
