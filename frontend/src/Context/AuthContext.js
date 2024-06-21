/** @format */

import axios from "axios";
import { createContext, useState } from "react";
// import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [isSignedUp, setIsSignedUp] = useState(true);

  const getUserCredentials = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const onLogIn = async (e) => {
    e.preventDefault();

    console.log("working");

    const data = JSON.stringify({
      query: `
      query {
        login(email: "${formData.email}", password: "${formData.password}") {
          token
          tokenExpiration
          userId
        }
      }
      `,
    });

    const config = {
      method: "POST",
      url: "graphql",
      headers: {
        "Accept-Language": "en-US,en;q=0.9",
        "Content-Type": "application/json",
      },
      data: data,
    };

    try {
      const response = await axios.request(config);
      const { token } = response.data.data.login;

      console.log(token);

      if (token) {
        navigate("/events"); // Redirect using useNavigate
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        onLogIn,
        getUserCredentials,
        formData,
        isSignedUp,
        setIsSignedUp,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
