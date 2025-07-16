import About from "@/components/About";
import ContactMe from "@/components/ContactMe";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
// import WorkExperience from "@/components/WorkExperience";
import Link from "next/link";
import { ArrowLongUpIcon } from '@heroicons/react/24/solid'
import { PageInfo, Project, Skill, Social } from "@/typings";
import { fetchPageInfo } from "@/utils/fetchPageInfo";
// import { fetchExperiences } from "@/utils/fetchExperience";
import { fetchSocials } from "@/utils/fetchSocial";
import { fetchSkills } from "@/utils/fetchSkills";
import { fetchProjects } from "@/utils/fetchProjects";


export default async function Home() {
  const pageInfo: PageInfo = await fetchPageInfo();
  // const experiences: Experience[] = await fetchExperiences();
  const socials: Social[] = await fetchSocials();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  return (
    <div className=" bg-[rgb(36,36,36)]  text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden scroll-smooth z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Header socials={socials} />

      <section id="hero" className="snap-start mt-20">
        <Hero pageInfo={pageInfo}/>
      </section>

      <section id="about" className="snap-center">
        <About pageInfo={pageInfo}/>
      </section>

      {/* <section id="experience" className="snap-center">
        <WorkExperience />
      </section> */}

      <section id="skills" className="snap-start">
        <Skills skills={skills}/>
      </section>

      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>
      {/* contact me */}
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>
      <Link href="#hero">
        <footer className="sticky w-full cursor-pointer bottom-5">
          <div className="flex justify-center items-center">
            <ArrowLongUpIcon className="h-10 w-10 text-[#F7AB0A]/80 bg-gray-600 rounded-full p-3 hover:shadow-[0_0_5px_#F7AB0A]" />
          </div>
        </footer>
      </Link>
    </div>


  );
}


