import React from "react";
import { useHistory } from "react-router-dom";
function Dashboard() {
  var history = useHistory();
  var x = localStorage.getItem("userdata");
  var temp = JSON.parse(x);
  const logOut = () => {
    localStorage.clear();
    history.push("/register");
  };
  return (
    <div>
      <h1>Hello {temp.fname} You are Successfully LogedIn</h1>
      <button
        type="submit"
        className="btn btn-outline-primary"
        onClick={logOut}
      >
        Logout
      </button>
    </div>
  );
}

export default Dashboard;
