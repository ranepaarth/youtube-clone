import { AiOutlineFlag } from "react-icons/ai";
import { BiCameraMovie } from "react-icons/bi";
import { BsMusicNoteList, BsTrophy } from "react-icons/bs";
import { FaShirt } from "react-icons/fa6";
import { FiHelpCircle, FiSettings } from "react-icons/fi";
import { GoHomeFill } from "react-icons/go";
import { IoGameControllerOutline, IoNewspaperOutline } from "react-icons/io5";
import { MdOutlineLiveTv, MdOutlineLocalFireDepartment } from "react-icons/md";
import { PiLightbulbLight } from "react-icons/pi";

import { RiFeedbackLine } from "react-icons/ri";

export const categories = [
  { type: "home", icon: <GoHomeFill />, title: "new" },
  {
    type: "category",
    icon: <MdOutlineLocalFireDepartment />,
    title: "trending",
  },
  { type: "category", icon: <BsMusicNoteList />, title: "music" },
  { type: "category", icon: <BiCameraMovie />, title: "movies" },
  { type: "category", icon: <MdOutlineLiveTv />, title: "live" },
  { type: "category", icon: <IoGameControllerOutline />, title: "gaming" },
  { type: "category", icon: <IoNewspaperOutline />, title: "news" },
  { type: "category", icon: <BsTrophy />, title: "sports" },
  { type: "category", icon: <PiLightbulbLight />, title: "learning" },
  {
    type: "category",
    icon: <FaShirt />,
    title: "fashion & beauty",
    divider: true,
  },
  { type: "menu", icon: <FiSettings />, title: "settings" },
  { type: "menu", icon: <AiOutlineFlag />, title: "report history" },
  { type: "menu", icon: <FiHelpCircle />, title: "help" },
  { type: "menu", icon: <RiFeedbackLine />, title: "feedback" },
];
