import React, { useState } from "react";
import "./Block.scss";

interface Props {
  completed: boolean;
  path: string;
}

export const Block: React.FC<Props> = ({ completed }) => {
  const game = {
    title: "CyberPunk 2077",
    year: 2020,
    started: new Date(Date.now()).toDateString(),
    lastPlayed: new Date(Date.now()).toDateString(),
    hours: 25.0,
    completed,
    completedOn: new Date(Date.now()).toDateString(),
  };

  const [complete, setComplete] = useState(completed);
  const [hours, setHours] = useState(game.hours);
  const backgroundClass = complete ? "completed" : null;

  return (
    <div className={"block " + backgroundClass}>
      <div className="block__flex">
        <div className="title">
          <h1>{game.title}</h1>
          <div>{game.year}</div>
        </div>

        <div>
          <label className="block__label">
            Started On:
            <div className="block__info">{game.started}</div>
          </label>
          <label className="block__label">
            Last Played:
            <div className="block__info">{game.lastPlayed}</div>
          </label>
        </div>

        <div className="hours">
          <label className="block__label">
            Hours Played:
            <div className="block__info">{hours}</div>
          </label>
          {!complete && (
            <button
              onClick={() => {
                console.log("1up");
                setHours(hours + 0.5);
              }}
              className="button one-up-button"
            >
              <div className="one-up" />
              Add 30 Mins
            </button>
          )}
        </div>

        {!complete && (
          <button
            className="button complete-button"
            onClick={() => setComplete(true)}
          >
            Complete Game
          </button>
        )}
        {complete && <div>Completed: {game.completedOn}</div>}
      </div>
    </div>
  );
};
