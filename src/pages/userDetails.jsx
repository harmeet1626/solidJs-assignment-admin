import { createResource } from "solid-js";
import { useParams, useNavigate } from "@solidjs/router";
import { createStore } from "solid-js/store";
import toast from "solid-toast";

const userDetails = () => {
  const navigate = useNavigate();
  const Params = useParams();
  function getId() {
    return { ...Params }.id;
  }
  function deleteUser() {
    fetch(`https://dummyjson.com/users/${getId()}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((res) => {
        toast.success("user deleted");
        navigate("/Allusers");
      });
  }
  const fetchUser = async () =>
    await (await fetch(`https://dummyjson.com/users/${getId()}`)).json();
  const [users] = createResource(fetchUser);

  const [userDetails, setuserdetails] = createStore({
    firstName: users()?.firstName,
    lastName: users()?.lastName,
    age: users()?.age,
    email: users()?.email,
  });
  function edit() {
    event.preventDefault();
    try {
      fetch(`https://dummyjson.com/users/${getId()}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: userDetails.firstName,
          lastName: userDetails.lastName,
          age: userDetails.age,
          email: userDetails.email,
        }),
      })
        .then((res) => res.json())
        .then(toast.success("User updated!"))
        .then(navigate("/Allusers"));
    } catch (e) {
      toast.error("Error occured!");
    }
  }
  return (
    <>
      <form onSubmit={edit}>
        <div class="container">
          <h1>Update user</h1>
          <div style="display flex">
            <p>Please fill in this form to create an account.</p>

            <button
              onClick={() => deleteUser()}
              type="button"
              class="btn btn-danger"
            >
              Delete user
            </button>
          </div>
          <hr></hr>

          <label for="text">
            <b>Firstname</b>
          </label>
          <input
            value={users()?.firstName}
            onInput={(e) => setuserdetails("firstName", e.currentTarget.value)}
            type="text"
            placeholder="Enter firstname"
            required
          />

          <label for="text">
            <b>Lastname</b>
          </label>
          <input
            value={users()?.lastName}
            onInput={(e) => setuserdetails("lastName", e.currentTarget.value)}
            type="text"
            placeholder="Enter lastname"
            required
          />

          <label for="email">
            <b>Age</b>
          </label>
          <input
            value={users()?.age}
            onInput={(e) => setuserdetails("age", e.currentTarget.value)}
            type="text"
            placeholder="Enter age"
            required
          />

          <label for="email">
            <b>Email</b>
          </label>
          <input
            value={users()?.email}
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
            Update
          </button>
        </div>
      </form>
    </>
  );
};
export default userDetails;
