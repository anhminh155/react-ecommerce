import { Modal, Navbar } from "flowbite-react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { userLogin } from "../redux/controller/auth.slice";
import CFormLogin from "./CFormLogin";

const logo = require("../assets/images/logo.png");

function CHeader() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showLogin, setShowLogin] = useState(false);
  const dispatch = useDispatch();

  const renderModelLogin = () => {
    const onSubmit = (data) => {
      dispatch(userLogin(data))
    };
    return (
      <Modal show={true} onClose={() => setShowLogin(false)}>
        <Modal.Header>Login</Modal.Header>
        <Modal.Body>
          <CFormLogin onSubmit={onSubmit} />
        </Modal.Body>
      </Modal>
    );
  };

  return (
    <div>
      {showLogin && renderModelLogin()}
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href="#">
          <img src={logo} className="mr-3 h-6 sm:h-9" alt="E-Commerce Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            E-Commerce
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2 w-40">
          <span
            // onClick={() => navigate("login")}
            onClick={() => {
              setShowLogin(true);
            }}
            className="cursor-pointer hover:text-sky-800"
          >
            Login
          </span>
          <span className="px-1">/</span>
          <span className="cursor-pointer hover:text-sky-800">Register</span>
          {/* <Dropdown
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
          <Navbar.Toggle /> */}
        </div>
        <Navbar.Collapse>
          <Navbar.Link active={location.pathname === "/home" ? true : false}>
            <span className="cursor-pointer" onClick={() => navigate("/home")}>
              Home
            </span>
          </Navbar.Link>
          <Navbar.Link
            active={location.pathname === "/products" ? true : false}
          >
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
