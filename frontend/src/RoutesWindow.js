import ChoiceThemePage from "./pages/ChoiceThemePage/ChoiceThemePage";
import GreetingPage from "./pages/GreetingPage/GreetingPage";
import DialogPage from "./pages/DialogPage/DialogPage";

import { Route, Routes } from "react-router-dom";

import styles from "./scss/app.module.scss";

function RoutesWindow() {
  const routes = [
    {
      index: true,
      path: '/greeting',
      Component: GreetingPage
    },
    {
      path: '/choice-theme',
      Component: ChoiceThemePage
    },
    {
      path: '/dialog',
      Component: DialogPage
    }
  ];

  return (
    <div className={styles}>
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