import "../style/form.css";
import { createResource } from "solid-js";
import { useNavigate } from "@solidjs/router";
import { createStore } from "solid-js/store";
import toast, { Toaster } from "solid-toast";

const addUser = () => {
  const navigate = useNavigate();
  const [userDetails, setuserdetails] = createStore({
    firstName: null,
    lastName: null,
    age: null,
    email: null,
  });
  function handleSubmit() {
    event.preventDefault();
    if (
      userDetails.firstName &&
      userDetails.lastName &&
      userDetails.age &&
      userDetails.email
    ) {
      fetch("https://dummyjson.com/users/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: userDetails.firstName,
          lastName: userDetails.lastName,
          age: userDetails.age,
          email: userDetails.email,
        }),
      })
        .then((res) => res.json())
        .then(toast.success("User added!"))
        .then(navigate("/Allusers"));
    } else {
      toast.error("please fill details properly");
    }
  }
  return (
    <>
      <div style={"padding-left:40px; padding-top:30px"}>
        <form onSubmit={handleSubmit}>
          <div class="container">
            <h1>Add New User</h1>
            <p>Please fill in this form to create an account.</p>
            <hr></hr>

            <label for="text">
              <b>Firstname</b>
            </label>
            <input
              style={"width:400px; margin-left: 272px;"}
              onInput={(e) =>
                setuserdetails("firstName", e.currentTarget.value)
              }
              type="text"
              placeholder="Enter firstname"
              required
            />
            <br></br>

            <label for="text">
              <b>Lastname</b>
            </label>
            <input
              style={"width:400px; margin-left: 274px;"}
              onInput={(e) => setuserdetails("lastName", e.currentTarget.value)}
              type="text"
              placeholder="Enter lastname"
              required
            />
            <br></br>

            <label for="email">
              <b>Age</b>
            </label>
            <input
              style={"width:400px; margin-left: 319px;"}
              onInput={(e) => setuserdetails("age", e.currentTarget.value)}
              type="text"
              placeholder="Enter age"
              required
            />
            <br></br>

            <label for="email">
              <b>Email</b>
            </label>
            <input
              style={"width:400px; margin-left: 305px;"}
              onInput={(e) => setuserdetails("email", e.currentTarget.value)}
              type="text"
              placeholder="Enter Email"
              name="email"
              id="email"
              required
            />
            <br></br>

            <hr />
            <p>
              By creating an account you agree to our <a>Terms & Privacy</a>.
            </p>

            <button style={"width: 530px;"} type="submit" class="registerbtn">
              Add
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default addUser;
