/** @format */

import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GraphQLRequest } from "../components/util/GraphQLRequest";
import { getFromData } from "../components/util/GetFromData";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [isSignedUp, setIsSignedUp] = useState(true);
  const [onLoad, setOnLoad] = useState(false);
  const [onError, setError] = useState("");
  const [onlogedIn, setonlogedIn] = useState([]);

  const getUserCredentials = (e) => {
<<<<<<< Updated upstream
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
=======
    getFromData(e, formData, setFormData);
>>>>>>> Stashed changes
  };

  const onLogIn = async (e) => {
    e.preventDefault();

    console.log("working");

    const data = JSON.stringify({
      query: `
      query {
        login(email: "${formData.UserName}", password: "${formData.password}") {
          token
          tokenExpiration
          userId
        }
      }
      `,
    });

    try {
<<<<<<< Updated upstream
      const response = await axios.request(config);
      const { token } = response.data.data.login;

      console.log(token);

      if (token) {
        navigate("/events"); // Redirect using useNavigate
=======
      setOnLoad(true);
      const response = await GraphQLRequest(data);
      if (response.data.data.login) {
        const { token } = response.data.data.login;
        if (token) {
          setonlogedIn(response.data.data.login);
          navigate("/account"); // Redirect using useNavigate
        }
      } else {
        setError(response.data.errors[0].message);
        setOnLoad(false);
>>>>>>> Stashed changes
      }
    } catch (error) {
      console.log(error);
    }
  };

<<<<<<< Updated upstream
=======
  const register = async (e) => {
    e.preventDefault();
    const data = JSON.stringify({
      query: `mutation MyMutation { 
      createUser( userInput: { UserName: "${formData.UserName}",
      userImage:"${formData.userImage}",
      firstName: "${formData.firstName}",
      lastName: "${formData.lastName}",
      phoneNumber: "${formData.phoneNumber}", 
      email: "${formData.email}", 
      password: "${formData.password}", 
      terms: "${formData.terms}", 
      company: "${formData.company}", 
      website: "${formData.website}" }) 
      { _id company email firstName lastName password phoneNumber userImage website } }`,
    });

    try {
      setOnLoad(true);
      const response = await GraphQLRequest(data);
      if (response.data.errors.length < 1) {
        setOnLoad(true);
        setIsSignedUp(true);
      } else {
        setError(response.data.errors[0].message);
        setOnLoad(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

>>>>>>> Stashed changes
  return (
    <AuthContext.Provider
      value={{
        onLogIn,
        getUserCredentials,
        formData,
        isSignedUp,
        setIsSignedUp,
<<<<<<< Updated upstream
=======
        register,
        onLoad,
        setOnLoad,
        setFormData,
        onError,
        setError,
        onlogedIn,
>>>>>>> Stashed changes
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
