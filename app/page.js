"use client";

import Image from "next/image";
import rawData from "./data/ge2024-v6.json";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Menu from "./components/Menu";
import SideBarMenuFooter from "./components/SideBarMenuFooter";

export default function Page() {
  const [menuState, setMenuState] = useState(false);

  const handleMenu = () => {
    setMenuState(!menuState);
  };

  return (
    <>
      <section className="landing-section">
        <div
          className={`sidebar landing-page ${menuState ? "menu-active" : ""}`}
        >
          <div className="menu-btn-container">
            <button className="menu-burger transparent" onClick={handleMenu}>
              <div className="menu-img activate-menu">
                <img
                  src="./Menu_Button_White.svg"
                  alt="Menu Burger"
                  className="menu-burger state1"
                />

                <img
                  src="./Menu_Button_2.svg"
                  alt="Menu Burger"
                  className="menu-burger state2"
                />
              </div>

              <div className="menu-img deactivate-menu">
                <img
                  src="./Menu_Close_Button_State_1.svg"
                  alt="Menu Close"
                  className="menu-close state1"
                />

                <img
                  src="./Menu_Close_Button_State_2.svg"
                  alt="Menu Close"
                  className="menu-close state2"
                />
              </div>
            </button>
          </div>

          <div className="header-title">
            <h3>5654 ELECTION CENTRE</h3>
          </div>
          <div className="sidebar-main-container">
            <div className="open-menu-container">
              <Menu />
              <SideBarMenuFooter />
            </div>
          </div>
        </div>
        <img
          src="../5654_Type_Logo.svg"
          alt="Logo"
          className="logo-top-right"
        />

        <div className="header-section mobile-only landing-page">
          <div className="sidebar-header">
            <button className="menu-burger transparent" onClick={handleMenu}>
              <div className="menu-img activate-menu">
                <img
                  src="./Menu_Button_White.svg"
                  alt="Menu Burger"
                  className="menu-burger state1"
                />

                <img
                  src="./Menu_Button_2.svg"
                  alt="Menu Burger"
                  className="menu-burger state2"
                />
              </div>

              <div className="menu-img deactivate-menu">
                <img
                  src="./Menu_Close_Button_State_1.svg"
                  alt="Menu Close"
                  className="menu-close state1"
                />

                <img
                  src="./Menu_Close_Button_State_2.svg"
                  alt="Menu Close"
                  className="menu-close state2"
                />
              </div>
            </button>
          </div>
        </div>

        <div className="main-img-container">
          <div className="vid-container">
            <video
              src="../5654_Homepage_Video_Sample.mp4"
              className=""
              muted={false}
              loop={true}
              autoPlay={true}
              playsInline={true}
            ></video>

            <div className="overlay"></div>
          </div>
          <div className="logo">
            <img src="../Header_Logo.svg" alt="Logo" />
          </div>

          <div className="main-heading">
            <h1>
              THE ELECTION
              <br />
              FORECAST
            </h1>
          </div>

          <div className="landing-btn">
            <a href="/predictor" className="btn red">
              Make Your Prediction
            </a>
          </div>
        </div>

        <div className="blog-tiles-container">
          <div className="blog-tiles">
            <div className="blog-tile">
              <div className="blog-img">
                <img src="../blog1.jpeg" alt="Blog Image" />
              </div>

              <a
                href="https://www.5654.co.uk/our-perspective/is-a-labour-majority-inevitable"
                target="_blank"
                className="blog-link"
              ></a>

              <div className="blog-excerpt">
                <p>
                  Lorem ipsum ante aenean amet hac etiam felis non augue
                  suscipit tristique, condimentum dui.
                </p>
              </div>
            </div>

            <div className="blog-tile">
              <div className="blog-img">
                <img src="../blog2.jpeg" alt="Blog Image" />
              </div>

              <a
                href="https://www.5654.co.uk/our-perspective/the-switchers-and-the-undecideds"
                target="_blank"
                className="blog-link"
              ></a>

              <div className="blog-excerpt">
                <p>
                  Lorem ipsum ante aenean amet hac etiam felis non augue
                  suscipit tristique, condimentum dui.
                </p>
              </div>
            </div>

            <div className="blog-tile">
              <div className="blog-img">
                <img src="../blog3.jpeg" alt="Blog Image" />
              </div>

              <a
                href="https://www.5654.co.uk/our-perspective/think-tanks-that-matter"
                target="_blank"
                className="blog-link"
              ></a>

              <div className="blog-excerpt">
                <p>
                  Lorem ipsum ante aenean amet hac etiam felis non augue
                  suscipit tristique, condimentum dui.
                </p>
              </div>
            </div>
          </div>
          <div className="text-container">
            <span>
              A Product Of <strong>5654 & Company</strong>
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
