import { mapArray, createResource, createSignal, createEffect, onMount } from "solid-js";
import { useNavigate } from "@solidjs/router";
import { createStore, produce } from "solid-js/store";
import toast from "solid-toast";
export default function allUsers() {
  const navigate = useNavigate();
  const [searchInput, setsearchInput] = createSignal("");
  const [limit, setlimit] = createSignal(40);
  const [skip, setskip] = createSignal(0);
  const [list, setlist] = createStore([])

  const fetchUser = async (search) => {
    if (searchInput()) {
      return await (
        await fetch(`https://dummyjson.com/users/search?q=${search}`)
      ).json().then(res => {
        setlist([...res.users])
      })
    } else {
      return await (
        await fetch(
          `https://dummyjson.com/users?limit=${limit()}&skip=${skip()}`
        )
      ).json().then(res => {
        setlist(produce(s => {
          s.push(...res.users)
        }))
      })
    }
  };
  const [users, { refetch }] = createResource(searchInput, fetchUser);
  const totalPages = () => users()?.total - limit();
  function moveToDetails(id) {
    navigate(`/userDetails/${id}`);
  }
  function next() {
    if (skip() >= totalPages()) {
      toast.error("No more records");
    } else {
      setskip(skip() + limit());
      refetch();
      // window.scrollTo(50, 50);
      //   document.getElementById('table').scrollIntoView({
      //     behavior: 'auto',
      //     block: 'center',
      //     inline: 'center'
      // });
    }
  }
  function previous() {
    if (skip() <= 0) {
      toast.error("No more records");
    } else {
      setskip(skip() - limit());
      refetch();
    }
  }

  window.onscroll = function () {
    var d = document.documentElement;
    var offset = d.scrollTop + window.innerHeight;
    var height = d.offsetHeight;
    if (offset >= height) {
      console.log('At the bottom');
      next()
    }
  };
  // function test() {
  //   console.log(list)
  // }

  return (
    <>
    {/* <button onClick={() => test()}>test</button> */}
      <div class="input-group">
        <div
          class="form-outline"
          style=" position: absolute;
          right: 1px;
          margin-top: 1%;
          margin-bottom: 1%;"
        >
          <input
            onInput={(e) => setsearchInput(e.currentTarget.value)}
            type="search"
            id="form1"
            class="form-control"
            placeholder="search user"
          />
          <button class="btn btn-primary" onClick={() => navigate('/addUser')}>Add user</button>
        </div>
        <br></br>
      </div>
      <table class="table" id="table" style="margin-top:5%;">
        <thead>
          <tr style="color:#ff8100;">
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
          <For each={list}>
            {(user, i) => (
              <tr
                onClick={() => moveToDetails(user.id)}
                style="color: #4761FF;; cursor: pointer;"
              >
                <td>{user.id}</td>
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
      {/* <ul class="pagination">
        <li class="page-item">
          <a
            style="cursor:pointer"
            class="page-link"
            onClick={() => previous()}
          >
            Previous
          </a>
        </li>
        <li class="page-item">
          <a style="cursor:pointer" class="page-link" onClick={() => next()}>
            Next
          </a>
        </li>
      </ul> */}
    </>
  );
}
