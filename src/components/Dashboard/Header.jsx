import { Search, Bell, Settings } from "lucide-react";

const Header = () => {
  return (
    <header className="h-16 bg-[#F7F4EE] border-b border-stone-200/60 px-8 flex items-center justify-between shrink-0">
      <div>
        <h1 className="text-xl font-bold font-serif text-slate-900 tracking-tight">
          Dashboard
        </h1>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex items-center">
          <Search className="w-4 h-4 text-stone-400 absolute left-3 pointer-events-none" />
          <input
            type="text"
            placeholder="Quick search..."
            className="w-64 bg-[#ECE8DF] text-slate-800 text-xs rounded-lg pl-9 pr-4 py-2 focus:outline-none focus:ring-1 focus:ring-amber-500/50 border border-stone-300/40 transition-all placeholder:text-stone-400 font-medium"
          />
        </div>

        <button
          className="relative p-2 text-stone-600 hover:text-slate-900 hover:bg-stone-200/50 rounded-lg transition-colors"
          title="Notifications"
        >
          <Bell className="w-4 h-4" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full ring-2 ring-[#F7F4EE]" />
        </button>

        <button
          className="p-2 text-stone-600 hover:text-slate-900 hover:bg-stone-200/50 rounded-lg transition-colors"
          title="Settings"
        >
          <Settings className="w-4 h-4" />
        </button>

        <div className="bg-[#ECE8DF] border border-stone-300/40 text-stone-600 px-3 py-1.5 rounded-lg text-xs font-medium">
          Thu, Jun 25, 2026
        </div>
      </div>
    </header>
  );
};

export default Header;
