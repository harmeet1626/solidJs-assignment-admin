import { createStore } from "solid-js/store";
import { useNavigate } from "@solidjs/router";
import "../style/input.css";
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
    <div style={"padding-left:40px; padding-top:30px"}>
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
            class="my-input"
            style={"width:400px; margin-left: 272px;"}
            onInput={(e) => setproductDetails("title", e.currentTarget.value)}
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
            onInput={(e) => setproductDetails("price", e.currentTarget.value)}
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
            onInput={(e) => setproductDetails("brand", e.currentTarget.value)}
            type="text"
            placeholder="Enter Brand"
            required
          />
          <br></br>

          <label>
            <b>Discount Percentage</b>
          </label>

          <input
            class="my-input"
            type="text"
            style={"width:400px; margin-left: 153px;"}
            onInput={(e) =>
              setproductDetails("discountPercentage", e.currentTarget.value)
            }
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
            onInput={(e) => setproductDetails("stock", e.currentTarget.value)}
            type="Number"
            placeholder="Enter stock"
            required
          />
          <br></br>
          <div style={"display:flex"}>
            <label for="text">
              <b>Description</b>
            </label>

            <textarea
              style={" margin-left: 228px;"}
              onInput={(e) =>
                setproductDetails("description", e.currentTarget.value)
              }
              rows="4"
              cols="50"
              name="comment"
              form="usrform"
            ></textarea>
          </div>

          <hr />
          <p>
            By creating an account you agree to our <a>Terms & Privacy</a>.
          </p>

          <button style={"width: 820px;"} type="submit" class="registerbtn">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};
export default products;
