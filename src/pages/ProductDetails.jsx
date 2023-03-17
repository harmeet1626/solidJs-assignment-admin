import { useParams, useNavigate } from "@solidjs/router";
import { createSignal, For, createResource } from "solid-js";
import { createStore, produce } from "solid-js/store";
import toast from "solid-toast";
import "../style/input.css";
import { Box, Button, Modal, Typography } from "@suid/material";
import useTheme from "@suid/material/styles/useTheme";
import "../style/input.css";

const productDetails = () => {
  const [open, setOpen] = createSignal(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const theme = useTheme();

  const [isLoading, setisLoading] = createSignal(false);
  const Params = useParams();
  function getId() {
    return { ...Params }.id;
  }
  const navigate = useNavigate();
  const getProducts = async () => {
    setisLoading(true);
    return await (await fetch(`https://dummyjson.com/products/${getId()}`))
      .json()
      .then((res) => {
        setproductDetails(
          produce((data) => {
            (data.id = res.id),
              (data.title = res.title),
              (data.description = res.description),
              (data.price = res.price),
              (data.discountPercentage = res.discountPercentage),
              (data.brand = res.brand),
              (data.category = res.category),
              (data.thumbnail = res.thumbnail),
              (data.stock = res.stock);
          })
        );
        setisLoading(false);
        return res;
      });
  };

  const [Product] = createResource(getProducts);
  const [productDetails, setproductDetails] = createStore({
    id: null,
    title: null,
    description: null,
    price: null,
    discountPercentage: null,
    brand: null,
    category: null,
    thumbnail: null,
    stock: null,
  });

  function DeleteProduct() {
    try {
      setisLoading(true);
      fetch(`https://dummyjson.com/products/${getId()}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then(setisLoading(false))
        .then(toast.success("Product Deleted"))
        .then(navigate("/allProducts"));
    } catch (e) {
      toast.error("error occured");
    }
  }
  function submit() {
    event.preventDefault();
    try {
      fetch(`https://dummyjson.com/products/${getId()}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: productDetails.title,
          description: productDetails.description,
          price: productDetails.price,
          discountPercentage: productDetails.discountPercentage,
          brand: productDetails.brand,
          category: productDetails.category,
          thumbnail: productDetails.thumbnail,
          stock: productDetails.stock,
        }),
      })
        .then((res) => res.json())
        .then((res) => toast.success("Product Updated"))
        .then((res) => navigate("/allProducts"));
    } catch (e) {
      toast.error("error occured");
    }
  }
  return (
    <div>
      {isLoading() == true ? (
        <div class="loader"></div>
      ) : (
        <div style={"padding-left:40px; padding-top:30px"}>
          <Modal
            open={open()}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 400,
                bgcolor: theme.palette.background.paper,
                border: "2px solid #000",
                boxShadow: "24px",
                p: 4,
              }}
            >
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Are you sure you want to delete user ? <br></br>
                <button class="btn btn-success" onClick={() => DeleteProduct()}>
                  Yes
                </button>{" "}
                <button class="btn btn-danger" onclick={() => handleClose()}>
                  No
                </button>
              </Typography>
            </Box>
          </Modal>
          <form onsubmit={submit}>
            <div class="container">
              <br></br>
              <h1>Update Product</h1>
              <div align="right">
                <button
                  onClick={() => handleOpen()}
                  type="button"
                  class="btn btn-danger"
                >
                  Delete Product
                </button>
              </div>
              <div style="display flex">
                <p>Please fill in this form to create an account.</p>
              </div>
              <hr></hr>

              <label for="text">
                <b>Title</b>
              </label>
              <input
                class="my-input"
                style={"width:400px; margin-left: 272px;"}
                value={Product()?.title}
                onInput={(e) =>
                  setproductDetails("title", e.currentTarget.value)
                }
                type="text"
                placeholder="Enter Title"
                required
              />
              <br></br>

              <label for="price">
                <b>Category</b>
              </label>
              <input
                class="my-input"
                style={"width:400px; margin-left: 237px;"}
                value={Product()?.category}
                onInput={(e) =>
                  setproductDetails("category", e.currentTarget.value)
                }
                type="text"
                placeholder="Enter Category"
                required
              />
              <br></br>
              <label for="price">
                <b>Price</b>
              </label>
              <input
                class="my-input"
                style={"width:400px; margin-left: 269px;"}
                value={Product()?.price}
                onInput={(e) => setproductDetails("age", e.currentTarget.value)}
                type="number"
                placeholder="Enter Price"
                required
              />
              <br></br>
              <label for="price">
                <b>Brand</b>
              </label>
              <input
                class="my-input"
                style={"width:400px; margin-left: 262px;"}
                value={Product()?.brand}
                onInput={(e) =>
                  setproductDetails("brand", e.currentTarget.value)
                }
                type="text"
                placeholder="Enter Brand"
                required
              />
              <br></br>

              <label for="email">
                <b>DiscountPercentage</b>
              </label>
              <input
                class="my-input"
                style={"width:400px; margin-left: 153px;"}
                value={`${Product()?.discountPercentage}%`}
                onInput={(e) =>
                  setproductDetails("discountPercentage", e.currentTarget.value)
                }
                type="text"
                placeholder="Enter Discount Percentage"
                required
              />
              <br></br>
              <label>
                <b>Stock</b>
              </label>
              <input
                class="my-input"
                style={"width:400px; margin-left: 266px;"}
                value={`${Product()?.stock}`}
                onInput={(e) =>
                  setproductDetails("stock", e.currentTarget.value)
                }
                type="number"
                placeholder="Enter stock"
                required
              />
              <br></br>
              <div style={"display:flex"}></div>
              <label for="text">
                <b>Description</b>
              </label>
              <br></br>
              <textarea
                style={" margin-left: 303px;"}
                value={Product()?.description}
                onInput={(e) =>
                  setproductDetails("description", e.currentTarget.value)
                }
                rows="4"
                cols="50"
                name="comment"
                form="usrform"
              >
                {Product()?.description}
              </textarea>
              <br></br>
              <hr />
              <button
                type="submit"
                style={"width: 100px;"}
                class="btn btn-primary"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
export default productDetails;
