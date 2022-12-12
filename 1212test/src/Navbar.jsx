import { NavLink } from "react-router-dom";

const Navbar = () => {
  const activeStyle = {color: "green", fontWeight:"bold"};
  return (  
    <div>
      <NavLink to='/' style={({isActive})=>isActive? activeStyle : undefined}>Home{" "}</NavLink>
      <NavLink to='/about' style={({isActive})=>isActive? activeStyle : undefined}>About{" "}</NavLink>
      <NavLink to='/product' style={({isActive})=>isActive? activeStyle : undefined}>Product</NavLink>
    </div>
  );
}

export default Navbar;