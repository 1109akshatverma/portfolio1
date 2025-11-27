import React from "react";
import Heading from "./Heading";

const About = () => {
  const aboutData = [
    "I am Akshat Verma, a Cloud Engineer passionate about designing, deploying, and optimizing cloud-native infrastructure. With a strong academic foundation in Computer Science Engineering and hands-on experience across multiple cloud platforms, I enjoy building solutions that are scalable, secure, and efficient. I believe in continuous learning, practical experimentation, and applying technology to solve real-world challenges.",

    "In my current role at Spektra Systems, I work on building and managing virtualized learning labs on CloudLabs, a global platform that enables hands-on cloud training at scale. I design and develop labs across AWS, Azure, and GCP, ensuring each environment is reliable, cost-efficient, and optimized for performance. My responsibilities include automating manual workflows using PowerShell, implementing Infrastructure as Code for consistent deployments, and continuously optimizing templates to reduce deployment time, minimize failures, and enhance overall lab stability. I also contribute to creating comprehensive lab guides, improving documentation standards, and assisting users by troubleshooting issues, debugging deployment errors, and ensuring a smooth learning experience from start to finish.",

    "During my earlier Cloud Engineer Trainee role at Spektra Systems, I worked extensively with AWS services like EC2, S3, IAM, VPC, NAT, CloudFormation, ECS, Lambda, SNS, CloudWatch, and Amazon Bedrock Guardrails. On Azure, I gained experience with Networking, Compute, Storage Accounts, App Services, Entra ID, Automation, and scripting. I also worked with Docker and Terraform to automate infrastructure deployments and build containerized workflows—strengthening my ability to work across both cloud and DevOps environments.",

    "I’m driven by curiosity, adaptability, and a strong desire to grow in the cloud and DevOps ecosystem. I enjoy simplifying complex problems, learning new technologies, and contributing to efficient engineering solutions. With certifications, hands-on projects, and industry exposure, I am continuously working towards becoming a versatile cloud professional capable of delivering high-quality, production-ready infrastructure. My goal is to keep learning, keep building, and make a meaningful impact through technology.",
  ];

  return (
    <section id="about" className="py-14 bg-black/10">
      <div className="flex items-center justify-center flex-col">
        <Heading heading={"about me"} />
        <h1 className="text-2xl md:text-4xl font-bold mt-3 bg-clip-text text-transparent bg-linear-to-r from-yellow-500 to-cyan-400  uppercase tracking-[1px] mb-2">
          Professional Profile
        </h1>
        <p className="text-sm md:text-md opacity-40 tracking-[1px] text-center px-2">
          Building modern, scalable web applications with clean code and
          powerful user experiences
        </p>

        <div className="max-w-200 mt-10 px-6 md:px-0">
          <div className="relative px-6 border-l text-justify py-3 border-white/10">
            {aboutData.map((d, i) => {
              return (
                <p
                  key={i}
                  className="text-[15px] leading-7 text-white/75 mb-5 hover:text-white transition-all duration-300"
                >
                  {d}
                </p>
              );
            })}

            <div className="absolute inset-0 -z-8 bg-linear-to-r from-cyan-500/5 to-yellow-500/5 opacity-90 blur-sm "></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
