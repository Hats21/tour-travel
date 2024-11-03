/* eslint-disable no-unused-vars */
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import Home from "./pages/Home";
import PlaceBooking from "./pages/PlaceBooking";
import DetailPage from "./pages/DetailPage";
import AppLayout from "./ui/AppLayout";
import YourCart from "./pages/YourCart";
import ContactUs from "./pages/ContactUs";
import TotalBookings from "./pages/TotalBookings";
import Dashboard from "./ui/Dashboard";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />}>
              <Route index element={<Navigate to="home" replace={true} />} />
              <Route path="home" element={<p>app</p>} />
              <Route path="total_bookings" element={<TotalBookings />} />
              <Route path="order_new" element={<PlaceBooking />} />
            </Route>
            <Route path="/order_new" element={<PlaceBooking />} />
            <Route path="/detail" element={<DetailPage />} />
            <Route path="/account" element={<h1>Account page</h1>} />
            <Route path="/your_booking" element={<h1>Your booking page</h1>} />
            <Route path="/cart" element={<YourCart />} />
            <Route path="/contact_us" element={<ContactUs />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/forgot_password" element={<ForgotPasswordPage />} />

            <Route path="*" element={<Navigate to="/" replace={true} />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <GlobalStyles />
    </>
  );
}

export default App;
