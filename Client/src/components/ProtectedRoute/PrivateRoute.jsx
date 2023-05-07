import React from "react";
import {Redirect, Route } from "react-router-dom";  

export default function PrivateRoute({ component: Component, ...rest }) {
    // const isLoggedIn = 
    // console.log(isLoggedIn); 
  
    return (
      <Route
        {...rest}
        render={(props) => {
          return localStorage.getItem("isLoggedIn") == "true" ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/Connexion",
                state: { from: props.location }
              }}
            />
          );
        }
        }
      />
    );
  }