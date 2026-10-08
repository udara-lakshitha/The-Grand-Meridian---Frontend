import { useLocation } from "react-router-dom";
import LeftPanel from "../../components/LeftPanel";
import LoginForm from "../../components/auth/LoginForm";
import RegisterForm from "../../components/auth/RegistrationForm";

const AuthPage = ({ setUser }) => {
  const location = useLocation();
  const isRegisterPage = location.pathname === "/register";

  return (
    <div className="w-full min-h-dvh lg:h-dvh lg:overflow-hidden bg-[#F8F3E9]">
      <div className="grid min-h-dvh lg:h-full lg:grid-cols-7">
        {/* Left Side (desktop only) */}
        <div className="hidden lg:block lg:col-span-4 h-full">
          <LeftPanel />
        </div>

        {/* Right Side */}
        <div className="col-span-1 lg:col-span-3 bg-[#F8F3E9] lg:h-full lg:overflow-y-auto">
          <div className="min-h-dvh lg:min-h-full flex flex-col items-center justify-center px-2 sm:px-8 lg:px-10 py-6 sm:py-10">
            {/* Brand shown only when the left panel is hidden */}
            <p className="lg:hidden mb-4 font-serif text-xl font-bold text-[#102235]">
              The Grand Meridian
            </p>

            {isRegisterPage ? (
              <RegisterForm />
            ) : (
              <LoginForm setUser={setUser} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
