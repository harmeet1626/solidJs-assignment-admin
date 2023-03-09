import { mapArray, createResource, createSignal, createEffect } from "solid-js";
import { useNavigate } from "@solidjs/router";
import toast from "solid-toast";
export default function allUsers() {
  const navigate = useNavigate();
  const [searchInput, setsearchInput] = createSignal("");
  const [limit, setlimit] = createSignal(20);
  const [skip, setskip] = createSignal(0);

  const fetchUser = async (search) => {
    if (searchInput()) {
      return await (
        await fetch(`https://dummyjson.com/users/search?q=${search}`)
      ).json();
    } else {
      return await (
        await fetch(
          `https://dummyjson.com/users?limit=${limit()}&skip=${skip()}`
        )
      ).json();
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

  // function isAtPageBottom() {
  //   return document.documentElement.scrollTop + window.innerHeight >= document.documentElement.scrollHeight;
  // }
  // function handlePageBottom() {
  //   console.log('You have reached the bottom of the page!');
  //   next()
  //   scrollToTop()
  // }
  // function scrollToTop() {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: 'smooth'
  //   });
  // }

  // createEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // });

  // const handleScroll = () => {
  //   if (isAtPageBottom()) {
  //     handlePageBottom();
  //   }
  // };


  return (
    <>
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
      <table class="table" style="margin-top:5%;">
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
          <For each={users()?.users}>
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
      <ul class="pagination">
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
      </ul>
    </>
  );
}
