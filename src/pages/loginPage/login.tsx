import { Button } from "../../components/Button/Button";
import "./Login.scss";

const BASE_CLASS = "login";

export function Login() {
  return (
    <div className={BASE_CLASS}>
      <div className={`${BASE_CLASS}__panel`}>
        <div className={`${BASE_CLASS}__header`}>
          <h1>Welcome</h1>
          <p>Please sign in to your account</p>
        </div>
        <div className={`${BASE_CLASS}__form`}>
          <form action="post">
            <input type="email" placeholder="Email address" />
            <input type="password" placeholder="Password" />
            <Button text="Sing In" />
          </form>
        </div>
      </div>
    </div>
  );
}
