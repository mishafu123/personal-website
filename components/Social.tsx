import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

// define the type for each item in the socials array. Icon = icon, path = link, label = name
type SocialItem = {
  icon: JSX.Element;
  path: string;
  label: string; // Adding label for each social item
};

// update and fill in info for the socials array
const socials: SocialItem[] = [
  { icon: <FaGithub />, path: "https://github.com/mishafu123", label: "GitHub" },
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/mengxue-fu-b05662326/", label: "LinkedIn" },
  //add twitter later?
];

//added to define the type
type SocialProps = {
  containerStyles?: string;
  iconStyles?: string;
};

const Social: React.FC<SocialProps> = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link key={index} href={item.path} passHref>
            <div className="flex flex-col items-center">
            {/* Icon container with iconStyles */}
            <div className={iconStyles}>
              {item.icon}
            </div>
            {/* label underneath the social buttons */}
            <span className="text-xs mt-1">{item.label}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Social;
