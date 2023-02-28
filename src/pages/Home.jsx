import { createSignal, onMount, createResource } from "solid-js";
import { Routes, Route, useNavigate, A, useLocation } from "@solidjs/router";

const Home = () => {
  return (
    <>
      <div class="pagetitle">
        <br></br>
        <h1>Dashboard</h1>
      </div>
      <br></br>

      <section class="section dashboard">
        <div class="row">
          <div class="col-lg-8">
            <div class="row">
              <div class="col-xxl-4 col-md-6">
                <div class="card info-card sales-card">
                  <div class="filter">
                    <a class="icon" href="#" data-bs-toggle="dropdown">
                      <i class="bi bi-three-dots"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                      <li class="dropdown-header text-start">
                        <h6>Filter</h6>
                      </li>

                      <li>
                        <a class="dropdown-item" href="#">
                          Today
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          This Month
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          This Year
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div class="card-body">
                    <h5 class="card-title">
                      Sales <span>| Today</span>
                    </h5>

                    <div class="d-flex align-items-center">
                      <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                        <i class="bi bi-cart"></i>
                      </div>
                      <div class="ps-3">
                        <h6>145</h6>
                        <span class="text-success small pt-1 fw-bold">
                          12%
                        </span>{" "}
                        <span class="text-muted small pt-2 ps-1">increase</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xxl-4 col-md-6">
                <div class="card info-card revenue-card">
                  <div class="filter">
                    <a class="icon" href="#" data-bs-toggle="dropdown">
                      <i class="bi bi-three-dots"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                      <li class="dropdown-header text-start">
                        <h6>Filter</h6>
                      </li>

                      <li>
                        <a class="dropdown-item" href="#">
                          Today
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          This Month
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          This Year
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div class="card-body">
                    <h5 class="card-title">
                      Revenue <span>| This Month</span>
                    </h5>

                    <div class="d-flex align-items-center">
                      <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                        <i class="bi bi-currency-dollar"></i>
                      </div>
                      <div class="ps-3">
                        <h6>$3,264</h6>
                        <span class="text-success small pt-1 fw-bold">
                          8%
                        </span>{" "}
                        <span class="text-muted small pt-2 ps-1">increase</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xxl-4 col-xl-12">
                <div class="card info-card customers-card">
                  <div class="filter">
                    <a class="icon" href="#" data-bs-toggle="dropdown">
                      <i class="bi bi-three-dots"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                      <li class="dropdown-header text-start">
                        <h6>Filter</h6>
                      </li>

                      <li>
                        <a class="dropdown-item" href="#">
                          Today
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          This Month
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          This Year
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div class="card-body">
                    <h5 class="card-title">
                      Customers <span>| This Year</span>
                    </h5>

                    <div class="d-flex align-items-center">
                      <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                        <i class="bi bi-people"></i>
                      </div>
                      <div class="ps-3">
                        <h6>1244</h6>
                        <span class="text-danger small pt-1 fw-bold">
                          10%
                        </span>{" "}
                        <span class="text-muted small pt-2 ps-1">decrease</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12">
                <div class="card">
                  <div class="filter">
                    <a class="icon" href="#" data-bs-toggle="dropdown">
                      <i class="bi bi-three-dots"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                      <li class="dropdown-header text-start">
                        <h6>Filter</h6>
                      </li>

                      <li>
                        <a class="dropdown-item" href="#">
                          Today
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          This Month
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          This Year
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-12">
                <div class="card recent-sales overflow-auto">
                  <div class="filter">
                    <a class="icon" href="#" data-bs-toggle="dropdown">
                      <i class="bi bi-three-dots"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                      <li class="dropdown-header text-start">
                        <h6>Filter</h6>
                      </li>

                      <li>
                        <a class="dropdown-item" href="#">
                          Today
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          This Month
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          This Year
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div class="card-body">
                    <h5 class="card-title">
                      Recent Sales <span>| Today</span>
                    </h5>

                    <table class="table table-borderless datatable">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Customer</th>
                          <th scope="col">Product</th>
                          <th scope="col">Price</th>
                          <th scope="col">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">
                            <a href="#">#2457</a>
                          </th>
                          <td>Brandon Jacob</td>
                          <td>
                            <a href="#" class="text-primary">
                              Iphone x
                            </a>
                          </td>
                          <td>$64</td>
                          <td>
                            <span class="badge bg-success">Approved</span>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <a href="#">#2147</a>
                          </th>
                          <td>Bridie Kessler</td>
                          <td>
                            <a href="#" class="text-primary">
                              Samsung Galaxy Book
                            </a>
                          </td>
                          <td>$47</td>
                          <td>
                            <span class="badge bg-warning">Pending</span>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <a href="#">#2049</a>
                          </th>
                          <td>Ashleigh Langosh</td>
                          <td>
                            <a href="#" class="text-primary">
                              Macbook
                            </a>
                          </td>
                          <td>$147</td>
                          <td>
                            <span class="badge bg-success">Approved</span>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <a href="#">#2644</a>
                          </th>
                          <td>Angus Grady</td>
                          <td>
                            <a href="#" class="text-primar">
                              Samsung Universe 9
                            </a>
                          </td>
                          <td>$67</td>
                          <td>
                            <span class="badge bg-danger">Rejected</span>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <a href="#">#2644</a>
                          </th>
                          <td>Raheem Lehner</td>
                          <td>
                            <a href="#" class="text-primary">
                              Flying Wooden Bird
                            </a>
                          </td>
                          <td>$165</td>
                          <td>
                            <span class="badge bg-success">Approved</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div class="col-12">
                <div class="card top-selling overflow-auto">
                  <div class="filter">
                    <a class="icon" href="#" data-bs-toggle="dropdown">
                      <i class="bi bi-three-dots"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                      <li class="dropdown-header text-start">
                        <h6>Filter</h6>
                      </li>

                      <li>
                        <a class="dropdown-item" href="#">
                          Today
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          This Month
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          This Year
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div class="card-body pb-0">
                    <h5 class="card-title">
                      Top Selling <span>| Today</span>
                    </h5>

                    <table class="table table-borderless">
                      <thead>
                        <tr>
                          <th scope="col">Preview</th>
                          <th scope="col">Product</th>
                          <th scope="col">Price</th>
                          <th scope="col">Sold</th>
                          <th scope="col">Revenue</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">
                            <a href="#">
                              <img src="assets/img/product-1.jpg" alt="" />
                            </a>
                          </th>
                          <td>
                            <a href="#" class="text-primary fw-bold">
                              3 DOOR PORTABLE
                            </a>
                          </td>
                          <td>$64</td>
                          <td class="fw-bold">124</td>
                          <td>$5,828</td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <a href="#">
                              <img src="assets/img/product-2.jpg" alt="" />
                            </a>
                          </th>
                          <td>
                            <a href="#" class="text-primary fw-bold">
                              Microsoft Surface Laptop 4
                            </a>
                          </td>
                          <td>$46</td>
                          <td class="fw-bold">98</td>
                          <td>$4,508</td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <a href="#">
                              <img src="assets/img/product-3.jpg" alt="" />
                            </a>
                          </th>
                          <td>
                            <a href="#" class="text-primary fw-bold">
                              - Daal Masoor 500 grams
                            </a>
                          </td>
                          <td>$59</td>
                          <td class="fw-bold">74</td>
                          <td>$4,366</td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <a href="#">
                              <img src="assets/img/product-4.jpg" alt="" />
                            </a>
                          </th>
                          <td>
                            <a href="#" class="text-primary fw-bold">
                              formal offices shoes
                            </a>
                          </td>
                          <td>$32</td>
                          <td class="fw-bold">63</td>
                          <td>$2,016</td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <a href="#">
                              <img src="assets/img/product-5.jpg" alt="" />
                            </a>
                          </th>
                          <td>
                            <a href="#" class="text-primary fw-bold">
                              MacBook Pro
                            </a>
                          </td>
                          <td>$79</td>
                          <td class="fw-bold">41</td>
                          <td>$3,239</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card">
              <div class="filter">
                <a class="icon" href="#" data-bs-toggle="dropdown">
                  <i class="bi bi-three-dots"></i>
                </a>
                <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                  <li class="dropdown-header text-start">
                    <h6>Filter</h6>
                  </li>

                  <li>
                    <a class="dropdown-item" href="#">
                      Today
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      This Month
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      This Year
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="card">
              <div class="filter">
                <a class="icon" href="#" data-bs-toggle="dropdown">
                  <i class="bi bi-three-dots"></i>
                </a>
                <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                  <li class="dropdown-header text-start">
                    <h6>Filter</h6>
                  </li>

                  <li>
                    <a class="dropdown-item" href="#">
                      Today
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      This Month
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      This Year
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="card">
              <div class="filter">
                <a class="icon" href="#" data-bs-toggle="dropdown">
                  <i class="bi bi-three-dots"></i>
                </a>
                <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                  <li class="dropdown-header text-start">
                    <h6>Filter</h6>
                  </li>

                  <li>
                    <a class="dropdown-item" href="#">
                      Today
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      This Month
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      This Year
                    </a>
                  </li>
                </ul>
              </div>

              <div class="card">
                <div class="filter">
                  <a class="icon" href="#" data-bs-toggle="dropdown">
                    <i class="bi bi-three-dots"></i>
                  </a>
                  <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li class="dropdown-header text-start">
                      <h6>Filter</h6>
                    </li>

                    <li>
                      <a class="dropdown-item" href="#">
                        Today
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        This Month
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        This Year
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="card-body pb-0">
                  <h5 class="card-title">
                    News &amp; Updates <span>| Today</span>
                  </h5>

                  <div class="news">
                    <div class="post-item clearfix">
                      <img src="assets/img/news-1.jpg" alt="" />
                      <h4>
                        <a href="#">
                          Can Twitter Predict the Future? Pentagon Says Maybe
                        </a>
                      </h4>
                      <p>Here is something you must know as of today...</p>
                    </div>

                    <div class="post-item clearfix">
                      <img src="assets/img/news-2.jpg" alt="" />
                      <h4>
                        <a href="#">
                          Is Virtual Reality Technology Ever Going To Hit The
                          Mainstream?
                        </a>
                      </h4>
                      <p>
                        In October 2021, Facebook’s parent company rebranded as
                        Meta to differentiate its focus on the next phase of
                        social media. The company purchased the VR headset
                        maker, Oculus back in 2014 to begin its pursuit of
                        making virtual reality mainstream. And nearly a decade
                        later, CNBC reports Meta lost $13.7 billion in 2022 on
                        its metaverse division, Reality Labs.
                      </p>
                    </div>

                    <div class="post-item clearfix">
                      <img src="assets/img/news-3.jpg" alt="" />
                      <h4>
                        <a href="#">Will Stagflation Return In 2023?</a>
                      </h4>
                      <p>
                        Simply put, stagflation is a contraction of stagnation
                        and inflation. In other words, stagflation occurs during
                        simultaneous periods of high inflation, slowing economic
                        growth, and rising unemployment. And in 2023, experts
                        are baffled by the current state of the American
                        economy....
                      </p>
                    </div>

                    <div class="post-item clearfix">
                      <img src="assets/img/news-4.jpg" alt="" />
                      <h4>
                        <a href="#">
                          Apple Hit With Fourth Data Privacy Lawsuit Since
                          November
                        </a>
                      </h4>
                      <p>
                        Tommy Mysk and Talal Haj Bakry, two software developers,
                        found several iPhone apps tracked data after turning off
                        iPhone Analytics. Apple explicitly writes in the
                        settings that turning off iPhone Analytics will disable
                        your device from tracking your data. However, it seems
                        that is far from the case. ...
                      </p>
                    </div>

                    <div class="post-item clearfix">
                      <img src="assets/img/news-5.jpg" alt="" />
                      <h4>
                        <a href="#">
                          North Korean Hackers Stole $1.2 Billion In Crypto
                        </a>
                      </h4>
                      <p>
                        The United Nations imposed heavy sanctions on North
                        Korea throughout 2016 and 2017, severely damaging the
                        country’s economy. And the Coronavirus pandemic only
                        made matters worse. According to NPR, the NIS says
                        state-sponsored North Korean hackers stole about $626
                        million in 2022 alone. Additionally, over $78 million
                        came from South Korea. ...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* </main> */}
    </>
  );
};
export default Home;
