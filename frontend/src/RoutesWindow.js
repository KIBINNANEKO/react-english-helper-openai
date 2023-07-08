import ChoiceThemePage from "./pages/ChoiceThemePage/ChoiceThemePage";
import GreetingPage from "./pages/GreetingPage/GreetingPage";

import { Route, Routes } from "react-router-dom";

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
    }
  ];

  return (
      <Routes>
        {routes.map((route, index) => {
          const { Component, ...rest } = route;
          return <Route key={index} {...rest} element={<Component />} />
        })};
      </Routes>
  );
};

export default RoutesWindow;