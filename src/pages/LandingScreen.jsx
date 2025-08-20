import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";

function LandingScreen() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-end h-full p-6">
      <h1 className="text-[28px] font-bold text-[#1D2226]">Welcome to PopX</h1>
      <p className="text-lg text-gray-500 mt-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>

      <Button
        className="w-full mt-6 bg-[#6C25FF] text-white text-base py-3 rounded-md font-bold"
        onClick={() => navigate("/register")}
      >
        Create Account
      </Button>

      <Button
        className="w-full mt-3 bg-[#6C25FF4B] text-[#1D2226] text-base py-3 rounded-md font-bold"
        onClick={() => navigate("/login")}
      >
        Already Registered? Login
      </Button>
    </div>
  );
}

export default LandingScreen;
