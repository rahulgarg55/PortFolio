/**
 * The `Hero` component represents the hero section of the portfolio website.
 * It displays the user's name, title, and links to their social media profiles and other relevant information.
 * The component uses the `UpDownAnimation` component to create a subtle animation effect.
 * The hero image is displayed on larger screens, while the links are displayed on all screen sizes.
 */
import { Envelope, FileText, GithubLogo, LinkedinLogo, Code, YoutubeLogo } from "phosphor-react";
import UpDownAnimation from "../animation/upDown";
import HeroImage from "../image/hero-img.svg";
const Hero = () => {
  
  const links = [
    {
      title: "Github",
      icon: <GithubLogo size={22} />,
      href: "https://github.com/rahulgarg55",
    },
    {
      title: "LinkedIn",
      icon: <LinkedinLogo size={22} />,
      href: "https://www.linkedin.com/in/rahul-garg-8969b0197/",
    },
    {
      title: "Email",
      icon: <Envelope size={22} />,
      href: "mailto:gargr0109@gmail.com",
    },
    {
      title: "Resumee",
      icon: <FileText size={22} />,
      href: "https://drive.google.com/file/d/1kdwNp244qtguZBRdeQkeXJ_a2k6ejHQv/view?usp=sharing",
    },
    {
      title: "Leetcode",
      icon: <Code size={22} />,
      href: "https://leetcode.com/u/Rahulgarg456/",
    },
    {
      title: "YouTube",
      icon: <YoutubeLogo size={22} />,
      href: "https://www.youtube.com/@CODEWITHRAHUL./videos",  
    }
  ];
  return (
    <div className="bg-primary md:h-screen py-32  text-white  overflow-hidden" id="Home">
      <UpDownAnimation>
        <div className="container flex justify-between items-center m-auto   h-4/5">
          <div>
            <p className="md:text-3xl  sm:text-2xl text-lg mb-2">
              Hey 👋 there! I'm{" "}
            </p>
            <h1 className="md:text-8xl sm:text-6xl text-4xl font-semibold mb-2 whitespace-nowrap">
              Rahul Garg{" "}
            </h1>
            <p className="md:text-3xl sm:text-2xl  text-lg  my-6">
              Mid Level Software Engineer.
              <span className="text-text">
                {" "}
                MERN Full Stack Developer with experience in judicial data systems,
                offline KYC, real-time integrations, microservices and AI/Blockchain.
              </span>
            </p>
            <div className="flex gap-2 flex-wrap">
              {links.map((link) => (
                <a
                  key={link.title}
                  target="_blank"
                  rel="noreferrer"
                  href={link.href}
                >
                  <div className="links">
                    {link.icon}
                    <p>{link.title}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <div className="[width:800px] lg:block [display:none] ">
            <img src={HeroImage} className="w-full h-full" alt="hero" />
          </div>
        </div>
      </UpDownAnimation>
    </div>
  );
};
export default Hero;
