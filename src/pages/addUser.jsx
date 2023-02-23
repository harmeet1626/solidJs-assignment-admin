import "../style/form.css";
import { createResource } from "solid-js";
import { useNavigate } from "@solidjs/router";
import { createStore } from "solid-js/store";
import toast, { Toaster } from "solid-toast";

const addUser = () => {
  const navigate = useNavigate()
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
        .then(navigate('/Allusers'));
    } else {
      toast.error("please fill details properly");
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div class="container">
          <h1>Add New User</h1>
          <p>Please fill in this form to create an account.</p>
          <hr></hr>

          <label for="text">
            <b>Firstname</b>
          </label>
          <input
            onInput={(e) => setuserdetails("firstName", e.currentTarget.value)}
            type="text"
            placeholder="Enter firstname"
            required
          />

          <label for="text">
            <b>Lastname</b>
          </label>
          <input
            onInput={(e) => setuserdetails("lastName", e.currentTarget.value)}
            type="text"
            placeholder="Enter lastname"
            required
          />

          <label for="email">
            <b>Age</b>
          </label>
          <input
            onInput={(e) => setuserdetails("age", e.currentTarget.value)}
            type="text"
            placeholder="Enter age"
            required
          />

          <label for="email">
            <b>Email</b>
          </label>
          <input
            onInput={(e) => setuserdetails("email", e.currentTarget.value)}
            type="text"
            placeholder="Enter Email"
            name="email"
            id="email"
            required
          />

          <hr />
          <p>
            By creating an account you agree to our <a>Terms & Privacy</a>.
          </p>

          <button type="submit" class="registerbtn">
            Add
          </button>
        </div>
      </form>
    </>
  );
};
export default addUser;
