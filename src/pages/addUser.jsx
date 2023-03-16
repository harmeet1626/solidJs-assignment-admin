import "../style/form.css";
import "../style/input.css";
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
    birthDate: null,
    bloodGroup: null,
    domain: null,
    eyeColor: null,
    height: null,
    ip: null,
    macAddress: null,
    password: null,
    phone: null,
    university: null,
    username: null,
    weight: null,
    gender: null,
  });
  function handleSubmit() {
    event.preventDefault();
    fetch("https://dummyjson.com/users/add", {
      method: "POST",
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
      .then(toast.success("User added!"))
      .then(navigate("/Allusers"));
  }
  return (
    <>
      <div style={"padding-left:40px; padding-top:30px"}>
        <form onSubmit={handleSubmit}>
          <div class="container">
            <h1>Add New User</h1>
            <p>Please fill in this form to create an account.</p>
            <hr></hr>
            <label>
              <b>Firstname</b>
            </label>
            <input
              class="my-input"
              style={"width:400px; margin-left: 272px;"}
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
              onInput={(e) => setuserdetails("lastName", e.currentTarget.value)}
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
              onInput={(e) => setuserdetails("email", e.currentTarget.value)}
              placeholder="email"
              required
            />
            <br></br>
            <label>
              <b>BloodGroup</b>
            </label>
            <input
              class="my-input"
              style={"width:400px; margin-left: 263px;"}
              onInput={(e) =>
                setuserdetails("bloodGroup", e.currentTarget.value)
              }
              placeholder="bloodgroup"
              required
            />
            <br></br>
            <label>
              <b>Domain</b>
            </label>
            <input
              class="my-input"
              style={"width:400px; margin-left: 299px;"}
              onInput={(e) => setuserdetails("domain", e.currentTarget.value)}
              placeholder="domain"
              required
            />
            <br></br>
            <label>
              <b>EyeColor</b>
            </label>
            <input
              class="my-input"
              style={"width:400px; margin-left: 287px;"}
              onInput={(e) => setuserdetails("eyeColor", e.currentTarget.value)}
              type="text"
              placeholder="eyecolor"
              required
            />
            <br></br>
            <label>
              <b>Height</b>
            </label>
            <input
              class="my-input"
              style={"width:400px; margin-left: 305px;"}
              onInput={(e) => setuserdetails("height", e.currentTarget.value)}
              type="number"
              placeholder="height"
              required
            />
            <br></br>
            <label>
              <b>ip</b>
            </label>
            <input
              class="my-input"
              style={"width:400px; margin-left: 339px;"}
              onInput={(e) => setuserdetails("ip", e.currentTarget.value)}
              placeholder="ip"
              required
            />
            <br></br>
            <label>
              <b>MacAddress</b>
            </label>
            <input
              class="my-input"
              style={"width:400px; margin-left: 262px;"}
              onInput={(e) =>
                setuserdetails("macAddress", e.currentTarget.value)
              }
              placeholder="macAddress"
              required
            />
            <br></br>
            <label>
              <b>Password</b>
            </label>
            <input
              class="my-input"
              style={"width:400px; margin-left: 285px;"}
              onInput={(e) => setuserdetails("password", e.currentTarget.value)}
              type="password"
              placeholder=""
              required
            />
            <br></br>
            <label>
              <b>Phone</b>
            </label>
            <input
              class="my-input"
              style={"width:400px; margin-left: 308px;"}
              onInput={(e) => setuserdetails("phone", e.currentTarget.value)}
              type="text"
              placeholder="phone"
              required
            />
            <br></br>
            <label>
              <b>BirthDate</b>
            </label>
            <input
              class="my-input"
              style={"width:400px; margin-left: 278px;"}
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
              onInput={(e) =>
                setuserdetails("university", e.currentTarget.value)
              }
              placeholder="university"
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
              onInput={(e) => setuserdetails("username", e.currentTarget.value)}
              type="text"
              placeholder="username"
              required
            />
            <br></br>
            <label>
              <b>Weight</b>
            </label>
            <input
              class="my-input"
              style={"width:400px; margin-left: 308px;"}
              onInput={(e) => setuserdetails("weight", e.currentTarget.value)}
              type="number"
              placeholder="weight"
              required
            />
            <br></br>
            <label>
              <b>Gender</b>
            </label>
            <input
              class="my-input"
              style={"width:400px; margin-left: 305px;"}
              onInput={(e) => setuserdetails("gender", e.currentTarget.value)}
              type="text"
              placeholder="gender"
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
