import { useContext, useState } from "react";
import { UserContext } from "./useCurrentUser";
import { useNavigate } from "@reach/router";
import { setToken } from "../util/jwt";
import Axios from "axios";

export const useLogin = (submitUrl: string) => {
  const { setLoggedIn, loggedIn, currentUser, setCurrentUser } = useContext(
    UserContext
  );
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (e: any) => {
    e.preventDefault();
    const loginData = { userName, password };

    try {
      const loginResponse = await Axios.post(submitUrl, loginData);
      const token = loginResponse.data.accessToken;
      const user = loginResponse.data.currentUser;
      if (token) {
        setCurrentUser(user);
        setToken(token);
        setLoggedIn(true);
        navigate(`/games/${user._id}`);
      }
    } catch (e) {
      setError(e.message);
    }
  };

  return {
    onSubmit,
    loggedIn,
    currentUser,
    userName,
    setUserName,
    password,
    setPassword,
    error,
    setError,
  };
};
