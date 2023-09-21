"use client";

import Image from "next/image";

import SideBarHeader from "../components/SideBarHeader";
import SideBarMainContent from "../components/SideBarMainContent";
import SideBarFooter from "../components/SideBarFooter";

export default function Page() {
  return (
    <>
      <section className="blog-section content-with-sidebar">
        {/*Sidebar Section*/}
        <div className="sidebar">
          <SideBarHeader />
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
