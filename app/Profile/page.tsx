"use client";
import {useState} from "react";
import { LazyMotion, domAnimation, m, motion } from "framer-motion";
import Image from "next/image";
import DashRefineImage from "../../public/DashRefineImage.jpeg";
import BrainWave from "../../public/BrainWave.png";
import TruckingMgt from "../../public/TruckingMgt.jpeg";
import MarketPadi from "../../public/MarketPadi.jpeg"
import Aora from "../../public/AoraReact.jpeg";
import  AremxyPlugLogo from "../../public/AremxyPlugLogo.jpeg";
import GitIcon from "../../public/Git.svg";
import NFTIcon from "../../public/NFT.jpeg"
import QoutientRentIcon from "../../public/QuotientRent.jpeg"
import ChatGPTRent from "../../public/ChatGPTLandingPage.png";
import { AnimatePresence } from "framer-motion";
;

/**
 * Stable Framer Motion setup for Next.js App Router
 * No profile image in hero – text-first positioning
 */
type certInfoProp = {
  id : number,
  platform : string,
  year : string,
  thumbnail : string
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18 } },
};


// Project data (replace images + content as needed)
const projects = [
    {
    name: "AremxyPlug Customer Dashboard",
    image: AremxyPlugLogo,
    gitHubLink : "/",
    userInterface : "https://aremxyplug.com",
    tools: ["React" , "Javascript","Node.js", "eslint", "REST API","Managing third party service", "Dependencies"],
    problem:
      "I managed a team to help build a digital and Telecommunication solutions for users",
  },

    {
    name: "Dashboard_with_Refine",
    image: DashRefineImage,
    gitHubLink : "https://github.com/balodimgithub/Dashboard_with_Refine",
    userInterface : "https://dashrefine.netlify.app/",
    tools: ["React", "Refine Framework", "TypeScipt", "GraphQL", "Node.js", "eslint", "netlify", "vite"],
    problem:
      "The use of Refine framework to build a dashboard, charts and kanban that helps organisation assign and track employees tasks progress across departments including companies in collaborations within a timeframe.",
  },

  {
    name: "NFT MarketPlace",
    image: NFTIcon ,
    gitHubLink : "https://github.com/balodimgithub/NFT_APP",
    userInterface : "",
    tools: ["React Native", "Typescript", "Tailwind", "Node.js", "Expo"],
    problem:
      "Creating means for sellers with Non-fungible Tokens (NFTs) to reach wider audiences and facilitate trustful transactions.",
  },

  {
    name: "Flair-React Native",
    image: Aora,
     gitHubLink : "https://github.com/balodimgithub/Flair-React-Native-Application",
    userInterface : "",
    tools: ["React Native", "Expo", "Typescript", "AppWrite(Storage and Database)","Tailwind"],
    problem:
      "This is an app used to create and share multimedias with friends and family members.",
  },
   {
    name: "BrainWave Landing Page",
    image: BrainWave,
     gitHubLink : "https://github.com/balodimgithub/MODERN_AI_APP",
    userInterface : "https://modern-ai-user-interface.netlify.app/",
    tools: ["React", "vite","Tailwind", "netlify"],
    problem:
      "Beautiful and responsive AI landing page",
  },
   {
    name: "MarketPadi",
    image: MarketPadi,
    gitHubLink : "/",
    userInterface : "/",
    tools: ["React", "Next.js", "TypeScipt", , "Node.js", "eslint", "Vercel"],
    problem:
      "Market for Producers and clients",
  },
 
    {
    name: "AremxyPlug Admin Dashboard",
    image: AremxyPlugLogo,
    gitHubLink : "/",
    userInterface : "/",
    tools: ["React", "Javascript","Node.js", "eslint", "RestAPI"],
    problem:
      "Admin dashboard to help track user's activity acting as a backend for the customer design dashboard.",
  },
    {
    name: "QuotientRent",
    image: QoutientRentIcon,
    gitHubLink : "https://github.com/balodimgithub/Apartment-rent-landingPage",
    userInterface : "https://quotient-rent.netlify.app/",
    tools: ["HTML", , "javascript", "CSS", "netlify",],
    problem:
      "A Landing Page on Real estate home and accomodation matters and issues",
  },
   {
    name: "CHATGPT Instance",
    image: ChatGPTRent,
    gitHubLink : "https://github.com/balodimgithub/ChatGpt-instance",
    userInterface : "https://chat-gpt-instance.netlify.app/",
    tools: ["HTML" , "javascript", "CSS", "netlify"],
    problem:
      "A mild replication of the ChatGpt landing page",
  },
  {
    name: "Onye ji cashie",
    image: TruckingMgt,
     gitHubLink : "https://github.com/balodimgithub/Onye_ji_cashie",
    userInterface : "https://baloonyejicashie.netlify.app/",
    tools: ["React", ,"Tailwind", "Nodejs", "netlify"],
    problem:
      "Trucking Management",
  }
];



const certInformation  = [
  {id : 1, title : "Professional certificate from Axia Africa", platform :"Axia Africa", year : "2023", thumbnail :"../../CertAxia.jpeg"},
  {id :2, title : "INTERNSHIP At AREMXYPLUG", platform :"AREMXYPLUG", year : "Aug 2023 - Dec 2023", thumbnail : "../../INTERNSHIP CERTIFICATE - OLADIMEJI.jpg"},
  {id :3, title : "Help aspiring engineers to learn about web technologies and attain certificates", platform :"SCHOOL PROJECT", year : "2024", thumbnail :"../../Technova.jpeg"},
  {id :4, title : "Organising, coordinating and teaching aspiring developers the world of engineering", platform :"WEBDEVCONSTRUCT", year : "2024", thumbnail : "../../WebDevConstruct.jpeg"}
]
export default function Profile() {
     const [activeCert, setActiveCert] = useState(false)
  return (
    <LazyMotion features={domAnimation}>
      <main className="relative min-h-screen bg-black text-gray-100 overflow-hidden">
        {/* Ambient background */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(0,255,136,0.14),transparent_45%),radial-gradient(circle_at_85%_90%,rgba(0,255,136,0.1),transparent_50%)]" />

        {/* HEADER / POSITIONING STATEMENT */}
        <section className="relative z-10 max-w-5xl mx-auto px-6 pt-28 pb-32 text-center">
          <m.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-3xl md:text-5xl font-bold leading-tight"
          >
            Production-ready engineering built on
            <span className="text-green-400"> speed, structure</span>, and
            <span className="text-green-400"> vision</span>
          </m.h1>

          <m.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-8 text-gray-400 text-base md:text-lg leading-relaxed"
          >
            With 3+ years of experience, I have developed strong problem-solving
            capabilities that make me production-ready — ranging from designing
            scalable architectural structures for complex projects to delivering
            solutions quickly by equipping myself with high-velocity tools such as
            Windsurf and GitHub Copilot, while maintaining a forward-looking vision
            in machine learning shaped through continuous reading and learning.
          </m.p>
        </section>
        <section className="relative z-10 max-w-7xl mx-auto px-6 pb-32">
           <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Certificates and voluntary activities
            </h2>
            <p className="text-gray-400 max-w-2xl mb-16">
               Moving from the grounds of thorough and intense learning to a space with teams which challenged me to up-scale
               not only my skills but my adaptability and understanding of syncing system design and architecture with organisation plans
               and feature-based systems aimed for profitability.
                </p>
          </motion.div>
          <div className="flex flex-wrap RecentPost   gap-4">
          {certInformation?.map((cert, index)=> ( 
          <motion.div key={index}
  layoutId={`cert-${cert.id}`}
  whileHover={{ y: -6 }}
  className="group w-150 h-100 h- cursor-pointer rounded-lg border border-green-500/20 bg-[#121212] overflow-hidden"
  //onClick={() => setActiveCert(true)}
>
  <div className="relative aspect-16/11 overflow-hidden">
    <motion.img
      src={cert.thumbnail}
      alt={cert.title}
      className="h-full w-full"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.4 }}
    />
  </div>

  <div className="p-4">
    <h3 className="text-white font-medium">{cert.title}</h3>
    <p className="text-sm text-gray-400">
      {cert.platform} · {cert.year}
    </p>
  </div>
  <AnimatePresence>
  {activeCert && (
    <motion.div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setActiveCert(false)}
    >
      <Image
     //   layoutId={`cert-${cert.id * 4}`}
     width ={300} height={200}
        src={cert.thumbnail}
        alt={cert.title}
        className="max-h-[90vh] max-w-[90vw] rounded-lg"
        onClick={(e) => e.stopPropagation()}
      />
    </motion.div>
  )}
</AnimatePresence>
</motion.div>


          ))}
          </div>

        </section>


   {/* Making an Impact */}
<div className ="w-full flex flex-col gap-10 my-10 justify-center items-center px-3">
     <div className="flex flex-col items-center gap-2 w-full font-sans">
  <h1 className="text-[46px] text-center text-green-400  font-bold">Making an Impact </h1>
  <p className="text-2xl font-semibold text-center text-white">Contribution for the Past Twelve Months, 
    making sure the software in AremxyPlug maintain the production standard</p>
    </div>
  <div className="w-full justify-center flex px-3"> 
  <Image src={"/TwelveMonthsContribution.png"} 
    width={500} height={300} alt={"Contribution"}/>
  </div>

</div>


        {/* PROJECTS SECTION */}
        <section className="relative z-10 max-w-7xl mx-auto px-6 pb-32">
          <m.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Selected <span className="text-green-400">Projects</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mb-16">
              Each project reflects real market problems solved through thoughtful
              architecture, modern tooling, and user-focused execution.
            </p>
          </m.div>

          <m.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          >


         

            {projects.map((project) => (
              <m.article 
                key={project.name}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 180, damping: 20 }}
                className="group relative rounded-2xl border border-green-400/20 bg-black/60 backdrop-blur overflow-hidden"
              >
                {/* Project image */}
                <div className="relative h-44 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.name} preview`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>

                {/* Content */}
                <div className=" p-6">
                  <div className="flex items-center">
                  <h3 className="text-xl font-semibold mb-3 text-green-400">
                    {project.name}
                    {(project.gitHubLink?.length < 2 && project.userInterface?.length < 2) && (
                   <p className="text-xl font-semibold mb-3 text-green-400" >
                    (Code and UI are Confidential)
                   </p>
                    )}
                  </h3>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed mb-5">
                    {project.problem}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-xs px-3 py-1 rounded-full border border-green-400/30 text-green-300"
                      >
                        {tool}
                      </span>
                    ))}
                 {project?.gitHubLink?.length > 1 && (
                  <a href={project.gitHubLink}>
                      <Image src={GitIcon}   className={"text-xs px-3 py-1 rounded-full border border-green-400/30 text-green-300"}
                      width={50} height={50}  alt="Code Icon"
              />
              </a>  
                 )}
               {project.userInterface?.length > 1 && (
              <a href={project.userInterface} className={"text-xs px-3 flex py-1 align-self justify-self rounded-full border border-green-400/30 text-green-300"}>
                User Interface
              </a>
               )}
              </div>
          
           
                </div>

                {/* Glow hover */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition shadow-[0_0_35px_rgba(0,255,136,0.18)]" />
              </m.article>
            ))}
          </m.div>
        </section>
      </main>
    </LazyMotion>
  );
}
