import React, { lazy, useState, Suspense } from "react";

const Login = React.lazy(() => import("./Login"));
const LazyContact = React.lazy(() => import("./Contact"));

const Home = () => {
  const [load, setLoad] = useState("home");

  return (
    <div>
      <Suspense fallback={<div>Loading MyComponent....</div>}>
        <p>Home</p>
        <button onClick={() => setLoad("contact")}>Contact</button>
        <button onClick={() => setLoad("login")}>Login</button>
        {load == "contact" && <LazyContact />}
        {load == "login" && <Login />}
      </Suspense>
    </div>
  );
};

export default Home;
