import { Avatar, Dropdown, Navbar } from "flowbite-react";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const logo = require("../assets/images/logo.png");

function CHeader() {
  const navigate = useNavigate();
  const location = useLocation()
//   console.log(location);
  return (
    <div>
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href="#">
          <img src={logo} className="mr-3 h-6 sm:h-9" alt="E-Commerce Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            E-Commerce
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline={true}
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded={true}
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link active={location.pathname === "/home" ? true : false}>
            <span className="cursor-pointer" onClick={() => navigate("/home")}>
              Home
            </span>
          </Navbar.Link>
          <Navbar.Link active={location.pathname === "/products" ? true : false}>
            <span
              className="cursor-pointer"
              onClick={() => navigate("/products")}
            >
              Products
            </span>
          </Navbar.Link>
          <Navbar.Link className="cursor-not-allowed">Services</Navbar.Link>
          <Navbar.Link className="cursor-not-allowed">Pricing</Navbar.Link>
          <Navbar.Link className="cursor-not-allowed">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default React.memo(CHeader);
