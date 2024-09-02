import React from "react";
import "./Navbar.css";
import mainLogo from "../../Images/logo_k.png";
import { MenuItem, MenuMenu, Input, Menu, Dropdown,DropdownMenu,DropdownItem } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";


const Navbar = () => {
  return (
    <Menu secondary className="navigation">
      <div className="">
        <a href="/">
          <img src={mainLogo} alt="Logo" />
        </a>
      </div>
      <MenuItem name="home" href="/" />
          <Dropdown className="dropdown" item text='My Wardrobe'>
            <DropdownMenu className="dropdown-menu">
              <DropdownItem>T-Shirts</DropdownItem>
              <DropdownItem>Shirts</DropdownItem>
              <DropdownItem>Shoes</DropdownItem>
              <DropdownItem>Jeans</DropdownItem>
              <DropdownItem>Chinos</DropdownItem>
              <DropdownItem>Watches</DropdownItem>
              <DropdownItem>Glasses</DropdownItem>
              <DropdownItem>Accesories</DropdownItem>
            </DropdownMenu>
          </Dropdown>
      <MenuItem name="Contact Us" href="/ContactUs" />
      <MenuItem name="About Us" href="/AboutUs" />
      <MenuMenu position="right">
        <MenuItem>
          <Input icon="search" placeholder="Search..." color="blue" />
        </MenuItem>
        <MenuItem name="Log In" href="/SignIn" />
        <MenuItem name="Register" href="/SignUp" />
      </MenuMenu>
    </Menu>
  );
};

export default Navbar;
