import GreetingPage from "./pages/GreetingPage/GreetingPage";

import styles from "./scss/app.module.scss";

import { Route, Routes } from "react-router-dom";

function RoutesWindow() {
  const routes = [
    {
      index: true,
      path: '/greeting',
      Component: GreetingPage
    }
  ];

  return (
    <div>
      <Routes>
        {routes.map((route, index) => {
          const { Component, ...rest } = route;
          return <Route key={index} {...rest} element={<Component />} />
        })};
      </Routes>
    </div>
  );
};

export default RoutesWindow;