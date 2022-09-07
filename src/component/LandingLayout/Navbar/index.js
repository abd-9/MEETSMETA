import React, { useEffect, useState } from "react";
// import Web3 from "web3";
import xHistory from "../../../utilities/history";
import ButtonGradient from "../../Shared/Buttons";
import XSvg from "../../Shared/icons/XSvg";

const Navbar = ({ className }) => {
  useEffect(() => {
    const button = document.querySelector("#menu-button");
    const menu = document.querySelector("#menu");

    button.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });
  }, []);

  const [account, setAccount] = useState(); // state variable to set account.

  // useEffect(() => {
  //   async function load() {
  //     const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
  //     const accounts = await web3.eth.requestAccounts();

  //     setAccount(accounts[0]);
  //   }
  //   load();
  // }, []);
  return (
    <nav
      id="landing-layout-nav"
      className={
        "flex  flex-wrap items-end justify-between w-full py-4 md:py-0 text-lg " +
        className
      }
    >
      <div>
        <a className="logo" href="#">
          <XSvg name={"white-logo"}></XSvg>{" "}
        </a>
      </div>
      <div id="menu-button">
        <XSvg color="white" name={"nav-menu"}></XSvg>{" "}
      </div>
      <div
        className="hidden w-full md:flex md:items-center md:w-auto"
        id="menu"
      >
        <ul className="">
          <li>
            <a className="" href="#">
              Contact Us
            </a>
          </li>
          <li>
            <a className="" href="#">
              Support
            </a>
          </li>
          <li>
            <a className="" href="#">
              My Account
            </a>
          </li>
          <li>
            <a className="" href="#">
              Sign In
            </a>
          </li>
          <li>
            <ButtonGradient
              className={" mr-4"}
              onClick={() => xHistory.push("/wallet")}
            >
              {/* Your account is: {account} */}
              Connect wallet
            </ButtonGradient>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
