import { Item } from "@radix-ui/react-select";
import Link from "next/link";

import {FaGithub, FaLinkedin, FaInstagram,FaEnvelope , FaTelegram} from "react-icons/fa";

const socials=[
  { icon: <FaGithub />, path:"https://github.com/nahomgebre57" },
    { icon: <FaLinkedin />, path:"https://www.linkedin.com/in/nahomgebre73" },
    { icon: <FaEnvelope />, path:"mailto:nahomgebre73@gmail.com" },
    { icon: <FaInstagram />, path:"https://www.instagram.com/namiyel1" },
    { icon: <FaTelegram />, path:"https://t.me/linamiyel" },
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
