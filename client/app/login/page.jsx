"use client";

import axios from "axios";
import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    axios
      .post("http://localhost:8080/api/auth/login", { ...data })
      .then((response) => console.log(response))
      .catch((error) => console.log(error.message));
  };

  const handleSubmitUser = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/api/auth/", { ...user })
      .then((res) => console.log(res.statusText))
      .catch((err) => console.log(err.message));
    setUser({
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="">
      <div className="mt-8 flex flex-col items-center gap-2">
        <p>Login</p>
        <form
          onSubmit={handleSubmit}
          className="flex w-[400px] flex-col items-center justify-center gap-3 rounded-sm bg-neutral-800 py-5"
        >
          <div className="form-elements">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" required />
          </div>
          <div className="form-elements">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" required />
          </div>
          <button type="submit" className="rounded-md bg-blue-800 px-8 py-2">
            Submit
          </button>
        </form>
      </div>

      <div className="mt-8 flex flex-col items-center gap-2">
        <p>Create user</p>
        <form
          onSubmit={handleSubmitUser}
          className="flex w-[400px] flex-col items-center justify-center gap-3 rounded-sm bg-neutral-800 py-5"
        >
          <div className="form-elements">
            <label htmlFor="newusername">Username</label>
            <input
              type="text"
              name="username"
              id="newusername"
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              required
            />
          </div>
          <div className="form-elements">
            <label htmlFor="newemail">Email</label>
            <input
              type="email"
              name="email"
              id="newemail"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              required
            />
          </div>
          <div className="form-elements">
            <label htmlFor="newpassword">Password</label>
            <input
              type="password"
              name="password"
              id="newpassword"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              required
            />
          </div>
          <button type="submit" className="rounded-md bg-blue-800 px-8 py-2">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
