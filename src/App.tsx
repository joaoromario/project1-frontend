import "./App.scss";
import { Navbar } from "./components/Navbar/Navbar";
import { Bookings } from "./pages/bookings/Bookings";
import FinancialManagement from "./pages/financialManagement/FinancialManagement";
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
      <Bookings />
      {/* <FinancialManagement /> */}
    </>
  );
}

export default App;
