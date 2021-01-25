import React, { useState, useContext } from "react";
import { RouteComponentProps } from "@reach/router";
import Axios from "axios";
import { useNavigate } from "@reach/router";
import { UserContext } from "../../hooks/useCurrentUser";
import { getToken } from "../../util/jwt";
import "./CreateGameForm.scss";
import { GamesContext } from "../../hooks/useGames";

interface Props extends RouteComponentProps {}

export const CreateGameForm: React.FC<Props> = () => {
  const [title, setGameTitle] = useState("");
  const [year, setGameYear] = useState("");
  const [open, setOpen] = useState(false);
  const { currentUser } = useContext(UserContext);
  const { fetchUsersGames } = useContext(GamesContext);
  const navigate = useNavigate();

  const createGame = async (e: any, title: string, year: string) => {
    e.preventDefault();
    const game = {
      title,
      year,
      started: new Date(Date.now()).toDateString(),
      lastPlayed: new Date(Date.now()).toDateString(),
      hours: 0,
      completed: false,
      completedOn: "",
      userId: currentUser._id,
    };
    const jwt = getToken();
    const newGame = await Axios.post(
      `http://localhost:5000/games/${currentUser._id}`,
      game,
      { headers: { Authorization: `Bearer ${jwt}` } }
    );
    await fetchUsersGames(currentUser._id);
    setOpen(false);
    setGameTitle("");
    setGameYear("");
    navigate(`/games/${currentUser._id}`);
    return newGame;
  };

  return (
    <div className="create-game-form">
      <div
        className="app__icon plus"
        onClick={() => setOpen(!open)}
        title="Add New Game"
      />
      {open && (
        <div className="content">
          <label htmlFor="">
            Title:
            <input
              type="text"
              value={title}
              onChange={(e) => setGameTitle(e.target.value)}
            />
          </label>
          <label htmlFor="">
            Release Year:
            <input
              type="text"
              value={year}
              onChange={(e) => setGameYear(e.target.value)}
            />
          </label>
          <button onClick={(e) => createGame(e, title, year)}>
            Create Game
          </button>
        </div>
      )}
    </div>
  );
};
