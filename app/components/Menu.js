"use client";

const Menu = () => {
  return (
    <div className="sidebar-main-content open-menu-links">
      <div className="links">
        <a href="/" className="link">
          Home
        </a>

        <a href="/predictor" className="link">
          The Predictor
        </a>

        <a href="/about" className="link">
          About The Predictor
        </a>

        <a href="/blog" className="link">
          Related Blogs
        </a>
      </div>
    </div>
  );
};

export default Menu;
