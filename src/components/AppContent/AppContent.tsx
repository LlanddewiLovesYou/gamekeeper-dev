import React, { useContext } from "react";
import { Redirect, Router } from "@reach/router";
import { Masthead } from "../../components/Masthead/Masthead";
import { GamesContext, useGames } from "../../hooks/useGames";
import { UserForm } from "../UserForm/UserForm";
import { LoginPage } from "../../pages/LoginPage/LoginPage";
import { GamesPage } from "../../pages/GamesPage/GamesPage";
import { UserContext } from "../../hooks/useCurrentUser";
import { FriendsPage } from "../../pages/FriendsPage/FriendsPage";
import { SearchPage } from "../../pages/SearchPage/SearchPage";

interface Props {}

export const AppContent: React.FC<Props> = () => {
  const { loggedIn } = useContext(UserContext);
  const { games, setGames, fetchUsersGames, user } = useGames();
  return (
    <GamesContext.Provider value={{ games, setGames, fetchUsersGames, user }}>
      <Masthead />
      <Router>
        <GamesPage path="/games/:userId" />
        <SearchPage path="/users/search" />
        {!loggedIn ? (
          // <LoginPage path="/login" />
          <UserForm type="login" path="/login" />
        ) : (
          <Redirect to="/games" from="/login" />
        )}
        {loggedIn ? (
          <FriendsPage path="/friends" />
        ) : (
          <Redirect to="/games" from="/friends" />
        )}
        {!loggedIn ? (
          <UserForm type="register" path="/register" />
        ) : (
          <Redirect to="/games" from="/register" />
        )}
      </Router>
    </GamesContext.Provider>
  );
};
