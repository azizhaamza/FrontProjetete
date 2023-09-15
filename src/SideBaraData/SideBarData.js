import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import * as AiIcons from "react-icons/ai";

export const SidebarData = [
  {
    icon: <MdIcons.MdDashboard />,
    title: "dashboard",
    path: "/",
  },
  {
    icon: <AiIcons.AiOutlineAreaChart />,
    title: "orders",
    path: "/order",
  },
  {
    icon: <AiIcons.AiFillSetting />,
    title: "Demande",
    path: "/demande",
  },
  {
    icon: <FaIcons.FaSignOutAlt />,
    title: "Sign Out",
    path: "/sign-out",
  },
];
