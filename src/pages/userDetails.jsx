import { createResource, createSignal } from "solid-js";
import { useParams, useNavigate } from "@solidjs/router";
import { createStore } from "solid-js/store";
import toast from "solid-toast";
import { Box, Button, Modal, Typography } from "@suid/material";
import useTheme from "@suid/material/styles/useTheme";
import "../style/input.css";

const userDetails = () => {
  const [open, setOpen] = createSignal(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const theme = useTheme();

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
          <Modal
            open={open()}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 400,
                bgcolor: theme.palette.background.paper,
                border: "2px solid #000",
                boxShadow: "24px",
                p: 4,
              }}
            >
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Are you sure you want to delete user ? <br></br>
                <button class="btn btn-success" onClick={() => deleteUser()}>
                  Yes
                </button>{" "}
                <button class="btn btn-danger" onclick={() => handleClose()}>
                  No
                </button>
              </Typography>
            </Box>
          </Modal>
          <form onSubmit={edit}>
            <div class="container">
              <h1>Update user</h1>
              <div style="display flex">
                <p>Please fill in this form to create an account.</p>
                <div align="right">
                  <button
                    onClick={() => handleOpen()}
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
                value={users()?.bloodGroup}
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
                value={users()?.domain}
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
                value={users()?.eyeColor}
                onInput={(e) =>
                  setuserdetails("eyeColor", e.currentTarget.value)
                }
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
                value={users()?.height}
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
                value={users()?.ip}
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
                value={users()?.macAddress}
                onInput={(e) =>
                  setuserdetails("macAddress", e.currentTarget.value)
                }
                placeholder="macaddress"
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
                placeholder="password"
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
                placeholder="university"
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
                value={users()?.weight}
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
                value={users()?.gender}
                onInput={(e) => setuserdetails("gender", e.currentTarget.value)}
                type="text"
                placeholder="gender"
                required
              />
              <br></br>

              <hr />
              <button
                type="submit"
                style={"width: 100px;"}
                class="btn btn-primary"
              >
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
