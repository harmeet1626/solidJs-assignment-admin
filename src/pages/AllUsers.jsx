import { mapArray, createResource, createSignal, createEffect } from "solid-js";
import { useNavigate } from "@solidjs/router";
export default function allUsers() {
  const navigate = useNavigate()
  const [searchInput, setsearchInput] = createSignal("");

  const fetchUser = async (search) =>
    await (
      await fetch(`https://dummyjson.com/users/search?q=${search}`)
    ).json();
  const [users] = createResource(searchInput, fetchUser);
  function moveToDetails(id){
    console.log("test",id)
    navigate(`/userDetails/${id}`)
  }

  return (
    <>
      <div class="input-group">
        <div class="form-outline" style="display:flex;">
          <input
            onInput={(e) => setsearchInput(e.currentTarget.value)}
            type="search"
            id="form1"
            class="form-control"
            placeholder="search user"
          />
        </div>
        <br></br>
      </div>
      <table class="table">
        <thead>
          <tr style="#f00;">
            <th>Id</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Username</th>
            <th>BirthDate</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
            <th>Ip address</th>
          </tr>
        </thead>
        <tbody>
          <For each={users()?.users}>
            {(user, i) => (
              <tr onClick={()=>moveToDetails(user.id)} style="color: blue; cursor: pointer;">
                <td >{user.id}</td>
                <td>{user.age}</td>
                <td>{user.gender}</td>
                <td>{user.username}</td>
                <td>{user.birthDate}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.ip}</td>
              </tr>
            )}
          </For>
        </tbody>
      </table>
    </>
  );
}
