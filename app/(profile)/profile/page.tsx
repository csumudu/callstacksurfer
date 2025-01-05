import NGIcon from "@/components/icons/angular";
import JSIcon from "@/components/icons/js";
import NodeIcon from "@/components/icons/node";
import ReactIcon from "@/components/icons/react";
import TSIcon from "@/components/icons/ts";
import React from "react";

const contact = [
  {
    name: "Email",
    icon: "/images/links/email.svg",
    value: "csumudu@gmail.com",
  },
  {
    name: "TP",
    icon: "/images/links/tp.svg",
    value: "+94 710 933 270",
  },
];

const links = [
  {
    name: "Linkedin",
    icon: "/images/links/linkedin.svg",
    value: "https://www.linkedin.com/in/sumudu-jayasinghe",
  },
  {
    name: "Github",
    icon: "/images/links/github.svg",
    value: "https://github.com/csumudu",
  },
];
const primarySkills = [
  {
    name: "js",
    icon: <JSIcon />,
  },
  {
    name: "ts",
    icon: <TSIcon />,
  },
  {
    name: "ng",
    icon: <NGIcon />,
  },
  {
    name: "react",
    icon: <ReactIcon />,
  },
  {
    name: "node",
    icon: <NodeIcon />,
  },
];
const otherSkills: any = [
  {
    name: "Graphql",
  },
  {
    name: "RestAPI Integration",
  },
  {
    name: "Cybersecurity",
  },
  {
    name: "Rust",
  },
  {
    name: "Go",
  },
  {
    name: "Python",
  },
  {
    name: "Java",
  },
  {
    name: "Nextjs",
  },
  {
    name: "Docker",
  },
  {
    name: "WebAssembly",
  },
  {
    name: "Redux",
  },
  {
    name: "RXJS",
  },
  {
    name: "NGRX",
  },
  {
    name: "HTML",
  },
  {
    name: "CSS",
  },
  {
    name: "JQuery",
  },
  {
    name: "ELK Stack",
  },
  {
    name: "AWS Serverless Development",
  },
];
const certifications: any = [
  {
    name: "AWS Certified Developer – Associate",
    icon: "aws-certified-developer-associate.png",
    link: "https://www.credly.com/badges/dd7d50c8-270b-465a-86a2-cfbc5d88c844/public_url",
  },
  {
    name: "AWS Certified Solutions Architect – Associate",
    icon: "aws-certified-solutions-architect-associate.png",
    link: "https://www.credly.com/badges/ed3d1913-8fb7-44aa-8527-0c6e67b39c8d/public_url",
  },
  {
    name: "Oracle Certified Associate, Java SE 7 Programmer",
    icon: "oracle-certified-associate-java-se-7-programmer.png",
    link: "https://www.credly.com/badges/2c615a76-228a-4fd3-827b-75879df2ea55/public_url",
  },
  {
    name: "CompTIA Security+ ce Certification",
    icon: "comptia-security-ce-certification.png",
    link: "https://www.credly.com/badges/57097c18-53b9-4831-9595-06a62fa2e581/public_url",
  },
  {
    name: "Certified in Cybersecurity (CC)",
    icon: "certified-in-cybersecurity-cc.png",
    link: "https://www.credly.com/badges/76b1b110-f930-4566-a27e-12c16e717d07/public_url",
  },
  {
    name: "Enterprise Design Thinking Practitioner",
    icon: "Badges_v8-07_Practitioner.png",
    link: "https://www.credly.com/badges/9395d8a0-48dc-4fe9-ab5b-3b92c0c548dc/public_url",
  },
  {
    name: "Other Badges...",
    icon: "credly.png",
    link: "https://www.credly.com/users/sumudu-jayasinghe",
  },
];

const interests = [
  "Mathematics",
  "Machine Learning",
  "Generative AI",
  "Sports",
  "Voluntary services",
];

export default function MyProfile() {
  return (
    <div className="md:px-20 flex justify-center flex-col items-center">
      <h1 className="text-5xl font-thin">Sumudu Jayasinghe</h1>
      <div className="pt-4">
        {contact.map((c) => (
          <div className="flex md:gap-5" key={c.name}>
            <img src={c.icon} className="w-5"></img>
            <div>{c.value}</div>
          </div>
        ))}
      </div>
      <div className="pb-10 flex gap-5 pt-5">
        {links.map((lnk) => (
          <a
            href={lnk.value}
            target="_blank"
            key={lnk.name}
            className="w-10 rounded-full border-solid bottom-4 border-gray-900"
          >
            <img src={lnk.icon}></img>
          </a>
        ))}
      </div>

      <h2 className="text-xl font-medium p-4 pb-3">Primary Skills</h2>
      <div className="pb-10 flex flex-wrap gap-2 md:gap-5 justify-center items-center">
        {primarySkills.map(({ icon, name }) => (
          <div
            key={name}
            className="rounded-lg overflow-hidden border shadow-2xl p-3"
          >
            {React.cloneElement(icon)}
          </div>
        ))}
      </div>

      <h2 className="text-xl font-medium p-2 pb-3">Other Skills</h2>
      <div className="pb-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {otherSkills.map(({ name }: any) => (
          <div key={name} className="rounded-lg border-2 px-3 py-2 bg-white">
            {name}
          </div>
        ))}
      </div>

      <h2 className="text-xl font-medium p-2 pb-3">Certifications</h2>
      <div className="pb-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {certifications.map(({ icon, name, link }: any) => (
          <a
            href={link}
            target="_blank"
            key={name}
            className="flex shadow-2xl p-4 flex-col justify-center items-center rounded-lg "
          >
            <img src={`/images/badges/${icon}`} className="w-52" />
            <div className="font-light pt-2">{name}</div>
          </a>
        ))}
      </div>

      <h2 className="text-xl font-medium p-2 pb-3">Other Interests</h2>
      <div className="pb-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
        {interests.map((int) => (
          <div key={int} className="rounded-lg border-2 px-3 py-2 bg-white">
            {int}
          </div>
        ))}
      </div>
    </div>
  );
}
