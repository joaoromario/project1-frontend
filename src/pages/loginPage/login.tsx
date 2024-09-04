import { Button } from "../../components/Button/Button";
import { Panel } from "../../components/Panel/Panel";
import "./Login.scss";

const BASE_CLASS = "login";

export function Login() {
  return (
    <div className={BASE_CLASS}>
      <Panel
        header={
          <>
            <h1>Welcome</h1>
            <p>Please sign in to your account</p>
          </>
        }
        children={
          <form action="post">
            <input type="email" placeholder="Email address" />
            <input type="password" placeholder="Password" />
            <Button text="Sing In" />
          </form>
        }
      />
    </div>
  );
}
