import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Main from "./pages/Main/Main";
import { AuthProvider } from "./context/AuthContext";
import AuthPage from "./pages/Auth/Auth";
import SearchPage from "./pages/Search/Search";
import routerConfig from "./routerConfig";
import { Provider } from 'react-redux';
import { setupStore } from './store/store.ts';

const store = setupStore();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <Provider store={store}>
        <Router future={{ v7_startTransition: true }}>
        <Routes>
          <Route path={routerConfig[0].path} element={<Main />} />
          <Route path={routerConfig[1].path} element={<SearchPage />} />
          <Route path={routerConfig[2].path} element={<AuthPage />} />
        </Routes>
      </Router>
      </Provider>
    </AuthProvider>
  </StrictMode>
);
