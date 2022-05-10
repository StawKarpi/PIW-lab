import React from "react";
import Group from "../components/Group";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

export default class GroupPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchOption: "desc",
      searchValue: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ searchOption: e.target.value });
  }

  searchData(data) {
    if (this.state.searchOption === "desc") {
      return this.searchDataDescription(data);
    } else if (this.state.searchOption === "subj") {
      return this.searchDataSubject(data);
    } else if (this.state.searchOption === "tags") {
      return this.searchDataTags(data);
    }
  }

  searchDataDescription(data) {
    return data.filter((val) => {
      if (this.state.searchValue === "") {
        return val;
      } else if (
        val.description
          .toLowerCase()
          .includes(this.state.searchValue.toLowerCase())
      ) {
        return val;
      }
    });
  }

  searchDataSubject(data) {
    return data.filter((val) => {
      if (this.state.searchValue === "") {
        return val;
      } else if (
        val.subject.toLowerCase().includes(this.state.searchValue.toLowerCase())
      ) {
        return val;
      }
    });
  }

  searchDataTags(data) {
    return data.filter((val) => {
      if (this.state.searchValue === "") {
        return val;
      } else if (
        val.tags.some((element) =>
          element.toLowerCase().includes(this.state.searchValue.toLowerCase())
        )
      ) {
        return val;
      }
    });
  }

  render() {
    const data = JSON.parse(localStorage.getItem("groups"));

    return (
      <div>
        <div>
          <TextField
            variant="outlined"
            size="small"
            placeholder="Search..."
            onChange={(e) => {
              this.setState({ searchValue: e.target.value });
            }}
          />
          <Select
            value={this.state.searchOption}
            label="Wyszukaj po..."
            onChange={(e) => this.handleChange(e)}
            size="small"
          >
            <MenuItem value={"desc"}>Opis</MenuItem>
            <MenuItem value={"subj"}>Przedmiot</MenuItem>
            <MenuItem value={"tags"}>Tagi</MenuItem>
          </Select>
        </div>
        <div className="AllAds">
          {this.searchData(data).map((d) => {
            return <Group data={d} />;
          })}
        </div>
      </div>
    );
  }
}
