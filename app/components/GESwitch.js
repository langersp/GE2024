"use client";
import Switch, { SwitchProps } from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const GESwitch = ({ title, helperText, reformToggle, handleReformToggle }) => {
  return (
    <div className="slider-container">
      <div className="slider-title">
        <span>{title}</span>

        <a href="#!" className="help-icon">
          <div className="help-text">
            <p>
              {helperText}
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
