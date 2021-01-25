import React, { useContext } from "react";
import { UserContext } from "../../hooks/useCurrentUser";
import { Link } from "@reach/router";
import "./Masthead.scss";
import { CreateGameForm } from "components/CreateGameForm/CreateGameForm";

interface Props {}

export const Masthead: React.FC<Props> = () => {
  const { loggedIn, currentUser } = useContext(UserContext);
  return (
    <div className="masthead">
      <div className="title">Gamekeeper</div>
      {loggedIn ? (
        <div className="logged-in">
          <Link to="/users/search">
            <div className="app__icon mag" title="Find A Friend" />
          </Link>
          <Link to="/friends">
            <div className="app__icon star" title="My Friends" />
          </Link>
          <CreateGameForm />
          <span>
            Welcome,{" "}
            <Link to={`/games/${currentUser._id}`}>{currentUser.userName}</Link>
          </span>
        </div>
      ) : (
        <div className="login">
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      )}
    </div>
  );
};
