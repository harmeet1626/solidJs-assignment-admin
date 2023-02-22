import "../style/form.css";
import { createResource } from "solid-js";
const addUser = () => {
  return (
    <>
      {/* <form> */}
      <div class="container">
        <h1>Add New User</h1>
        <p>Please fill in this form to create an account.</p>
        <hr></hr>

        <label for="email">
          <b>Firstname</b>
        </label>
        <input type="text" placeholder="Enter firstname" required />

        <label for="email">
          <b>Lastname</b>
        </label>
        <input type="text" placeholder="Enter lastname" required />

        <label for="email">
          <b>Age</b>
        </label>
        <input type="text" placeholder="Enter age" required />

        <label for="email">
          <b>Email</b>
        </label>
        <input
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

        <button class="registerbtn">Add</button>
      </div>

      {/* </form> */}
    </>
  );
};
export default addUser;
