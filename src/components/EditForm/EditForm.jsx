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
import { useState } from "react";
import { editBook } from "../../store/reducer/booksSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { SafetyCheck } from "@mui/icons-material";
import { useParams } from "react-router-dom";
export default function EditForm() {
  const { id } = useParams();

  // let [check, setCheck] = useState(-2);
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

  // useEffect(() => {
  //   setCheck(check + 2);
  //   console.log(error);
  // }, [error]);

  let handleAdd = () => {
    // console.log(check);
    // if (check == 0) console.log(form);
    dispatch(
      editBook({
        id: id,
        title: form.title,
        price: form.price,
        author: {
          name: form.authorName,
        },
        priceDiscount: form.priceDiscount,
        fullDescription: form.fullDescription,
        description: form.description,
        imageCover: form.imageCover,
        category: form.categories,
        ratingAvg: 0,
        numberOfSeller: 0,
        qty: 1,
      })
    );
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
        "MuiButtonBase-root MuiFab-root MuiFab-extended MuiFab-sizeSmall MuiFab-primary MuiFab-root MuiFab-extended MuiFab-sizeSmall MuiFab-primary css-133uy8j-MuiButtonBase-root-MuiFab-root rounded-pill text-white border border-0  bg-dark";
      let category = [...form.categories, e.target.name];
      console.log(category);
      setForm({ ...form, categories: category });
    } else {
      e.target.className =
        "MuiButtonBase-root MuiFab-root MuiFab-extended MuiFab-sizeSmall MuiFab-primary MuiFab-root MuiFab-extended MuiFab-sizeSmall MuiFab-primary css-133uy8j-MuiButtonBase-root-MuiFab-root bordr  border-0 py-1  shadow rounded-pill ";
    }
    console.log(e.target.className);
  };
  return (
    <>
      <div className="row ">
        <PageMainTitle title="New Book" />
      </div>
      <div className="row d-flex justify-content-center ">
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
                  Book Details
                </div>{" "}
              </div>
              <div className="row m-0 d-flex justify-content-center">
                <div className="col-6 m-0 ">
                  <TextField
                    required
                    id="title"
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
                  <TextField
                    required
                    id="authorName"
                    focused=""
                    label="Author Name"
                    defaultValue={form.authorName}
                    name="authorName"
                    onChange={(defaultValue) => {
                      handleChange("authorName", defaultValue.target.value);
                    }}
                  />
                  {error.authorName && (
                    <p className="text-sm text-danger px-3 py-1">
                      {error.authorName}
                    </p>
                  )}
                  <TextField
                    required
                    id="price"
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
                  <TextField
                    id="priceDiscount"
                    label="Price Discound"
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
                  <TextField
                    required
                    id="description"
                    label="Brief Description"
                    multiline
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
                  <TextField
                    required
                    id="fullDescription"
                    label="Full Description"
                    multiline
                    rows={4}
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
                  <Fab
                    variant="extended"
                    size="small"
                    color="inherit"
                    aria-label="add"
                    name={item}
                    onClick={handleCategory}
                  >
                    <NavigationIcon sx={{ mr: 1 }} />
                    {item}
                  </Fab>
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
              <div className="col-6 mb-5 row ">
                {" "}
                <TextField
                  required
                  id="imageCover"
                  label="Book Cover Image"
                  defaultValue={form.imageCover}
                  name="imageCover"
                  onChange={(defaultValue) => {
                    handleChange("imageCover", defaultValue.target.value);
                  }}
                />
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
                    className="bg-dark py-3 mb-5 text-white rounded-pill  add-btn"
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
    </>
  );
}
