"use client";

const SideBarFooter = () => {
  return (
    <div className="sidebar-footer">
      <div className="links">
        <a href="https://www.5654.co.uk" target="_blank" className="link">
          Visit Our Website
        </a>

        <a
          href="https://www.5654.co.uk/contact-us"
          target="_blank"
          className="link"
        >
          Contact Us
        </a>
      </div>
      <img src="../Footer_Logo.svg" alt="Logo" />

      <img
        className="colour-strip"
        src="../Footer_Colour_Strip.svg"
        alt="Colour Strip"
      />
    </div>
  );
};

export default SideBarFooter;
