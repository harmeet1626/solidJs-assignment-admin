import { createStore } from "solid-js/store";
import { useNavigate } from "@solidjs/router";
import toast from "solid-toast";
const products = () => {
  const navigate = useNavigate();
  const [productDetails, setproductDetails] = createStore({
    title: null,
    description: null,
    price: null,
    discountPercentage: null,
    brand: null,
    category: null,
    stock: null,
  });
  function submit() {
    event.preventDefault();
    try {
      fetch("https://dummyjson.com/products/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: productDetails.title,
          description: productDetails.description,
          price: productDetails.price,
          discountPercentage: productDetails.discountPercentage,
          brand: productDetails.brand,
          category: productDetails.category,
          stock: productDetails.stock,
        }),
      })
        .then((res) => res.json())
        .then(toast.success("product added"))
        .then(navigate("/allProducts"));
    } catch (e) {
      toast.error("error occured");
    }
  }
  return (
    <div>
      <form onsubmit={submit}>
        <div class="container">
          <h1>Add Product</h1>
          <div style="display flex">
            <p>Please fill in this form to Add a Product.</p>
          </div>
          <hr></hr>

          <label for="text">
            <b>Title</b>
          </label>
          <input
            onInput={(e) => setproductDetails("title", e.currentTarget.value)}
            type="text"
            placeholder="Enter Title"
            required
          />

          <label for="price">
            <b>Category</b>
          </label>
          <input
            onInput={(e) =>
              setproductDetails("category", e.currentTarget.value)
            }
            type="text"
            placeholder="Enter Category"
            required
          />
          <label for="price">
            <b>Price</b>
          </label>
          <input
            onInput={(e) => setproductDetails("price", e.currentTarget.value)}
            type="text"
            placeholder="Enter Price"
            required
          />
          <label for="price">
            <b>Brand</b>
          </label>
          <input
            onInput={(e) => setproductDetails("brand", e.currentTarget.value)}
            type="text"
            placeholder="Enter Brand"
            required
          />

          <label for="email">
            <b>Discount Percentage</b>
          </label>
          <input
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
            onInput={(e) =>
              setproductDetails("description", e.currentTarget.value)
            }
            rows="4"
            cols="50"
            name="comment"
            form="usrform"
          >
            {/* {Product()?.description} */}
          </textarea>
          <br></br>
          <hr />
          <p>
            By creating an account you agree to our <a>Terms & Privacy</a>.
          </p>

          <button type="submit" class="registerbtn">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};
export default products;
