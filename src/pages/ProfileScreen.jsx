function ProfileScreen() {
  return (
    <div className="h-full flex flex-col">
      <div className="relative rounded-md bg-[#F7F8F9] h-full">
        <div className="px-3 py-3 pb-1 bg-white h-[68px] flex items-center">
          <span className="text-lg text-[#1D2226]">Account Settings</span>
        </div>
        <div className="flex items-start px-3.5 pt-6">
          <div className="relative min-w-[56px] min-h-[56px]">
            <img
              src="/Ellipse 114.png"
              alt="Ellipse 114"
              className="w-14 h-14 rounded-full border border-gray-200 object-cover"
            />
            <span className="absolute bottom-0 right-0 w-5 h-5 bg-[#7D26E9] rounded-full border-transparent flex items-center justify-center">
              <img
                src="/Group 1585.png"
                alt="Group 1585"
                className="h-full w-full border-transparent"
              />
            </span>
          </div>
          <div className="ml-3 flex flex-col justify-center">
            <span className="font-semibold text-[15px] leading-tight">
              Marry Doe
            </span>
            <span className="text-[#1D2226] text-sm">Marry@Gmail.Com</span>
          </div>
        </div>
        <div className="px-3.5 mt-5 pb-4">
          <span className="block text-[#1D2226] text-sm">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat, Sed Diam
          </span>
        </div>
        <div className="w-full pb-4 border-b-[1px] border-dashed border-[#CBCBCB]" />
        <div className="absolute w-full bottom-10 left-0 border-b-[1px] border-dashed border-[#CBCBCB]" />
      </div>
    </div>
  );
}

export default ProfileScreen;
