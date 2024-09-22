import { Calendar } from "phosphor-react";
import SideWayAnimation from "../animation/sideWay";

const Work = () => {
  const workExperience = [
    {
      id: 1,
      title: "Software Engineer",
      company: "WebMob Solutions",
      location: "Mohali",
      date: "April 2024 - Present",
      responsibilities: [
        "Developed a banking application utilizing microservices architecture, incorporating technologies such as Redis and Kafka for enhanced performance and scalability",
        "• Designed and implemented various APIs, including generating Swagger documentation for API endpoints and addressing issues identified by SonarQube.",
        "• Optimized complex codebases and independently built microservice, ensuring efficiency and reliability.",
        "Provided guidance and support to interns and junior team members, fostering their development and integrationinto the team.",
      ],
    },
    {
      id: 2,
      title: "Software Engineer",
      company: "Kommuno",
      location: "Remote",
      date: "Nov 2023 - April 2024",
      responsibilities: [
        "Refactored codebase to optimize database performance by removing unnecessary or redundant code.",
        " Developed JavaScriptscriptsto automate build processes and streamline workflows for efficient project management.",
        " Designed and implemented robust APIsfor call management functionalities including Call Hold, UnHold, Mute,Call Transfer, Unmute. Additionally, optimized key APIs to enhance system performance, ensuring swift response times and superior user experience",
        "Implemented Redisto optimize data throughput and enhance database performance.",
      ],
    },
    {
      id: 3,
      title: "Software Engineer",
      company: "ZapBuild Technologies",
      location: "Mohali",
      date: "Sep 2022 - Oct 2023",
      responsibilities: [
        "Created a full-stack data warehousing system entirely from the ground up, utilizing technologies like Express.js, React,Material UI, and more.",
         "Developed custom APIs from scratch to cater to various user roles, including administrators, suppliers, and customers.",
          "• Established efficient database schemas and tables from scratch in MySQL, enabling features such as inventory management and role-based access control (RBAC), Incoming Transaction is when item added in Store and outgoing is when item bought by any customer.",
          "Admin users gained the ability to manage suppliers and customers, including functions like addition, editing, and deletion.Customers were provided with viewing access to store products, while suppliers could add and manage their own products, all under the administration's oversight."
      ],
    },
  ];

  return (
    <div className="bg-primary  min-h-screen text-white" id="Experience">
      <div className="container mx-auto ">
        <h1 className=" pt-12  md:text-2xl text-xl font-semibold ">
          Professional Journey.
        </h1>
        <p className="pt-3 md:text-xl text-lg text-text">
          Where I've Made an Impact.
        </p>
        <SideWayAnimation side="RIGHT">
          <div className="mx-auto max-w-4xl">
            {workExperience.map((item) => (
              <div key={item.id} className="flex  mt-10">
                <div className="flex-1 md:flex [display:none]  items-center gap-2">
                  <Calendar />
                  {item.date}
                </div>
                <div className="border md:mr-28 mr-16 stepper" />
                <div className="flex-1">
                  <h1 className="md:text-3xl text-2xl font-medium">
                    {item.title}{" "}
                  </h1>
                  <p className="md:text-xl text-lg md:mb-2">
                    {item.company} | {item.location}
                  </p>
                  <div className="flex-1 md:[display:none] flex items-center gap-2 mb-2">
                    <Calendar />
                    {item.date}
                  </div>
                  <ul className="list-disc">
                    {item.responsibilities.map((summery) => (
                      <li className="mb-2 md:text-lg text-sm">{summery}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </SideWayAnimation>
      </div>
    </div>
  );
};
export default Work;
