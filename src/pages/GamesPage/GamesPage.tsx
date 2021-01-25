import React, { useMemo, useEffect, useContext } from "react";
import { RouteComponentProps } from "@reach/router";
import { Block } from "../../components/Block/Block";
import { GamesContext } from "../../hooks/useGames";
import { useParams } from "@reach/router";
import { useSignedRequest } from "../../hooks/useSignedRequest";
import { UserContext } from "../../hooks/useCurrentUser";
import "./GamesPage.scss";

interface Props extends RouteComponentProps {}

export const GamesPage: React.FC<Props> = () => {
  const { games, fetchUsersGames, user, setGames } = useContext(GamesContext);
  const params = useParams();
  const userId = params.userId;
  const { setCurrentUser, currentUser } = useContext(UserContext);
  const followUser = useSignedRequest("PATCH", `/users/friend/${userId}`);
  useEffect(() => {
    fetchUsersGames(userId);
  }, [userId]);

  const sortedGames = useMemo(() => {
    if (games && games.length > 0) {
      const inProgress = games.filter((game: any) => game.completed === false);
      const finished = games.filter((game: any) => game.completed === true);
      const sorted = [...inProgress, ...finished];
      return sorted;
    } else {
      return [];
    }
  }, [games]);

  const onSubmit = async () => {
    const { data: updatedUser } = await followUser();
    setCurrentUser(updatedUser);
  };

  const isNotCurrentUser = userId !== currentUser._id;
  const isFriend = currentUser.friends.includes(userId);

  const displayButton = isNotCurrentUser && !isFriend;

  return (
    <div className="games-page center">
      <div className="header">
        {displayButton && (
          <div
            className="app__icon plus"
            onClick={() => onSubmit()}
            title="Add This User to My Friends"
          />
        )}
        {isFriend && (
          <div
            className="app__icon star"
            title={`${user.userName} is your friend`}
          />
        )}
        {user.userName && (
          <div className="username">{user.userName}'s Games</div>
        )}
      </div>
      <div className="blocks">
        {games &&
          sortedGames.map((game) => (
            <Block
              key={game._id}
              game={game}
              completed={game.completed}
              setGames={setGames}
            />
          ))}
      </div>
    </div>
  );
};
