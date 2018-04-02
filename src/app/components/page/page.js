import React from "react";
import _ from "lodash";

export default class Page extends React.Component {

  render() {
    if (!_.get(this.props, "preLoadedData[0].slug", 0)) {
      console.log(this.props.preLoadedData[0].slug);

      return null;
    }
    return (
      <div className="mt-5">
        <h1
          className="text-center"
          dangerouslySetInnerHTML={{
            __html: this.props.preLoadedData[0].title.rendered
          }}
        />
        <div dangerouslySetInnerHTML={{ __html: this.props.preLoadedData[0].content.rendered}} />
      </div>
    );
  }
}