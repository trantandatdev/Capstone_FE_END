import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutMain from "./Layout/LayoutMain.jsx";
import TabProjects from "./components/TabProjects/TabProjects";
import TabUser from "./components/TabUsers/TabUsers.jsx";
import ProjectDetail from "./components/ProjectDetail/ProjectDetail.jsx";
import NewProject from "./components/NewProject/NewProject.jsx";
import TabUserSetting from "./components/TabUserSetting/TabUserSetting.jsx";

import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.jsx";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import Register from "./pages/LoginPage/Register.jsx";

function App() {
  return (
    <div className="jira">
      <BrowserRouter>
        <Routes>
          <Route element={<LayoutMain />}>
            <Route path="/" element={<TabProjects />}></Route>
            <Route path="/users" element={<TabUser />}></Route>
            <Route
              path="/projectdetail/:id"
              element={<ProjectDetail />}
            ></Route>
            <Route path="/newproject" element={<NewProject />}></Route>
            <Route path="/usersetting" element={<TabUserSetting />}></Route>
          </Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<LoginPage/>}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
