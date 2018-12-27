import React from "react";
import "../class_component/index.css";
const Form = () => {
  return (
    <div className="div2">
      <h1>Create an account</h1>
      <p>It's free and always will be.</p>
      <li>
        <input type="text" placeholder="First Name" id="firstname" />
        <input type="text" placeholder="Surname" id="surname" />
      </li>
      <li>
        <input type="text" placeholder="Mobile number or email address" />
      </li>
      <li>
        <input
          type="text"
          placeholder="Re-enter mobile number or email address"
        />
      </li>
      <li>
        <input type="password" placeholder="New password" />
      </li>
      <p>Birthday</p>
      <li>
        <select>
          <option>Day</option>
        </select>
        <select>
          <option>Month</option>
        </select>
        <select>
          <option>Year</option>
        </select>
        Why do I need to provide my date of birth?
      </li>
      <li>
        <input type="radio">Female</input> <input type="radio">Male</input>
      </li>
      <li>
        By clicking Create an account, you agree to our Terms and that <br />
        you have read our Data Policy, including our Cookie Use
      </li>
      <li>
        <input type="submit" value="Create an account" />
      </li>
      <li>Create a Page for a celebrity, band or business.</li>
    </div>
  );
};
export default Form;
