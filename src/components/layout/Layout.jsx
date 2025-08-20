function Layout({ children }) {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#00000007] font-rubik">
      <div
        className="bg-white shadow-lg"
        style={{ width: "375px", height: "812px" }}
      >
        {children}
      </div>
    </div>
  );
}

export default Layout;
