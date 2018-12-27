import React from "react";
import "./index.css";

class Header extends React.Component {
  render() {
    return (
      <div className="header_wrapper">
        <div className="header">
          <li id="sitename">facebook</li>
          <form>
            <li>
              Email or Phone
              <br />
              <input type="text" name="email" />
            </li>
            <li>
              Password
              <br />
              <input type="password" name="password" />
            </li>
            <input type="submit" name="Login" />
          </form>
        </div>
      </div>
    );
  }
}
export default Header;
