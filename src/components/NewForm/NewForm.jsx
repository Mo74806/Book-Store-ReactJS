import React from "react";
import PageMainTitle from "../PageMainTitle/PageMainTitle";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SendIcon from "@mui/icons-material/Send";
import NavigationIcon from "@mui/icons-material/Navigation";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";
import "./NewForm.css";
import { useState } from "react";
import { addBook } from "../../store/reducer/booksSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { SafetyCheck } from "@mui/icons-material";
import { Navigate, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
export default function NewForm() {
  // let [check, setCheck] = useState(-2);
  const { books } = useSelector((state) => state.booksList);

  const dispatch = useDispatch();
  let categories = [
    "Action & Adventure",
    "Activity Books",
    "Animals",
    "Anthologies",
    "Arts & Literature",
    "Cars & Trucks",
    "Classics",
    "Contemporary",
    "Cultural",
    "European",
    "Foreign Language",
    "Genre Fiction",
    "Historical",
  ];
  const [isActive, setIsActive] = useState(false);
  const [error, setError] = useState({
    title: null,
    authorName: null,
    price: null,
    priceDiscount: null,
    description: null,
    fullDescription: null,
    imageCover: null,
    categories: null,
  });

  let navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    authorName: "",
    price: "",
    priceDiscount: 0,
    description: "",
    fullDescription: "",
    imageCover: "",
    categories: [],
  });

  let handleImage = (e) => {
    console.log(e.target.value);
  };
  // useEffect(() => {
  //   setCheck(check + 2);
  //   console.log(error);
  // }, [error]);
  let navigateToShop = () => {
    navigate("/admin");
    // console.log("sssssssssss");
  };

  let handleAdd = () => {
    // console.log(check);
    // if (check == 0) console.log(form);
    dispatch(
      addBook({
        title: form.title,
        price: form.price,
        author: {
          name: form.authorName,
        },
        priceDiscount: form.priceDiscount,
        fullDescription: form.fullDescription,
        description: form.description,
        imageCover: "https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/29.jpg",
        category: form.categories,
        ratingAvg: 0,
        numberOfSeller: 0,
        qty: 1,
      })
    );
    navigateToShop();
  };
  let handleChange = (id, value) => {
    if (value.length == 0) {
      setError({ ...error, [id]: "you must enter data" });
    } else {
      if (id == "title" && value.length < 3) {
        console.log(id == "title");

        return setError({
          ...error,
          [id]: "Book Title must be more than 3 character",
        });
      }
      if (id == "authorName" && value.length < 3) {
        return setError({
          ...error,
          [id]: "Author  Name Must be more than 3 characters",
        });
      }

      if (id == "price" && parseInt(value) < 0) {
        return setError({
          ...error,
          [id]: "Book Price must be more than 0 Dollar",
        });
      }

      if (id == "priceDiscount" && parseInt(value) <= 0) {
        return setError({
          ...error,
          [id]: "Book Price must be more than or equall 0 Dollar",
        });
      }
      if (id == "description" && value.length < 10) {
        return setError({
          ...error,
          [id]: "description must be more than 10 characters",
        });
      }
      if (id == "fullDescription" && value.length < 10) {
        return setError({
          ...error,
          [id]: "description must be more than 10 characters",
        });
      }
    }
    // setCheck(check - 4);
    setError({ ...error, [id]: null });

    setForm({ ...form, [id]: value });
  };
  let handleCategory = (e) => {
    setIsActive((current) => !current);
    if (!isActive) {
      e.target.className =
        "rounded-pill border-gray border px-2 bg-warning py-1 text-sm text-dark";
      let category = [...form.categories, e.target.name];
      console.log(category);
      setForm({ ...form, categories: category });
    } else {
      e.target.className =
        "rounded-pill border-gray border px-2 bg-dark py-1 text-sm text-light";
    }
    console.log(e.target.className);
  };
  return (
      <>
      <div className="row  ">
        <PageMainTitle title="New Book" />
      </div>
      <div className="row d-flex my-5 justify-content-center ">
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          {" "}
          <div className="row  d-flex justify-content-center">
            <div className={`col-lg-6  col-10 m-0  form1   `}>
              <div className="col-12 page-title-container py-3 px-3 m-0 mb-5 ">
                <div className=" col-lg-6 col-12 m-0 fs-3 fw-bold">
                  Book Details:
                </div>{" "}
              </div>
              <div className="row m-0 d-flex justify-content-center">
                <div className="col-9  m-0 ">
                  <label htmlFor="" className="col-5 fs-3  my-4 fw-semibold ">
                    Title:
                  </label>
                  <TextField
                    required
                    id="title"
                    
                    className="bg-light"
                    label="Book Title"
                    defaultValue={form.title}
                    onChange={(defaultValue) => {
                      handleChange("title", defaultValue.target.value);
                    }}
                  />
                  {error.title && (
                    <p className="text-sm text-danger px-3 py-1">
                      {error.title}
                    </p>
                  )}
                  <label htmlFor="" className="fs-6  col-5 my-4  fw-semibold">
                    Author Name:
                  </label>
                  <TextField
                    required
                    id="authorName"
                    focused=""
                    className="bg-light"
                    label="Author Name"
                    defaultValue={form.authorName}
                    name="authorName"
                    onChange={(defaultValue) => {
                      handleChange("authorName", defaultValue.target.value);
                    }}
                  />
                  {error.authorName && (
                    <p className=" text-sm text-danger px-3 py-1">
                      {error.authorName}
                    </p>
                  )}
                  <label htmlFor="" className=" fs-3 col-5 my-4 col-3 fw-semibold">
                    Price:
                  </label>
                  <TextField
                    required
                    id="price"
                    className="bg-light"
                    label="Book Price"
                    defaultValue={form.price}
                    name="price"
                    onChange={(defaultValue) => {
                      handleChange("price", defaultValue.target.value);
                    }}
                  />
                  {error.price && (
                    <p className="text-sm text-danger px-3 py-1">
                      {error.price}
                    </p>
                  )}
                  <label htmlFor="" className="col-5 fs-4 my-4 col-3 fw-semibold">
                    Discount:
                  </label>
                  <TextField
                    id="priceDiscount"
                    label="Price Discound"
                    className="bg-light"
                    defaultValue={form.priceDiscount}
                    name="priceDiscount"
                    onChange={(defaultValue) => {
                      handleChange("priceDiscount", defaultValue.target.value);
                    }}
                  />
                  {error.priceDiscount && (
                    <p className="text-sm text-danger px-3 py-1">
                      {error.priceDiscount}
                    </p>
                  )}
                  <label htmlFor="" className="col-5 fs-3 my-4 col-3 fw-semibold">
                    Breif:
                  </label>
                  <TextField
                    required
                    id="description"
                    label="Brief Description"
                    multiline
                    className="bg-light"
                    rows={4}
                    defaultValue={form.description}
                    name="description"
                    onChange={(defaultValue) => {
                      handleChange("description", defaultValue.target.value);
                    }}
                  />
                  {error.description && (
                    <p className="text-sm text-danger px-3 py-1">
                      {error.description}
                    </p>
                  )}
                  <label htmlFor="" className="col-5 fs-5   my-4 col-3 fw-bold">
                    Full Description:
                  </label>
                  <TextField
                    required
                    id="fullDescription"
                    label="Full Description"
                    multiline
                    rows={4}
                    className="bg-light "
                    defaultValue={form.fullDescription}
                    name="fullDescription"
                    onChange={(defaultValue) => {
                      handleChange(
                        "fullDescription",
                        defaultValue.target.value
                      );
                    }}
                  />
                  {error.fullDescription && (
                    <p className="text-sm text-danger px-3 py-1">
                      {error.fullDescription}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-lg-6 col-10 d-flex flex-wrap justify-content-center form1 my-3">
              <div className="col-12 page-title-container py-3 px-3 m-0 mb-5 ">
                <div className=" col-lg-6 col-12 m-0 fs-3 fw-bold">
                  Select Categorries
                </div>{" "}
              </div>{" "}
              {categories.map((item) => (
                <div key={item} className="p-2">
                  {" "}
                  <div
                    variant="extended"
                    size="small"
                    color="inherit"
                    aria-label="add"
                    className="add-btn rounded-pill border-gray border px-2 bg-dark py-1 text-sm text-light"
                    name={item}
                    onClick={handleCategory}
                  >
                    {item}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-lg-6 col-10 d-flex flex-wrap justify-content-center form1 my-3">
              <div className="col-12 page-title-container py-3 px-3 m-0 mb-5 ">
                <div className=" col-lg-6 col-12 m-0 fs-3 fw-bold">
                  Select Image
                </div>{" "}
              </div>
              <div className="p-2">
             
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Button
                    className="bg-secondary"
                    variant="contained"
                    component="label"
                    
                  >
                    Upload
                    <input hidden accept="image/*" multiple type="file" />
                  </Button>
                  <IconButton
                    className="bg-secondary text-white"
                    color="primary"
                    aria-label="upload picture"
                    component="label"

                  >
                    <input hidden accept="image/*" type="file" />
                    <PhotoCamera />
                  </IconButton>
                </Stack>
              </div>
              <div className="col-12 mb-5 row ">
                {" "}
              
                {error.imageCover && (
                  <p className="text-sm text-danger px-3 py-1">
                    {error.imageCover}
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="row d-flex my-3 mb-5 justify-content-center">
            <div className="col-3">
              {error.title == null &&
                error.authorName == null &&
                error.categories == null &&
                error.description == null &&
                error.fullDescription == null &&
                error.imageCover == null &&
                error.price == null &&
                error.priceDiscount == null && (
                  <Button
                    className="bg-dark py-3 mb-5  rounded-pill  add-btn"
                    variant="contained"
                    fullWidth={true}
                    endIcon={<SendIcon />}
                    onClick={handleAdd}
                  >
                    Add Book
                  </Button>
                )}
            </div>
          </div>
        </Box>
      </div>
    </>  );
}
