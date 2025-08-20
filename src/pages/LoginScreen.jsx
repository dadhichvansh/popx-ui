import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";

function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="h-full flex flex-col px-6">
      <h2 className="text-[28px] font-semibold mb-1 mt-8">
        Signin to your
        <br />
        PopX account
      </h2>
      <p className="text-[#1d222699] mb-4 text-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>
      <form onSubmit={handleSubmit}>
        <fieldset className="mb-4 rounded-md border border-[#CBCBCB] bg-white px-2.5 pb-2">
          <legend className="text-[#6C25FF] text-sm px-1">Email Address</legend>
          <input
            type="email"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="pl-1.5 text-sm focus:outline-none focus:ring-[#7D26E9] h-full w-full"
            required
          />
        </fieldset>
        <fieldset className="mb-4 rounded-md border border-[#CBCBCB] bg-white px-2.5 pb-2">
          <legend className="text-[#6C25FF] text-sm px-1 pr-8">Password</legend>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="pl-1.5 text-sm focus:outline-none focus:ring-[#7D26E9] h-full w-full"
            required
          />
        </fieldset>
        <Button
          type="submit"
          onClick={() => navigate("/profile")}
          className="w-full bg-[#CBCBCB] hover:bg-[#7D26E9] hover:text-white text-white font-semibold py-3 rounded-md text-base transition"
        >
          Login
        </Button>
      </form>
    </div>
  );
}

export default LoginScreen;
