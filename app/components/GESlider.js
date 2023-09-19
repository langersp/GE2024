"use client";
import Slider from "@mui/material/Slider";
import { useState, useEffect } from "react";

const GESlider = ({ title, handlePollsTighten, onChangeHandler }) => {

  const [sliderValue, setSliderValue] = useState(0);

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value)
    onChangeHandler(event.target.value);
  }
  return (
    <div className="slider-container">
      <div className="slider-title">
        <span>{title}</span>

        <a href="#!" className="help-icon">
          <div className="help-text">
            <p>
            {title} info
            </p>
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
        />

        <div className="slider-value">
          <span className="value">{sliderValue}%</span>
        </div>
      </div>
    </div>
  );
};

export default GESlider;
