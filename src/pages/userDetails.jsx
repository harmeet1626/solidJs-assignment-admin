import { createResource, createSignal } from "solid-js";
import { useParams, useNavigate } from "@solidjs/router";
import { createStore } from "solid-js/store";
import toast from "solid-toast";
import "../style/input.css";

const userDetails = () => {
  const [isLoading, setisLoading] = createSignal(false);
  const navigate = useNavigate();
  const Params = useParams();
  function getId() {
    return { ...Params }.id;
  }
  function deleteUser() {
    setisLoading(true);
    fetch(`https://dummyjson.com/users/${getId()}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((res) => {
        setisLoading(false);
        toast.success("user deleted");
        navigate("/Allusers");
      });
  }
  const fetchUser = async () => {
    setisLoading(true);
    return await (await fetch(`https://dummyjson.com/users/${getId()}`))
      .json()
      .then((res) => {
        setisLoading(false);
        return res;
      });
  };
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
      {isLoading() == true ? (
        <div class="loader"></div>
      ) : (
        <div style={"padding-left:40px; padding-top:30px"}>
          <form onSubmit={edit}>
            <div class="container">
              <h1>Update user</h1>
              <div style="display flex">
                <p>Please fill in this form to create an account.</p>
                <div align="right">
                  <button
                    onClick={() => deleteUser()}
                    type="button"
                    class="btn btn-danger"
                  >
                    Delete user
                  </button>
                </div>
              </div>
              <hr></hr>

              <label for="text">
                <b>Firstname</b>
              </label>
              <input
                class="my-input"
                style={"width:400px; margin-left: 272px;"}
                value={users()?.firstName}
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
                class="my-input"
                style={"width:400px; margin-left: 274px;"}
                value={users()?.lastName}
                onInput={(e) =>
                  setuserdetails("lastName", e.currentTarget.value)
                }
                type="text"
                placeholder="Enter lastname"
                required
              />
              <br></br>

              <label for="email">
                <b>Age</b>
              </label>
              <input
                class="my-input"
                style={"width:400px; margin-left: 319px;"}
                value={users()?.age}
                onInput={(e) => setuserdetails("age", e.currentTarget.value)}
                type="number"
                placeholder="Enter age"
                required
              />
              <br></br>

              <label for="email">
                <b>Email</b>
              </label>
              <input
                class="my-input"
                style={"width:400px; margin-left: 305px;"}
                value={users()?.email}
                onInput={(e) => setuserdetails("email", e.currentTarget.value)}
                type="email"
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
                Update
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};
export default userDetails;
