import Link from "next/link";

import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/MsanjaypKhandan",
  },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/sanjaypkhandan-m/",
  },
  {
    icon: <FaTwitter />,
    path: "https://x.com/Sanjayp_Khandan?t=AgtmgZDEpswA5FNMGoDMpg&s=09",
  },
  {
    icon: <FaInstagram />,
    path: "https://www.instagram.com/sanjay_khandan/?hl=en",
  },
];

export default function Social({containerStyles, iconStyles}) {
  return <div className={containerStyles}>
    {socials.map((social, index) => {
      return <Link key={index} href={social.path} target="_blank" className={iconStyles}>{social.icon}</Link>
    })}
  </div>;
}
