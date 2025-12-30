import { NavLink } from "react-router-dom";


const NavLinkButton = ({ text, to, className = 'btn btn-primary', onClick }) => {
  return (
    <NavLink to={to} className={className} onClick={onClick}>{text}</NavLink>
  )
}

export default NavLinkButton