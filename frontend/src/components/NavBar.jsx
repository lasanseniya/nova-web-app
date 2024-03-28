import { useState, useEffect } from "react";
import axios from "axios";

function NavBar() {
  const [user, setUser] = useState(null); // Initialize user state to null

  // Fetch user profile when the component mounts
  useEffect(() => {
    if (!user) {
      const token = localStorage.getItem("token");
      axios
        .get("/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(({ data }) => {
          setUser(data);
        })
        .catch((error) => {
          console.error("Error fetching user profile:", error);
          setUser({}); // Set an empty object to prevent further API calls
        });
    }
  }, [user]);

  // Guard against accessing properties of user when it's null or undefined
  const username = user?.user?.username || "";

  return (
    <div className="fixed top-0 z-50 w-full">
      <div className=" h-20 bg-[rgb(1,20,42)] text-[#f3f3f3] ">
        <div className="relative top-6 grid grid-cols-2 border-b pb-7 font-main sm:top-5">
          <div className="relative ml-20 text-sm sm:text-2xl">Nova</div>
          <div className="mr-14 flex items-center justify-end pr-4 text-sm sm:text-2xl">
            {/* Display user name on the navbar */}
            Welcome, {username}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
