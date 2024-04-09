import { FormEvent, useState } from "react";
//import "./register.css"; // Import the CSS file

function Register() {
  const [heading, setHeading] = useState("My form");
  const [color, setColor] = useState(false);

  const myFun = (event: FormEvent) => {
    event.preventDefault(); // Prevents default form submission behavior
    setHeading("form submitted");
  };

  function myMouseOver() {
    setColor(true);
  }

  function myMouseOut() {
    setColor(false);
  }

  return (
    <div className="register-container"> {/* Apply class name here */}
      <h1>{heading}</h1>
      <form onSubmit={myFun}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" required className="input-field" /> {/* Apply class name here */}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="pass" maxLength={10} className="input-field" /> {/* Apply class name here */}
        </div>
        <button
          className="submit-button" 
          style={{ backgroundColor: color ? "black" : "white", color: "green" }}
          type="submit"
          onMouseOver={myMouseOver}
          onMouseOut={myMouseOut}
        >
          submit
        </button>
      </form>
    </div>
  );
}

export default Register;
