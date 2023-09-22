"use client";

const SideBarMenuFooter = () => {
  return (
    <div className="sidebar-footer open-menu-footer">
      <div className="links">
        <a href="#" className="link">
          Visit Our Website
        </a>

        <a href="#" className="link">
          Contact Us
        </a>
      </div>

      <img src="../Footer_Logo_Blue.svg" alt="Logo" />

      <img
        className="colour-strip"
        src="../Footer_Colour_Strip.svg"
        alt="Colour Strip"
      />
    </div>
  );
};

export default SideBarMenuFooter;
