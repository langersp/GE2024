"use client";
import Switch, { SwitchProps } from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const GESwitch = ({ title, helperText, reformToggle, handleReformToggle }) => {
  const handleSwitch = () => {
    handleReformToggle();
  };

  return (
    <div className="slider-container">
      <div className="slider-title">
        <span>{title}</span>

        <a href="#!" className="help-icon">
          <div className="help-text">
            <p>{helperText}</p>
          </div>
        </a>
      </div>

      <div className="selector">
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography
            style={{
              display: "flex",
              width: "3.5vw",
              height: "3.5vw",
              borderRadius: "50%",
              justifyContent: "center",
              webkitBoxAlign: "center",
              msFlexAlign: "center",
              alignItems: "center",
              webkitTransition: "0.3s ease-in-out",
              transition: "0.3s ease-in-out",
              cursor: "pointer",
              fontWeight: "700",
            }}
            className={`switch-text ${!reformToggle ? "active" : ""}`}
          >
            No
          </Typography>
          <Switch
            onChange={handleReformToggle}
            checked={reformToggle}
            sx={{
              display: "-webkit-box",
              display: "-ms-flexbox",
              display: "flex",
              webkitBoxPack: "justify",
              msFlexPack: "justify",
              justifyContent: "space-between",
              webkitBoxAlign: "center",
              msflexalign: "center",
              alignItems: "center",
              paddingTop: "1.5vw",
            }}
          />
          <Typography
            style={{
              display: "flex",
              width: "3.5vw",
              height: "3.5vw",
              borderRadius: "50%",
              justifyContent: "center",
              webkitBoxAlign: "center",
              msFlexAlign: "center",
              alignItems: "center",
              webkitTransition: "0.3s ease-in-out",
              transition: "0.3s ease-in-out",
              cursor: "pointer",
              fontWeight: "700",
            }}
            className={`switch-text ${reformToggle ? "active" : ""}`}
          >
            Yes
          </Typography>
        </Stack>
      </div>
    </div>
  );
};

export default GESwitch;
