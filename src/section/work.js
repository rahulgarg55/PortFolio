import { Calendar } from "phosphor-react";
import SideWayAnimation from "../animation/sideWay";

const Work = () => {
  const workExperience = [
    {
      id: 1,
      title: "Mid Level Software Engineer",
      company: "Jupitice Justice Technologies Pvt. Ltd.",
      location: "IT Park, Chandigarh",
      date: "Aug 2025 - Present",
      responsibilities: [
        "Built production-grade solutions for Supreme Court and High Court websites by fetching and processing real-time judicial data for government use.",
        "Delivered Offline KYC solutions with strong validation, compliance checks, and data accuracy for real-world applications.",
        "Processed NHAI datasets, structured large government data, and prepared it for database ingestion.",
        "Designed and optimized database schemas for high-volume government data handling and implemented caching to reduce database load.",
        "Created automation scripts to clean, transform, and manage large datasets, improving operational reliability.",
        "Implemented WhatsApp Business API integration with Meta Business Manager and Webhooks for real-time messaging and event handling.",
        "Deployed feature branches across multiple servers and coordinated closely with QA teams to validate edge cases and ensure stable releases."
      ],
    },
    {
      id: 2,
      title: "MERN Full Stack Developer",
      company: "Basta Tech Solutions Pvt. Ltd.",
      location: "Mohali, India",
      date: "Oct 2023 - Jul 2025",
      responsibilities: [
        "Led a team of 4 developers to design and deploy BastaxCasino, a full-stack casino gaming platform for European markets, including admin and affiliate panels.",
        "Architected MongoDB schemas from scratch for real-time transaction processing and scalability, supporting 99.9% uptime.",
        "Built 100+ RESTful APIs for game betting, affiliate commission tracking, and admin workflows with Node.js and React.js dashboards.",
        "Spearheaded DevOps using Nginx reverse proxy, PM2 monitoring, Termius deployments, Docker, and CI/CD pipelines to reduce deployment time by 50%.",
        "Implemented Banking microservices using Redis and Kafka for scalable performance and fault tolerance.",
        "Supported iGaming integrations by testing API connections between RGS and slot games, analyzing logs, and verifying business logic during audits.",
        "Developed a decentralized AI/Blockchain application with Role-Based Access Control inspired by UMA Protocol, delivering secure user, admin, and moderator workflows.",
        "Generated Swagger API documentation and resolved SonarQube issues to improve code quality and maintainability."
      ],
    },
    {
      id: 3,
      title: "Full Stack MERN Developer",
      company: "Zapbuild Technologies",
      location: "Mohali, India",
      date: "Mar 2022 - Oct 2023",
      responsibilities: [
        "Built a full-stack data warehousing system from scratch using Express.js, React, Material UI, and custom backend APIs.",
        "Designed and implemented role-aware APIs for administrators, suppliers, and customers.",
        "Created MySQL database schemas for inventory management and RBAC with incoming/outgoing transaction tracking.",
        "Enabled admin workflows to manage suppliers and customers, while supplier and customer dashboards handled product management and viewing."
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