import { useState } from "react";
import "./SideBar.css";

const SideBar = () => {
  const [open, setOpen] = useState(true);

  const Menus = [
    { title: "Dashboard", src: "Chart_fill" },

    { title: "Search", src: "Search", gap: true },
    { title: "Register", src: "Chat" },
    { title: "Update", src: "Calendar" },
    { title: "Statistics", src: "Chart" },
    { title: "PVs ", src: "Folder" },

    { title: "Accounts", src: "User", gap: true },
    { title: "Settings", src: "Setting" },

    { title: "Logout", src: "Setting", gap: true },
  ];

  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-60" : "w-20 "
        } bg-purple h-screen p-5  pt-8 relative duration-300 SideBar`}
      >
        <img
          src={require("../../assets/SideBar/control.png")}
          alt="controller"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src={require("../../assets/SideBar/Logo.png")}
            alt="Logo"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
        </div>

        <ul className="pt-10">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-10" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <img
                src={require(`../../assets/SideBar/${Menu.src}.png`)}
                alt="icon"
              />
              <span
                className={`${
                  !open && "hidden"
                } text-white text-base origin-left duration-200`}
              >
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
