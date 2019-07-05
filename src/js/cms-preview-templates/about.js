import React from "react";

const AboutEntry = ({heading, text}) =>
  <div>
    <h4 className="f4 b lh-title mb2 primary">{ heading }</h4>
    <p>{ text }</p>
  </div>;

const AboutEntries = ({data}) => data && data.length > 0
    ? <div className="flex-ns mb3">
      {data.map(({heading, text}) => <AboutEntry heading={heading} text={text} />)}
    </div>
    : "";

export default class AboutPreview extends React.Component {
  render() {
    const {entry, getAsset, widgetFor} = this.props;
    const entryAboutEntries = entry.getIn(["data", "About_entries"]);
    const AboutEntries = entryAboutEntries ? entryAboutEntries.toJS() : [];
    return <div className="ph3 bg-off-white">
      <img src={getAsset(entry.getIn(["data", "logo"]))} alt="" className="db w4 center pv4" />
      <div className="center mw6 pv3">
        { widgetFor("body") }
        <AboutEntries data={AboutEntries} />
      </div>
    </div>;
  }
}
