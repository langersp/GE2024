"use client";
import Switch, { SwitchProps } from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const GESwitch = ({ reformToggle, handleReformToggle }) => {
  return (
    <div className="slider-container">
      <div className="slider-title">
        <span>Reform UK Stand Aside</span>

        <a href="#!" className="help-icon">
          <div className="help-text">
            <p>
              Reform UK Stand Aside info
            </p>
          </div>
        </a>
      </div>

      <div className="selector">
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography>No</Typography>
          <Switch onChange={handleReformToggle} checked={reformToggle} />
          <Typography>Yes</Typography>
        </Stack>
      </div>
    </div>
  );
};

export default GESwitch;
