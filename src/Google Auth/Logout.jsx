// import { useAuth0 } from "@auth0/auth0-react";
// import React, { useContext } from "react";
// import { AppContext } from "../ContextApi/FisrtContext";

// const LogoutButton = () => {
//   const { logout, user } = useAuth0();
//       localStorage.removeItem("userGdata");


  
//   // Storing user data in localStorage after stringifying
//   if (user) {
//     localStorage.setItem("userGdata", JSON.stringify(user));
//   }

//   return (
//     // <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
//     //   Log Out
//     // </button>
//     <button onClick={() => logout(setLogout(true))}>
//       Log Out
//     </button>
//   );
// };

import React from "react";

const LogoutButton = ({ logout, setLogout }) => {
  const handleLogout = () => {
    // Remove user data from localStorage
    localStorage.removeItem("userGdata");

    // Optional: Update app state to reflect logout
    if (setLogout) {
      setLogout(true);
    }

    // Optional: Trigger any logout cleanup logic
    if (logout) {
      logout();
    }
  };

  return (
    <button onClick={handleLogout}>
      Log Out
    </button>
  );
};

export default LogoutButton;
