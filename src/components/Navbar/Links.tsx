import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { RootState } from "~/Context";
import { deleteRole } from "~/Context/Reducers/Role";
import { deleteToken } from "~/Context/Reducers/Token";
import { ROLE_ADMIN, ROLE_USER } from "~/lib/config";

const Links = () => {
  const location = useLocation();
  const token = useSelector((state: RootState) => state.token.value);
  const role = useSelector((state: RootState) => state.role.value);
  const dispatch = useDispatch();
  const handleSignOut = () => {
    dispatch(deleteToken());
    dispatch(deleteRole());
  }
  if (token && role === ROLE_ADMIN) {
    return (
      <ul >
        <li><Link to="/" className={location.pathname == "/" ? "active" : ""} >Home</Link></li>
        <li><Link to="/admin/invoice" className={location.pathname == "/admin/invoice" ? "active" : ""} >Invoices</Link></li>
        <li><Link to="/admin/services" className={location.pathname.includes("/admin/services") ? "active" : ""} >Services</Link></li>
        <li><Link to="/admin/quote" className={location.pathname == "/admin/quote" ? "active" : ""}>Quotes</Link></li>
        <li><Link to="/admin/register" className={location.pathname == "/admin/quote" ? "active" : ""}>Create User</Link></li>
        <li><a onClick={handleSignOut} href="#" >Sign out</a></li>
      </ul>
    )
  } else if (token && role === ROLE_USER) {
    return (
      <ul>
        <li><Link to="/" className={location.pathname == "/" ? "active" : ""} >Home</Link></li>
        <li><Link to="/services" className={location.pathname == "/services" ? "active" : ""}>Services</Link></li>
        <li><Link to="/user/quote" className={location.pathname == "/admin/quote" ? "active" : ""}>Quotes</Link></li>
        <li><a onClick={handleSignOut} href="#" >Sign out</a></li>
      </ul>
    )
  } else {
    return (
      <ul>
        <li><Link to="/" className={location.pathname == "/" ? "active" : ""} >Home</Link></li>
        <li><Link to="/services" className={location.pathname == "/services" ? "active" : ""}>Services</Link></li>
        <li><Link to="/about" className={location.pathname == "/about" ? "active" : ""}>About us</Link></li>
        <li><Link to="/login" className={location.pathname == "/login" ? "active" : ""}>Login</Link></li>
        <li><Link to="/register" className={location.pathname == "/register" ? "active" : ""}>Register</Link></li>

      </ul>
    )
  }
}

export default Links;