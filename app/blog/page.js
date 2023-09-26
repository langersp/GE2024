"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

import SideBarHeader from "../components/SideBarHeader";
import SideBarMainContent from "../components/SideBarMainContent";
import SideBarFooter from "../components/SideBarFooter";
import Menu from "../components/Menu";
import SideBarMenuFooter from "../components/SideBarMenuFooter";

export default function Page() {
  const [menuState, setMenuState] = useState(false);

  const handleMenu = () => {
    setMenuState(!menuState);
  };
  return (
    <>
      <section className="blog-section content-with-sidebar">
        <div className={`sidebar ${menuState ? "menu-active" : ""}`}>
          <SideBarHeader handleMenu={handleMenu} />
          <div className="sidebar-main-container">
            <div className="sidebar-main-content">
              <h2>RELATED BLOGS</h2>

              {/* <p>
                Lorem ipsum ante aenean amet hac etiam felis non augue suscipit
                tristique, condimentum dui vulputate pretium sapien rutrum
                quisque quam placerat.
              </p> */}
            </div>
            <SideBarFooter />
            <div className="open-menu-container">
              <Menu />
              <SideBarMenuFooter />
            </div>
          </div>
        </div>

        <div className="header-section mobile-only">
          <SideBarHeader handleMenu={handleMenu} />
        </div>

        <div className="main-content">
          <div className="blog-tiles-section">
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
                  <h3>Is a Labour Majority Inevitable?</h3>
                  <p>
                    At exactly 10pm on General Election night 2019, the BBC, ITV
                    and Sky published their shared Exit poll revealing that
                    Boris Johnson...
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
                  <h3>The Switchers and the Undecideds</h3>
                  <p>
                    With the national polls indicating a Labour resurgence, 5654
                    & Company wanted to understand the extent to which voters
                    are switching...
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
                  <h3>
                    What Businesses Should be Doing Now: Think Tanks That Matter
                  </h3>
                  <p>
                    They are the policy engine for the main parties. There is
                    often a cross-transfer of people - policy strategists may
                    leave think-tanks...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-section mobile-only">
          <SideBarFooter />
        </div>
      </section>
    </>
  );
}
