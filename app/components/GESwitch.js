"use client";
import Switch, { SwitchProps } from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const GESwitch = ({ reformToggle, handleReformToggle }) => {
  return (
    <div className="slider-container">
      <div className="slider-title">
        <span>TITLE OF THIS SLIDER GOES HERE</span>

        <a href="#!" className="help-icon">
          <div className="help-text">
            <p>
              Lorem ipsum ante aenean amet hac etiam felis non augue suscipit
              tristique, condimentum.
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
        <p>Reform UK stand aside</p>
      </div>
    </div>
  );
};

export default GESwitch;
