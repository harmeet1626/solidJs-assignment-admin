import { createSignal, createResource, For } from "solid-js";
import { Routes, Route, useNavigate, A, useLocation } from "@solidjs/router";
import toast from "solid-toast";
const allProducts = () => {
  const navigate = useNavigate();
  const [limit, setlimit] = createSignal(11);
  const [skip, setskip] = createSignal(0);

  const [isLoading, setisLoading] = createSignal(false);
  function next() {
    if (skip() >= totalPages()) {
      toast.error("No more records");
    } else {
      setskip(skip() + limit());
      refetch();
    }
  }
  function previous() {
    if (skip() <= 0) {
      toast.error("No more records");
    } else {
      setskip(skip() - limit());
      refetch();
    }
  }
  const getProducts = async (search) => {
    if (searchInput()) {
      setisLoading(true);
      return (await fetch(`https://dummyjson.com/products/search?q=${search}`))
        .json()
        .then((res) => {
          setisLoading(false);
          return res;
        });
    } else {
      setisLoading(true);
      return (
        await fetch(
          `https://dummyjson.com/products/search?q=${search}&limit=${limit()}&skip=${skip()}`
        )
      )
        .json()
        .then((res) => {
          setisLoading(false);
          return res;
        });
    }
  };
  const [searchInput, setsearchInput] = createSignal("");
  const [Products, { mutate, refetch }] = createResource(
    searchInput,
    getProducts
  );
  const totalPages = () => Products()?.total - limit();
  function moveToDetails(id) {
    navigate(`/productDetails/${id}`);
  }

  return (
    <>
      <div class="input-group">
        <div
          class="form-outline"
          style=" position: absolute;
          right: 1px;
          margin-top: 1%;          
          margin-bottom: 1%;
          display:flex"
        >
          <input
            onInput={(e) => setsearchInput(e.currentTarget.value)}
            type="search"
            id="form1"
            class="form-control"
            placeholder="search product"
          />
          <button
            class="btn btn-primary"
            style={"height: 38px; width: 155px;"}
            onClick={() => navigate("/addProduct")}
          >
            Add Product
          </button>
        </div>
        <br></br>
      </div>
      {isLoading() == true ? (
        <div class="loader"></div>
      ) : (
        <div class="text-center container py-1">
          <h2 class="my-2 mt-3 mb-1"></h2>
          <section class="intro" style={"height: 100%;"}>
            <div class="bg-image h-100" style="background-color: #f5f7fa;">
              <div class="mask d-flex align-items-center h-100">
                <div class="container">
                  <div class="row justify-content-center">
                    <div class="col-12">
                      <div class="card" style={"border-radius: .5rem;"}>
                        <div class="card-body p-0">
                          <div
                            class="table-responsive table-scroll"
                            data-mdb-perfect-scrollbar="true"
                            style="position: relative; height: 700px border-radius: .5rem; font-size: 1.25rem;"
                          >
                            <table class="table table-striped mb-0">
                              <thead style="background-color: #002d72;">
                                <tr>
                                  <th
                                    style={
                                      "color: #fff; text-overflow: ellipsis; white-space: nowrap;"
                                    }
                                    scope="col"
                                  >
                                    Thumbnail
                                  </th>
                                  <th
                                    style={
                                      "color: #fff; text-overflow: ellipsis; white-space: nowrap;"
                                    }
                                    scope="col"
                                  >
                                    id
                                  </th>
                                  <th
                                    style={
                                      "color: #fff; text-overflow: ellipsis; white-space: nowrap;"
                                    }
                                    scope="col"
                                  >
                                    Brand
                                  </th>
                                  <th
                                    style={
                                      "color: #fff; text-overflow: ellipsis; white-space: nowrap;"
                                    }
                                    scope="col"
                                  >
                                    category
                                  </th>
                                  <th
                                    style={
                                      "color: #fff; text-overflow: ellipsis; white-space: nowrap;"
                                    }
                                    scope="col"
                                  >
                                    Description
                                  </th>
                                  <th
                                    style={
                                      "color: #fff; text-overflow: ellipsis; white-space: nowrap;"
                                    }
                                    scope="col"
                                  >
                                    Discount Percentage
                                  </th>
                                  <th
                                    style={
                                      "color: #fff; text-overflow: ellipsis; white-space: nowrap;"
                                    }
                                    scope="col"
                                  >
                                    Price
                                  </th>
                                  <th
                                    style={
                                      "color: #fff; text-overflow: ellipsis; white-space: nowrap;"
                                    }
                                    scope="col"
                                  >
                                    Rating
                                  </th>
                                  <th
                                    style={
                                      "color: #fff; text-overflow: ellipsis; white-space: nowrap;"
                                    }
                                    scope="col"
                                  >
                                    Stock
                                  </th>
                                  <th
                                    style={
                                      "color: #fff; text-overflow: ellipsis; white-space: nowrap;"
                                    }
                                    scope="col"
                                  >
                                    Title
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <For each={Products()?.products}>
                                  {(Product, i) => (
                                    <tr
                                      onClick={() => moveToDetails(Product.id)}
                                      style="cursor: pointer;"
                                    >
                                      <td>
                                        <img
                                          style={"height:40px; width:40px"}
                                          src={Product.thumbnail}
                                        />
                                      </td>
                                      <td
                                        style={
                                          "text-overflow: ellipsis; white-space: nowrap;"
                                        }
                                      >
                                        {Product.id}
                                      </td>
                                      <td
                                        style={
                                          "text-overflow: ellipsis; white-space: nowrap;"
                                        }
                                      >
                                        {Product.brand}
                                      </td>
                                      <td
                                        style={
                                          "text-overflow: ellipsis; white-space: nowrap;"
                                        }
                                      >
                                        {Product.category}
                                      </td>
                                      <td
                                        style={
                                          "text-overflow: ellipsis; white-space: nowrap;"
                                        }
                                      >
                                        {Product.description}
                                      </td>
                                      <td
                                        style={
                                          "text-overflow: ellipsis; white-space: nowrap;"
                                        }
                                      >
                                        {Product.discountPercentage}
                                      </td>
                                      <td
                                        style={
                                          "text-overflow: ellipsis; white-space: nowrap;"
                                        }
                                      >
                                        {Product.price}
                                      </td>
                                      <td
                                        style={
                                          "text-overflow: ellipsis; white-space: nowrap;"
                                        }
                                      >
                                        {Product.rating}
                                      </td>
                                      <td
                                        style={
                                          "text-overflow: ellipsis; white-space: nowrap;"
                                        }
                                      >
                                        {Product.stock}
                                      </td>
                                      <td
                                        style={
                                          "text-overflow: ellipsis; white-space: nowrap;"
                                        }
                                      >
                                        {Product.title}
                                      </td>
                                    </tr>
                                  )}
                                </For>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div style={"display:flex; justify-content:center;"}>
            <ul class="pagination">
              <li class="page-item">
                <a
                  style="cursor:pointer"
                  class="page-link"
                  onClick={() => previous()}
                >
                  Previous
                </a>
              </li>
              <li class="page-item">
                <a
                  style="cursor:pointer"
                  class="page-link"
                  onClick={() => next()}
                >
                  Next
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};
export default allProducts;
