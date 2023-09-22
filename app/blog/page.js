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
        <div className={`sidebar ${menuState ? 'menu-active' : ''}`}>
          <SideBarHeader handleMenu={handleMenu} />
          <div className="sidebar-main-container">
            <div className="sidebar-main-content">
              <h2>RELATED BLOGS</h2>

              <p>
                Lorem ipsum ante aenean amet hac etiam felis non augue suscipit
                tristique, condimentum dui vulputate pretium sapien rutrum
                quisque quam placerat.
              </p>
            </div>
            <SideBarFooter />
            <div className="open-menu-container">
              <Menu />
              <SideBarMenuFooter />
            </div>
          </div>
        </div>

        <div className="main-content">
          <div className="blog-tiles-section">
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
          </div>
        </div>
      </section>
    </>
  );
}
