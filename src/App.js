import "./App.css";
import MyNav from "./components/MyNav/MyNav";
import Landing from "./components/Landing/Landing";
import BookCard from "./components/BookCard/BookCard";
import CartDetails from "./components/CartDetails/CartDetails";
import Shop from "./components/Shop/Shop";
import BookPage from "./components/BookPage/BookPage";
import MyFooter from "./components/MyFooter/MyFooter";
import SectionTitle from "./components/SectionTitle/SectionTitle";
import SwiperSection from "./components/SwiperSection/SwiperSection";
import DealOfWeek from "./components/DealOfWeek/DealOfWeek";
import SingleItemDetails from "./components/SingleItemDetails/SingleItemDetails";
import WhatsInTrend from "./components/WhatsInTrend/WhatsInTrend";
import WhatsPeopleSay from "./components/WhatsPeopleSay/WhatsPeopleSay";
import Popular from "./components/Popular/Popular";
import { Router, BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ShopPage from "./Pages/ShopPage";
import Book from "./Pages/Book";
import CartPage from "./Pages/CartPage";
import ContactForm from "./components/contactForm/ContactForm";
import NewForm from "./components/NewForm/NewForm";
import EditForm from "./components/EditForm/EditForm";
function App() {
  return (
    <div className="col-12">
      <MyNav />
      {/* <NewForm /> */}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/book/:id" element={<Book />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/new" element={<NewForm />} />
        <Route path="/edit/:id" element={<EditForm />} />

        {/* contact us
        about
        FQA */}
      </Routes>
      <MyFooter />
    </div>
  );
}

export default App;
