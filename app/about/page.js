"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

import SideBarHeader from "../components/SideBarHeader";
import SideBarMainContent from "../components/SideBarMainContent";
import SideBarFooter from "../components/SideBarFooter";
import VoteResult from "../components/VoteResult";


export default function Page() {

  return (
    <>
      <section className="about-section content-with-sidebar">
        {/*Sidebar Section*/}
        <div className="sidebar">
          <SideBarHeader />
          <div className="sidebar-main-container">
            <div className="sidebar-main-content">

              <h2>ABOUT OUR GENERAL ELECTION PREDICTOR</h2>

              <p>Lorem ipsum ante aenean amet hac etiam felis non augue suscipit tristique, condimentum dui vulputate pretium sapien rutrum quisque quam placerat.</p>

              <div className="links">

                <a href="#" className="link">Related Blogs</a>

              </div>

            </div>
            <SideBarFooter />
          </div>
        </div>

        <div className="main-content">

          <div className="about-text-container">

            <h4>About our general election centre:</h4>


            <p>National polls offer an insight into the mood of the public. But they can only ever provide a snapshot, not a prediction, about what will happen at the General Election.</p>
            <p>We have created this tool to help you test your own assumptions about what might happen at the general election. It is based on the latest YouGov polling into how the public say they expect to vote in England, Scotland and Wales. It is designed to help you understand the likely scenarios should the polls tighten, the role tactical voting could play and some of the other factors that will influence the final result.</p>



            <div className="quote">

              <blockquote>"Lorem ipsum ante aenean amet hac etiam felis non augue suscipit tristique, condimentum dui vulputate pretium sapien rutrum quisque quam placerat. Dictum massa himenaeos nulla lacinia dictum velit metus erat."</blockquote>

              <span className="author">Ben Thornton - Founding Partner</span>

            </div>

          </div>
          <a href="#" className="round-button">VIEW THE NUMBER OF SEATS IN BRITAIN</a>
          <div className="about-img-container">

            <img src="../People_Image_2.jpg" alt="About Image" />

          </div>
        </div>

      </section>
    </>
  );
}
