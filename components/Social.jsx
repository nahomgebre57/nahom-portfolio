import { Item } from "@radix-ui/react-select";
import Link from "next/link";

import {FaGithub, FaLinkedin, FaInstagram,FaTwitter , FaTelegram} from "react-icons/fa";

const socials=[
  { icon: <FaGithub />, path:"" },
    { icon: <FaLinkedin />, path:"" },
    { icon: <FaInstagram />, path:"" },
    { icon: <FaTwitter />, path:"" },
    { icon: <FaTelegram />, path:"" },
];


const Social = ({containerStyles, iconStyles}) => {
  return (
  <div className={containerStyles}>
{socials.map((item, index) => {
    return (
        <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
        </Link>
    );
})}

  </div>
  );
};

export default Social
