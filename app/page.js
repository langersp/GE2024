"use client";

import Image from "next/image";
import rawData from "./data/ge2024-v6.json";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Page() {
  return (
    <>
      <section className="landing-section">
        <div className="menu-btn-container">
          <button className="menu-burger transparent">
            <img src="../Menu_Button_White.svg" alt="Menu Burger" />
          </button>
        </div>

        <img
          src="../5654_Type_Logo.svg"
          alt="Logo"
          className="logo-top-right"
        />

        <div className="main-img-container">
          <div className="vid-container">
            <video
              src="../5654_Homepage_Video_Sample.mp4"
              className=""
              muted=""
              loop=""
              autoplay=""
              playsinline=""
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
            <a href="#" className="btn red">
              CALL TO ACTION TITLE
              <br />
              GOES HERE LOREM
            </a>
          </div>
        </div>

        <div className="blog-tiles-container">
          <div className="blog-tiles">
            <div className="blog-tile">
              <div className="blog-img">
                <img src="../Background_Image.jpg" alt="Blog Image" />
              </div>

              <a href="#" className="blog-link"></a>

              <div className="blog-excerpt">
                <p>
                  Lorem ipsum ante aenean amet hac etiam felis non augue
                  suscipit tristique, condimentum dui.
                </p>
              </div>
            </div>

            <div className="blog-tile">
              <div className="blog-img">
                <img src="../Background_Image.jpg" alt="Blog Image" />
              </div>

              <a href="#" className="blog-link"></a>

              <div className="blog-excerpt">
                <p>
                  Lorem ipsum ante aenean amet hac etiam felis non augue
                  suscipit tristique, condimentum dui.
                </p>
              </div>
            </div>

            <div className="blog-tile">
              <div className="blog-img">
                <img src="../Background_Image.jpg" alt="Blog Image" />
              </div>

              <a href="#" className="blog-link"></a>

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
