import React from "react";
import Group from "../components/Group";

export default class GroupPage extends React.Component {
  constructor() {
    super();
  }
  render() {
    const data = JSON.parse(localStorage.getItem("groups"));

    return (
      <div classname="AllAds">
        {data.map((d) => {
          return <Group data={d} />;
        })}
      </div>
    );
  }
}

// export default GroupPage;
