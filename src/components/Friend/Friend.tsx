import React, { FormEvent, useContext } from "react";
import { User } from "../../../types/User";
import { Link, useNavigate } from "@reach/router";
import { useSignedRequest } from "../../hooks/useSignedRequest";
import { UserContext } from "../../hooks/useCurrentUser";
import "./Friend.scss";

interface Props {
  friend: User;
}

export const Friend: React.FC<Props> = ({ friend }) => {
  const { setCurrentUser, loggedIn, currentUser } = useContext(UserContext);
  const isFriend = loggedIn && currentUser.friends.includes(friend._id);
  const navigate = useNavigate();

  const unfriendRequest = useSignedRequest(
    "PATCH",
    `/users/unfriend/${friend._id}`
  );

  const addFriendRequest = useSignedRequest(
    "PATCH",
    `/users/friend/${friend._id}`
  );

  const unfriend = async (e: FormEvent) => {
    e.preventDefault;
    const unfriendResponse = await unfriendRequest();
    setCurrentUser(unfriendResponse.data);
  };

  const addFriend = async (e: FormEvent) => {
    e.preventDefault();
    const addFriendResponse = await addFriendRequest();
    setCurrentUser(addFriendResponse.data);
    navigate("/friends");
  };

  return (
    <div className="friend">
      <div className="header">
        <div className="app__icon mario" />
        <Link to={`/games/${friend._id}`}>
          <div>
            <div className="username">{friend.userName}</div>
            <div>{new Date(friend.createdAt).toDateString()}</div>
          </div>
        </Link>
        {isFriend ? (
          <div
            className="app__icon goomba"
            onClick={(e) => unfriend(e)}
            title="Remove From Friends"
          ></div>
        ) : (
          <div
            className="app__icon plus"
            onClick={(e) => addFriend(e)}
            title="Add Friend"
          />
        )}
      </div>
    </div>

    // <div className="friend">
    //   <div className="app__icon mario" />
    //   <div className="header">
    //     <Link to={`/games/${friend._id}`}>
    //       <div className="username">{friend.userName}</div>
    //       <div>{new Date(friend.createdAt).toDateString()}</div>
    //     </Link>
    //   </div>
    // </div>
  );
};
