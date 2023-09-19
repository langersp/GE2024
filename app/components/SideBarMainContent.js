"use client";
import GESlider from "./GESlider";
import GESwitch from "./GESwitch";

const SideBarMainContent = ({
  handlePollsTighten,
  handlePollSliderChange,
  handleAntiTorySliderChange,
  reformToggle,
  handleReformToggle,
}) => {
  return (
    <div className="sidebar-main-content">
      <h2>THE NUMBER OF SEATS IN GREAT BRITAIN</h2>

      <p>Lorem ipsum ante aenean amet hac etiam felis non augue suscipit.</p>

      <div className="sliders">
        <GESlider
          title="Polls tighten"
          handlePollsTighten={handlePollsTighten}
          onChangeHandler={handlePollSliderChange}
        />

        <GESlider
          title="Anti-Tory Tactical Voting"
          handlePollsTighten={handlePollsTighten}
          onChangeHandler={handleAntiTorySliderChange}
        />

        <GESwitch
          reformToggle={reformToggle}
          handleReformToggle={handleReformToggle}
        />
      </div>
    </div>
  );
};

export default SideBarMainContent;
