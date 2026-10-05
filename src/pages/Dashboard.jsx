import { useState } from "react";
import Sidebar from "../components/Dashboard/Sidebar";
import Header from "../components/Dashboard/Header";
import MainContent from "../components/Dashboard/MainContent";

const Dashboard = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#F7F4EE] font-sans antialiased text-slate-800">
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
      />

      <div className="flex flex-col flex-1 min-w-0 h-full">
        <Header />
        <MainContent />
      </div>
    </div>
  );
};

export default Dashboard;
