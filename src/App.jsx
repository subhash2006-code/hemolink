import { Routes, Route, Navigate } from "react-router-dom";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import History from "./pages/History";
import Requests from "./pages/Requests";
import NeedBlood from "./pages/NeedBlood";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import DashboardLayout from "./layouts/DashboardLayout";

function Page({ children }) { return <DashboardLayout>{children}</DashboardLayout>; }

export default function App() {
  return <Routes>
    <Route path="/" element={<Register/>}/>
    <Route path="/dashboard" element={<Page><Dashboard/></Page>}/>
    <Route path="/history" element={<Page><History/></Page>}/>
    <Route path="/requests" element={<Page><Requests/></Page>}/>
    <Route path="/NeedBlood" element={<Page><NeedBlood /></Page>}/>

    <Route path="/profile" element={<Page><Profile/></Page>}/>
    <Route path="/settings" element={<Page><Settings/></Page>}/>
    <Route path="*" element={<Navigate to="/dashboard" replace/>}/>
  </Routes>;
}
