import { Panel } from "../../components/Panel/Panel";
import { Button } from "../../components/Button/Button";

import "./Register.scss";

import React from "react";

const BASE_CLASS = "register";

export function Register() {
  return (
    <div className={BASE_CLASS}>
      <Panel
        header={
          <>
            <h1>Welcome</h1>
            <p>Let's create your account</p>
          </>
        }
        children={
          <form action="post">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email address" />
            <input type="password" placeholder="Password" />
            <Button text="Register" />
          </form>
        }
      />
    </div>
  );
}
