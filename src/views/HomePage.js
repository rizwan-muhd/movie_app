import React, { useEffect, useState } from "react";
import RowPost from "../components/RowPost/Rows";
import axios from "axios";
import LoginPage from "./LoginPage";

function HomePage() {
  const token = localStorage.getItem("accessToken");
  if (!token) {
    console.log("Token not found in local storage");
    // window.location = "/login";
    return <LoginPage />;
  }
  return (
    <div>
      <RowPost />
    </div>
  );
}

export default HomePage;
