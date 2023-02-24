import { useParams, useNavigate } from "@solidjs/router";
import { createSignal, For, createResource } from "solid-js";
import { createStore, produce } from "solid-js/store";
import toast, { Toaster } from "solid-toast";
const productDetails = () => {
  const Params = useParams();
  function getId() {
    return { ...Params }.id;
  }
  const navigate = useNavigate();
  const getProducts = async () => {
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
      fetch(`https://dummyjson.com/products/${getId()}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
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
    <form onsubmit={submit}>
      <div class="container">
        <br></br>
        <h1>Update Product</h1>
        <div align="right">
          <button
            onClick={() => DeleteProduct()}
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
          value={Product()?.title}
          onInput={(e) => setproductDetails("title", e.currentTarget.value)}
          type="text"
          placeholder="Enter Title"
          required
        />

        <label for="price">
          <b>Category</b>
        </label>
        <input
          value={Product()?.category}
          onInput={(e) => setproductDetails("category", e.currentTarget.value)}
          type="text"
          placeholder="Enter Category"
          required
        />
        <label for="price">
          <b>Price</b>
        </label>
        <input
          value={Product()?.price}
          onInput={(e) => setproductDetails("age", e.currentTarget.value)}
          type="text"
          placeholder="Enter Price"
          required
        />
        <label for="price">
          <b>Brand</b>
        </label>
        <input
          value={Product()?.brand}
          onInput={(e) => setproductDetails("brand", e.currentTarget.value)}
          type="text"
          placeholder="Enter Brand"
          required
        />

        <label for="email">
          <b>DiscountPercentage</b>
        </label>
        <input
          value={`${Product()?.discountPercentage}%`}
          onInput={(e) =>
            setproductDetails("discountPercentage", e.currentTarget.value)
          }
          type="text"
          placeholder="Enter Discount Percentage"
          required
        />
        <label>
          <b>Stock</b>
        </label>
        <input
          value={`${Product()?.stock}`}
          onInput={(e) => setproductDetails("stock", e.currentTarget.value)}
          type="text"
          placeholder="Enter stock"
          required
        />
        <label for="text">
          <b>Description</b>
        </label>
        <br></br>
        <textarea
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
        <p>
          By creating an account you agree to our <a>Terms & Privacy</a>.
        </p>

        <button type="submit" class="registerbtn">
          Update
        </button>
      </div>
    </form>
  );
};
export default productDetails;
