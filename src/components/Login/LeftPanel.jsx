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
            className="relative hidden lg:flex flex-col justify-between p-16 text-white bg-[#102235] bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.03)_0px,rgba(255,255,255,0.03)_1px,transparent_1px,transparent_15px)]"
        >
            <div className="absolute top-0 left-0 w-full h-1.5 bg-[#D4A64A]"></div>
            <div>
                <div className="flex items-center gap-4 mb-18 ">
                    <div className="w-14 h-14 rounded-xl bg-[#D4A64A] flex items-center justify-center">
                        🏨
                    </div>
                    <div>
                        <h2 className="text-xl font-bold">
                            The Grand Meridian
                        </h2>
                        <p className="tracking-widest text-[#D4A64A] uppercase">
                            Hotel Management
                        </p>
                    </div>
                </div>

                <h1 className="text-4xl font-bold leading-tight">
                    Manage your
                    <br />
                    hotel with
                    <br />
                    <span className="text-[#D4A64A]">
                        elegance.
                    </span>
                </h1>

                <p className="mt-10 text-l text-gray-300 max-w-xl leading-relaxed">
                    A complete hospitality management platform —
                    <br></br>
                    reservations, housekeeping, billing, finance, and analytics
                    <br></br>
                    in one beautiful interface.
                </p>

                <div className="flex flex-wrap gap-2 mt-10 text-sm">
                    {features.map((item) => (
                        <div
                            key={item}
                            className="border border-[#8E6B2C] rounded-full px-2 py-1 text-[#D4A64A] bg-gray-800"
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>

            <div className="border-t border-gray-700 pt-6 grid grid-cols-3">
                <div>
                    <h2 className="text-5xl font-bold text-[#D4A64A]">20</h2>
                    <p className="text-gray-400">Rooms</p>
                </div>
                <div>
                    <h2 className="text-5xl font-bold text-[#D4A64A]">83%</h2>
                    <p className="text-gray-400">Occupancy</p>
                </div>
                <div>
                    <h2 className="text-5xl font-bold text-[#D4A64A]">$1.98M</h2>
                    <p className="text-gray-400">Annual Revenue</p>
                </div>
            </div>
        </div>
    );
}