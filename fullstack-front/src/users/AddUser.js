import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate} from "react-router-dom";

export default function AddUser() {

  let navigate = useNavigate()

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { name, username, email } = user;

  const onInputChange = (e) => {
    setUser({...user,[e.target.name]:e.target.value})
  };


  const onSubmit = async (e) =>{
    e.preventDefault();
    await axios.post("http://localhost:9080/user", user);
    navigate("/");
  };

  return (
    <div className="container">
      <div class="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register User</h2>
          <form onSubmit={(e) => onSubmit(e)}>
          <div className="mb-3">
            <label className="form-label" htmlFor="Name">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="Name">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              name="username"
              placeholder="Enter Your Username"
              value={username}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="Name">
              Email
            </label>
            <input
              type="text"
              className="form-control"
              name="email"
              placeholder="Enter Your Email Address"
              value={email}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <button type="submit" className="btn btn-outline-primary">
            Submit
          </button>
          <Link  className="btn btn-outline-danger mx-2" to={"/"}>
            Cancel
          </Link>
          </form>
        </div>
      </div>
    </div>
  );
}


