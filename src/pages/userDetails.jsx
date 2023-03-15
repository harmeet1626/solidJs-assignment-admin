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
    birthDate: users()?.birthDate,
    bloodGroup: users()?.bloodGroup,
    domain: users()?.domain,
    eyeColor: users()?.eyeColor,
    height: users()?.height,
    ip: users()?.ip,
    macAddress: users()?.macAddress,
    password: users()?.password,
    phone: users()?.phone,
    university: users()?.university,
    username: users()?.username,
    weight: users()?.weight,
    gender: users()?.gender,
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
          birthDate: userDetails.birthDate,
          bloodGroup: userDetails.bloodGroup,
          domain: userDetails.domain,
          eyeColor: userDetails.eyeColor,
          height: userDetails.height,
          ip: userDetails.ip,
          macAddress: userDetails.macAddress,
          password: userDetails.password,
          phone: userDetails.phone,
          university: userDetails.university,
          username: userDetails.username,
          weight: userDetails.weight,
          gender: userDetails.gender,
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

              <label>
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

              <label>
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

              <label>
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
                style={"width:400px; margin-left: 309px;"}
                value={users()?.email}
                onInput={(e) => setuserdetails("email", e.currentTarget.value)}
                required
              />
              <br></br>

              <label>
                <b>BloodGroup</b>
              </label>
              <input
                class="my-input"
                style={"width:400px; margin-left: 263px;"}
                value={users()?.bloodGroup}
                onInput={(e) =>
                  setuserdetails("bloodGroup", e.currentTarget.value)
                }
                required
              />
              <br></br>
              <label>
                <b>Domain</b>
              </label>
              <input
                class="my-input"
                style={"width:400px; margin-left: 299px;"}
                value={users()?.domain}
                onInput={(e) => setuserdetails("domain", e.currentTarget.value)}
                required
              />
              <br></br>
              <label>
                <b>EyeColor</b>
              </label>
              <input
                class="my-input"
                style={"width:400px; margin-left: 287px;"}
                value={users()?.eyeColor}
                onInput={(e) =>
                  setuserdetails("eyeColor", e.currentTarget.value)
                }
                type="text"
                required
              />
              <br></br>
              <label>
                <b>Height</b>
              </label>
              <input
                class="my-input"
                style={"width:400px; margin-left: 305px;"}
                value={users()?.height}
                onInput={(e) => setuserdetails("height", e.currentTarget.value)}
                type="number"
                required
              />
              <br></br>
              <label>
                <b>ip</b>
              </label>
              <input
                class="my-input"
                style={"width:400px; margin-left: 339px;"}
                value={users()?.ip}
                onInput={(e) => setuserdetails("ip", e.currentTarget.value)}
                required
              />
              <br></br>
              <label>
                <b>MacAddress</b>
              </label>
              <input
                class="my-input"
                style={"width:400px; margin-left: 262px;"}
                value={users()?.macAddress}
                onInput={(e) =>
                  setuserdetails("macAddress", e.currentTarget.value)
                }
                required
              />
              <br></br>
              <label>
                <b>Password</b>
              </label>
              <input
                class="my-input"
                style={"width:400px; margin-left: 285px;"}
                value={users()?.password}
                onInput={(e) =>
                  setuserdetails("password", e.currentTarget.value)
                }
                type="password"
                required
              />
              <br></br>
              <label>
                <b>Phone</b>
              </label>
              <input
                class="my-input"
                style={"width:400px; margin-left: 308px;"}
                value={users()?.phone}
                onInput={(e) => setuserdetails("phone", e.currentTarget.value)}
                type="text"
                required
              />
              <br></br>
              <label>
                <b>BirthDate</b>
              </label>
              <input
                class="my-input"
                style={"width:400px; margin-left: 278px;"}
                value={users()?.birthDate}
                onInput={(e) =>
                  setuserdetails("birthDate", e.currentTarget.value)
                }
                placeholder="yyyy-mm-dd"
                required
              />
              <br></br>
              <label>
                <b>University</b>
              </label>
              <input
                class="my-input"
                style={"width:400px; margin-left: 282px;"}
                value={users()?.university}
                onInput={(e) =>
                  setuserdetails("university", e.currentTarget.value)
                }
                type="text"
                required
              />
              <br></br>
              <label>
                <b>Username</b>
              </label>
              <input
                class="my-input"
                style={"width:400px; margin-left: 284px;"}
                value={users()?.username}
                onInput={(e) =>
                  setuserdetails("username", e.currentTarget.value)
                }
                type="text"
                required
              />
              <br></br>
              <label>
                <b>Weight</b>
              </label>
              <input
                class="my-input"
                style={"width:400px; margin-left: 308px;"}
                value={users()?.weight}
                onInput={(e) => setuserdetails("weight", e.currentTarget.value)}
                type="number"
                required
              />
              <br></br>
              <label>
                <b>Gender</b>
              </label>
              <input
                class="my-input"
                style={"width:400px; margin-left: 305px;"}
                value={users()?.gender}
                onInput={(e) => setuserdetails("gender", e.currentTarget.value)}
                type="text"
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
