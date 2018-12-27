import React from "react";
import Logo from "../functional_componennt/Logo";
import SearchBox from "../functional_componennt/SearchBox";
import SearchButton from "../functional_componennt/SearchButton";
import "./index.css";

class Homepage extends React.Component {
  render() {
    return (
      <div className="container">
        <Logo />
        <SearchBox />
        <SearchButton />
      </div>
    );
  }
}
export default Homepage;
