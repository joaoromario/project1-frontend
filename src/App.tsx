import "./App.scss";
import { Navbar } from "./components/Navbar/Navbar";
import { Login } from "./pages/loginPage/login";
import { Reservation } from "./pages/Reservation/Reservation";

function App() {
  return (
    <>
      <Navbar />
      <Login />
      <Reservation />
    </>
  );
}

export default App;
