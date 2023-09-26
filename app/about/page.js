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
      <section className="about-section content-with-sidebar">
        <div className={`sidebar ${menuState ? 'menu-active' : ''}`}>
          <SideBarHeader handleMenu={handleMenu} />
          <div className="sidebar-main-container">
            <div className="sidebar-main-content">
              <h2>ABOUT OUR GENERAL ELECTION PREDICTOR</h2>

              <div className="links">
                <a href="/blog" className="link">
                  Related Blogs
                </a>
              </div>
            </div>
            <SideBarFooter />
            <div className="open-menu-container">
              <Menu />
              <SideBarMenuFooter />
            </div>
          </div>
        </div>

        <div className="main-content">
          <div className="about-text-container">
            {/* <h4>About our general election centre:</h4> */}

            <p>
              <strong>
                National polls offer an insight into the mood of the public. But
                they can only ever provide a snapshot, not a prediction, about
                what will happen at the General Election.
              </strong>
            </p>
            <p>
              We have created this tool to help you test your own assumptions
              about what might happen at the general election. It is based on
              the latest YouGov polling into how the public say they expect to
              vote in England, Scotland and Wales. It is designed to help you
              understand the likely scenarios should the polls tighten, the role
              tactical voting could play and some of the other factors that will
              influence the final result.
            </p>

            <div className="quote">
              <blockquote>
                &quot;Since 2010, the UK has experienced four different models of government: a coalition government; a government with a small working majority; a minority government; and, since 2019, a government with a strong working majority.<br /><br />


The next general election is now firmly in sight. Current polling suggests Labour are heading to victory - yet the political arithmetic remains extraordinarily difficult for Sir Keir Starmer.<br /><br />


Starmer is likely to be the UK&rsquo;s next Prime Minister &ndash; managing a Labour-led administration. But the evidence suggests the model of government he will preside over &ndash; and the dynamics in parliament &ndash; are harder to determine.&quot;
              </blockquote>

              <span className="author">Ben Thornton - Founding Partner</span>
            </div>
          </div>
          <a href="/predictor" className="round-button">
            VIEW THE NUMBER OF SEATS IN BRITAIN
          </a>
          <div className="about-img-container">
            <img src="../People_Image_2.jpg" alt="About Image" />
          </div>
        </div>
      </section>
    </>
  );
}
