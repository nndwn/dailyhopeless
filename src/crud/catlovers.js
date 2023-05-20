import React from "react";
import { isLoggedIn,logout  } from "../services/auth";
import { navigate } from "gatsby";


const CatloverPage = () => {
  
    return (
        <>
            <div>
      <h1>Firestore CRUD App </h1>
      <h2>Item List</h2>
      
    </div>
        {isLoggedIn() ? (
            <a
              href="/"
              onClick={event => {
                event.preventDefault()
                logout(() => navigate(`/panel/login`))
              }}
            >
              Logout
            </a>
          ) : null}

          </>
    )
}


export default CatloverPage