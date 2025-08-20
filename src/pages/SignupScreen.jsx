import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../components/ui/InputField";
import Button from "../components/ui/Button";

function SignupScreen() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    isAgency: "yes",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadio = (value) => {
    setForm((prev) => ({ ...prev, isAgency: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Insert signup logic here
  };

  return (
    <div className="h-full flex flex-col px-6">
      <h2 className="text-[28px] font-semibold mb-5 mt-10">
        Create your
        <br />
        PopX account
      </h2>
      <form
        onSubmit={handleSubmit}
        className="h-full flex flex-col justify-between pb-8"
      >
        <div>
          <InputField
            id="name"
            label="Full Name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Marry Doe"
            legendClassName="pr-8.5"
          />
          <InputField
            id="phone"
            label="Phone number"
            required
            value={form.phone}
            onChange={handleChange}
            placeholder="Marry Doe"
          />
          <InputField
            id="email"
            label="Email address"
            required
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Marry Doe"
            legendClassName="pr-1.5"
          />
          <InputField
            id="password"
            label="Password"
            required
            type="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Marry Doe"
            legendClassName="pr-8.5"
          />
          <InputField
            id="company"
            label="Company name"
            value={form.company}
            onChange={handleChange}
            placeholder="Marry Doe"
          />

          <div className="mb-8">
            <span className="text-[#1D2226] text-sm font-semibold mb-1">
              Are you an Agency?<span className="text-[#DD4A3D]">*</span>
            </span>
            <div className="flex items-center mt-2 space-x-7">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="isAgency"
                  value="yes"
                  checked={form.isAgency === "yes"}
                  onChange={() => handleRadio("yes")}
                  className="form-radio h-5 w-5 border-2 border-[#6C25FF] accent-[#642AF5]"
                />
                <span className="text-[#1D2226] font-semibold">Yes</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="isAgency"
                  value="no"
                  checked={form.isAgency === "no"}
                  onChange={() => handleRadio("no")}
                  className="form-radio h-5 w-5 border-2 border-[#6C25FF] accent-[#642AF5]"
                />
                <span className="text-[#1D2226] font-semibold">No</span>
              </label>
            </div>
          </div>
        </div>

        <div>
          <Button
            type="submit"
            onClick={() => navigate("/profile")}
            className="w-full bg-[#6C25FF] hover:bg-[#6021b8] text-white font-semibold py-3 rounded-lg text-[1.08rem] transition"
          >
            Create Account
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SignupScreen;
