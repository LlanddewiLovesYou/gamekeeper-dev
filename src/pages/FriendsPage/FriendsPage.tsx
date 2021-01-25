import React, { useContext, useState, useEffect } from "react";
import { RouteComponentProps } from "@reach/router";
import { UserContext } from "../../hooks/useCurrentUser";
import { useSignedRequest } from "../../hooks/useSignedRequest";
import { Friend } from "../../components/Friend/Friend";
import "./FriendsPage.scss";

interface Props extends RouteComponentProps {}

export const FriendsPage: React.FC<Props> = () => {
  const { currentUser } = useContext(UserContext);
  const [friends, setFriends] = useState<any>([]);

  useEffect(() => {
    const getFriends = async () => {
      const friendRequest = useSignedRequest(
        "GET",
        `/users/friends/${currentUser._id}`
      );
      const friendResponse = await friendRequest();
      setFriends(friendResponse.data);
    };
    getFriends();
  }, []);

  return (
    <div className="friends-page">
      <div className="header">{currentUser.userName}'s Friends</div>
      <div className="friends">
        {friends.map((friend: any) => (
          <Friend friend={friend} key={friend._id} />
        ))}
      </div>
    </div>
  );
};
