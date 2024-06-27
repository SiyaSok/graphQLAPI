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
    userImage: "",
    password: "",
    UserName: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    company: "",
    website: "",
    confirmPassword: "",
    terms: false,
  });

  const [isSignedUp, setIsSignedUp] = useState(true);

  const getUserCredentials = (e) => {
    const { name, value, type, checked } = e.target;

    console.log(name, value, type, checked);

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const onLogIn = async (e) => {
    e.preventDefault();

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
      if (token) {
        navigate("/events"); // Redirect using useNavigate
      }
    } catch (error) {
      console.log(error);
    }
  };

  const register = async (e) => {
    e.preventDefault();

    const data = JSON.stringify({
      query: `mutation MyMutation { createUser( userInput: { UserName: "${formData.UserName}", userImage:"${formData.userImage}", firstName: "${formData.firstName}", lastName: "${formData.lastName}", phoneNumber: "${formData.phoneNumber}", email: "${formData.email}", password: "${formData.password}", terms: "${formData.terms}", company: "${formData.company}", website: "${formData.website}" }) { _id company email firstName lastName password phoneNumber userImage website } }`,
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

      console.log("response", response);
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
        register,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
