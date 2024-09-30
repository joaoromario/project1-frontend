import "./App.scss";
import { Navbar } from "./components/Navbar/Navbar";
import { Bookings } from "./pages/bookings/Bookings";
import Expenses from "./pages/financialManagement/Expenses";
import Revenue from "./pages/financialManagement/Revenue";
import { Login } from "./pages/loginPage/login";
import { Register } from "./pages/registerPage/Register";
import { Reservation } from "./pages/Reservation/Reservation";

function App() {
  return (
    <>
      <Navbar />
      {/* <Login /> */}
      {/* <Reservation /> */}
      {/* <Register /> */}
      {/* <Bookings /> */}
      {/* <Revenue /> */}
      <Expenses />
    </>
  );
}

export default App;
