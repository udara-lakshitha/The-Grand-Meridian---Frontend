const features = [
  "Room Management",
  "Reservations",
  "Billing & Finance",
  "Staff & Payroll",
  "Inventory",
  "Analytics",
];

export default function LeftPanel() {
  return (
    <div
      className="
        h-full w-full
        flex flex-col justify-between
        bg-[#112132]
        text-white
        px-12 py-10
        overflow-hidden
        bg-[linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)]
        bg-[size:40px_40px]
      "
    >
      {/* Top Section */}
      <div>
        {/* Logo */}
        <div className="flex items-center gap-4 mb-16">
          <div className="w-14 h-14 rounded-xl bg-[#D4A64A] flex items-center justify-center text-xl">
            🏨
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              The Grand Meridian
            </h2>

            <p className="tracking-[0.25em] uppercase text-[#D4A64A] text-sm">
              Hotel Management
            </p>
          </div>
        </div>

        {/* Hero */}
        <h1 className="text-5xl xl:text-6xl font-bold leading-tight">
          Manage your
          <br />
          hotel with
          <br />
          <span className="text-[#D4A64A]">
            elegance.
          </span>
        </h1>

        {/* Description */}
        <p className="mt-8 text-lg text-gray-300 max-w-xl leading-8">
          A complete hospitality management platform—
          reservations, housekeeping, billing,
          finance and analytics in one beautiful interface.
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-3 mt-10">
          {features.map((item) => (
            <span
              key={item}
              className="border border-[#8E6B2C] rounded-full px-5 py-2 text-[#D4A64A] text-sm"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Statistics */}
      <div className="border-t border-gray-700 pt-8 grid grid-cols-3 gap-6">
        <div>
          <h2 className="text-4xl font-bold text-[#D4A64A]">
            20
          </h2>

          <p className="text-gray-400 mt-2">
            Rooms
          </p>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-[#D4A64A]">
            83%
          </h2>

          <p className="text-gray-400 mt-2">
            Occupancy
          </p>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-[#D4A64A]">
            $1.98M
          </h2>

          <p className="text-gray-400 mt-2">
            Annual Revenue
          </p>
        </div>
      </div>
    </div>
  );
}