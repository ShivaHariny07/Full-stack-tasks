import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./store/slices/authSlice";
import { toggleTheme } from "./store/slices/themeSlice";

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div style={{
      height: "100vh",
      backgroundColor: darkMode ? "#333" : "#fff",
      color: darkMode ? "#fff" : "#000",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <h1>Welcome to Day45</h1>
      <p>Status: {isLoggedIn ? "Logged In" : "Logged Out"}</p>
      <button onClick={() => dispatch(isLoggedIn ? logout() : login())}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
      <br />
      <button onClick={() => dispatch(toggleTheme())}>
        Toggle Theme
      </button>
    </div>
  );
}

export default App;