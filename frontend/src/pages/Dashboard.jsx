import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  return <h1>Welcome, {user?.name}!</h1>;
};

export default Dashboard;
