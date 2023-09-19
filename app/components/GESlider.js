"use client";
import Slider from "@mui/material/Slider";
import { useState, useEffect } from "react";

const GESlider = ({ title, helperText, handlePollsTighten, onChangeHandler }) => {
  const [sliderValue, setSliderValue] = useState(0);

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
    onChangeHandler(event.target.value);
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

      <div className="slide-container">
        {/* <input type="range" min="0" max="100" value="0" className="slider" /> */}

        <Slider
          defaultValue={0}
          aria-label={title}
          valueLabelDisplay="auto"
          onChange={handleSliderChange}
          onMouseUp={() => handlePollsTighten()}
          sx={{
            width: 300,
            width: "100%",
            margin: "0",
            height: "0.5vw",
            borderRadius: "0.25vw",
            color:'#fff',
            '& .MuiSlider-thumb': {       
              appearance: 'none',
              width: '1.5vw',
              height: '1.5vw',
              borderRadius: '50%',
              background: '#fff',
              border: '0.3vw solid red',
              cursor: 'pointer',
            }
          }}
        />

        <div className="slider-value">
          <span className="value">{sliderValue}%</span>
        </div>
      </div>
    </div>
  );
};

export default GESlider;
