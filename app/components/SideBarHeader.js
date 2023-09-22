"use client";

const SideBarHeader = ({ handleMenu }) => {
  return (
    <div className="sidebar-header">
      <button className="menu-burger" onClick={handleMenu}>
        <div className="menu-img activate-menu">
          <img
            src="../Menu_Button_2.svg"
            alt="Menu Burger"
            className="menu-burger state1"
          />

          <img
            src="../Menu_Button_2.svg"
            alt="Menu Burger"
            className="menu-burger state2"
          />
        </div>

        <div className="menu-img deactivate-menu">
          <img
            src="../Menu_Close_Button_State_1.svg"
            alt="Menu Close"
            className="menu-close state1"
          />

          <img
            src="../Menu_Close_Button_State_2.svg"
            alt="Menu Close"
            className="menu-close state2"
          />
        </div>
      </button>

      <div className="header-title">
        <h3>5654 ELECTION CENTRE</h3>
      </div>
    </div>
  );
};

export default SideBarHeader;
