import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App.tsx";
import Landing from "./pages/landing.tsx";
import JoinRoomByCode from "./pages/joinroom.tsx";
import CreateRoom from "./pages/createroom.tsx";
import MasterCreateUser from "./pages/masterCreateUser.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
        <Route path="/" element={<Landing />} />
        <Route path="/join" element={<JoinRoomByCode />} />
        <Route path="/create" element={<CreateRoom />} />
        <Route path="/createuser" element={<MasterCreateUser />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
