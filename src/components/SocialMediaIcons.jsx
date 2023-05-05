import github from "../assets/github.png";
import { GITHUB_LINK, LINKEDIN_LINK } from "../constants/data";

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href={LINKEDIN_LINK}
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src="../assets/linkedin.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href={GITHUB_LINK}
        target="_blank"
        rel="noreferrer"
      >
        <img alt="github-link" src={github} />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
