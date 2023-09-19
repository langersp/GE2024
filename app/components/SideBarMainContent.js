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
          title="How much the polls will tighten?"
          helperText="Historically, the polls have tightened in the run-up to general elections, as undecided voters make up their minds. This happened to the Conservatives in 1997 (after 18 years in power) and Labour in 2010 (after 13 years in power). In both cases, the Government closed the Opposition’s lead by 8 to 10 percentage points in the final year."
          handlePollsTighten={handlePollsTighten}
          onChangeHandler={handlePollSliderChange}
        />

        <GESlider
          title="How much tactical voting will take place?"
          helperText="Ahead of the 2019 General Election, YouGov found 19% of people planned to vote tactically. While polling published after election found 32% of people said they voted tactically in 2019. Earlier this year, in the Selby and Ainsty and Uxbridge by-elections, the Liberal Democrats saw their vote share fall by 5.3 percentage points and 4.6 percentage points respectively. While in the Somerton and Frome by-election, Labour’s vote share fell 10.3 percentage points."
          handlePollsTighten={handlePollsTighten}
          onChangeHandler={handleAntiTorySliderChange}
        />

        <GESwitch
          title="Whether Reform UK stand aside?"
          helperText="Analysis from the 2017 and 2019 General elections found that where the Brexit Party stood candidates, the change in vote share was more strongly correlated with Labour’s vote share falling than other parties.  Previous analysis found, in  the absence of a Brexit Party candidate, 70% of those who switched from Labour to the Brexit Party would have instead backed the Conservatives, while just 30% would have stuck with Labour."
          reformToggle={reformToggle}
          handleReformToggle={handleReformToggle}
        />
      </div>
    </div>
  );
};

export default SideBarMainContent;
