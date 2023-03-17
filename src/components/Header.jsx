import "../css/bootstrap.min.css";
import "../css/style.css";
import "../css/sb-admin-2.min.css";
const header = () => {
  return (
    <>
      <nav
        class="navbar navbar-light"
        style="background-color:white; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);"
      >
        <h4 style="color:white">Welcome to admin portal</h4>

        <a class="navbar-brand">
          <img
            src="https://image.shutterstock.com/image-vector/male-manager-icon-vector-style-260nw-461340628.jpg"
            width="30"
            height="30"
            alt=""
          />
        </a>
      </nav>
    </>
  );
};
export default header;
