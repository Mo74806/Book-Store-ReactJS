import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import BookCard from "../BookCard/BookCard";
// Import Swiper styles
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getBooks } from "../../store/reducer/booksSlice";
import { useSelector } from "react-redux";
export default function SwiperBooks() {
  //update to get books from parent
  //or make a global state fter read it from json server
  const { books } = useSelector((state) => state.booksList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, []);
  return (
    <Swiper
    className="py-5"
      spaceBetween={50}
      slidesPerView={4}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      onSlideChange={() => {}}
      onSwiper={(swiper) => {}}
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        900: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1300: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }}
    >
      {books.map((book, index) => (
        <SwiperSlide   key={index}>
          <BookCard  book={book}></BookCard>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
