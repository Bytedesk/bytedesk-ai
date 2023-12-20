import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/layout">Home</Link>
          </li>
          <li>
            <Link to="/?wid=201812200005351&type=wg">Chat</Link>
          </li>
          <li>
            <Link to="/layout/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/layout/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
