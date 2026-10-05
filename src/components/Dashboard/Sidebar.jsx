import {
  LayoutDashboard,
  Bed,
  CalendarCheck,
  Users,
  Receipt,
  UserCheck,
  Package,
  UtensilsCrossed,
  BarChart3,
  Wallet,
  Building2,
  ChevronLeft,
  ChevronRight,
  LogOut,
} from "lucide-react";

const Sidebar = ({
  activeTab = "dashboard",
  setActiveTab,
  isCollapsed,
  setIsCollapsed,
}) => {
  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "rooms", label: "Rooms", icon: Bed },
    { id: "reservations", label: "Reservations", icon: CalendarCheck },
    { id: "customers", label: "Customers", icon: Users },
    { id: "billing", label: "Billing", icon: Receipt },
    { id: "staff", label: "Staff", icon: UserCheck },
    { id: "inventory", label: "Inventory", icon: Package },
    { id: "restaurant", label: "Restaurant", icon: UtensilsCrossed },
    { id: "reports", label: "Reports", icon: BarChart3 },
    { id: "finance", label: "Finance", icon: Wallet },
  ];

  return (
    <aside
      className={`bg-[#0B132B] text-slate-300 flex flex-col justify-between transition-all duration-300 ease-in-out border-r border-slate-800/80 select-none shrink-0 h-full ${
        isCollapsed ? "w-20" : "w-64"
      }`}
    >
      <div className="flex flex-col flex-1 min-h-0">
        <div className="h-16 border-b border-slate-800/60 flex items-center px-4 gap-3 shrink-0">
          <div className="w-9 h-9 rounded-lg bg-[#C5A059]/15 border border-[#C5A059]/30 flex items-center justify-center shrink-0">
            <Building2 className="w-5 h-5 text-[#C5A059]" />
          </div>
          {!isCollapsed && (
            <div className="overflow-hidden whitespace-nowrap">
              <h1 className="font-serif text-sm font-bold text-slate-100 tracking-wide leading-tight">
                The Grand
              </h1>
              <span className="text-[10px] tracking-widest text-[#C5A059] font-medium uppercase block">
                Meridian
              </span>
            </div>
          )}
        </div>

        <nav className="p-3 space-y-1.5 overflow-y-auto flex-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab && setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150 ${
                  isActive
                    ? "bg-slate-800/90 text-[#C5A059] shadow-inner"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/40"
                } ${isCollapsed ? "justify-center px-0" : ""}`}
                title={isCollapsed ? item.label : undefined}
              >
                <Icon
                  className={`w-4 h-4 shrink-0 ${
                    isActive ? "text-[#C5A059]" : "text-slate-400"
                  }`}
                />
                {!isCollapsed && (
                  <span className="truncate text-left text-xs font-medium">
                    {item.label}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>

      <div className="p-3 border-t border-slate-800/80 space-y-2 shrink-0 bg-[#0B132B]">
        {/* Collapse Button */}
        <button
          onClick={() => setIsCollapsed && setIsCollapsed(!isCollapsed)}
          className={`w-full flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 rounded-lg transition-colors ${
            isCollapsed ? "justify-center" : ""
          }`}
          title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {isCollapsed ? (
            <ChevronRight className="w-4 h-4 shrink-0" />
          ) : (
            <>
              <ChevronLeft className="w-4 h-4 shrink-0" />
              <span>Collapse</span>
            </>
          )}
        </button>

        <div
          className={`pt-2 border-t border-slate-800/60 flex items-center ${
            isCollapsed ? "justify-center" : "justify-between px-1"
          }`}
        >
          <div className="flex items-center gap-2.5 overflow-hidden">
            <div className="w-8 h-8 rounded-full bg-[#C5A059] text-slate-950 font-bold text-xs flex items-center justify-center shrink-0">
              SK
            </div>
            {!isCollapsed && (
              <div className="overflow-hidden text-left">
                <p className="text-xs font-semibold text-slate-200 truncate leading-snug">
                  Sana Kaur
                </p>
                <p className="text-[10px] text-slate-400">Admin</p>
              </div>
            )}
          </div>

          {!isCollapsed && (
            <button
              className="p-1.5 text-slate-400 hover:text-red-400 hover:bg-slate-800 rounded-lg transition-colors shrink-0"
              title="Logout"
            >
              <LogOut className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
