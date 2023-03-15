import {
  mapArray,
  createResource,
  createSignal,
  createEffect,
  createMemo,
  onMount,
} from "solid-js";
import { useNavigate } from "@solidjs/router";
import { createStore, produce } from "solid-js/store";
import toast from "solid-toast";
import "../style/loading.css";
export default function allUsers() {
  const [isLoading, setisLoading] = createSignal(false);
  const navigate = useNavigate();
  const [searchInput, setsearchInput] = createSignal("");
  const [limit, setlimit] = createSignal(40);
  const [skip, setskip] = createSignal(0);
  const [list, setlist] = createStore([]);

  const fetchUser = async () => {
    setisLoading(true);
    return await (
      await fetch(`https://dummyjson.com/users?limit=${limit()}&skip=${skip()}`)
    )
      .json()
      .then((res) => {
        setlist(
          produce((s) => {
            s.push(...res.users);
          })
        );
        setisLoading(false);
        setisAtBottomFlag(false);
      });
  };
  const filteredData = createMemo(() => {
    if (searchInput()) {
      return list.filter((item) => item.username.includes(searchInput()));
    } else {
      return list;
    }
  });
  const [users, { refetch }] = createResource(fetchUser);
  const totalPages = () => 100 - limit();
  function moveToDetails(id) {
    navigate(`/userDetails/${id}`);
  }
  function next() {
    if (skip() >= totalPages()) {
    } else {
      setskip(skip() + limit());
      refetch();
    }
  }
  function previous() {
    if (skip() <= 0) {
      return;
    } else {
      setskip(skip() - limit());
      refetch();
    }
  }
  function isUserAtBottom() {
    const scrollPosition =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    const windowHeight =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight ||
      0;
    const bodyHeight = document.body.offsetHeight || 0;

    return scrollPosition + windowHeight >= bodyHeight;
  }
  const [isAtBottomFlag, setisAtBottomFlag] = createSignal(false);
  // createEffect(()=>{
  window.addEventListener("scroll", function () {
    if (isUserAtBottom() && !isAtBottomFlag()) {
      console.log("hit");
      setisAtBottomFlag(true);
      next();
    }
  });

  return (
    <>
      <div class="input-group">
        <div
          class="form-outline"
          style=" position: absolute;
          right: 1px;
          margin-top: 1%;
          margin-bottom: 1%;
          display:flex;"
        >
          <input
            onInput={(e) => setsearchInput(e.currentTarget.value)}
            type="search"
            id="form1"
            class="form-control"
            placeholder="search user"
          />
          <button
            class="btn btn-primary"
            style={"height: 38px; width: 120px;"}
            onClick={() => navigate("/addUser")}
          >
            Add user
          </button>
        </div>
        <br></br>
      </div>
      <table class="table" id="table" style="margin-top:5%; margin-left:1%;">
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
          <For each={filteredData()}>
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
        {isLoading() == true ? <div class="loader"></div> : null}
      </table>
    </>
  );
}
