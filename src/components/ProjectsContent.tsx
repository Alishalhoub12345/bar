import SearchBar from "./SearchBar.js";
import { useState } from "react";
import Projects from "../assets/Projects/data.json";
import SOLIDERE from "/src/assets/Projects/Images/SOLIDERE - LEBANON.jpg";
import KATARA from "/src/assets/Projects/Images/KATARA RAFFLES & FAIRMONT HOTELS - QATAR.jpg";
import CLEMENCEAU from "/src/assets/Projects/Images/CLEMENCEAU MEDICAL CENTER - RIYADH.jpg";
import ABC from "/src/assets/Projects/Images/ABC - LEBANON.jpg";
import BARWA from "/src/assets/Projects/Images/IMG_0143.jpg";
import LUSAIL_SPORTS from "/src/assets/Projects/Images/Lusail_01.jpg";
import ABDALI from "/src/assets/Projects/Images/22_big.jpg";
import SUPREME from "/src/assets/Projects/Images/supreme-educational-hq.jpg";
import LUSAIL_2 from "/src/assets/Projects/Images/C01.jpg";
import HAMRA from "/src/assets/Projects/Images/som_al_hamra_firdous_20.jpg";
import ADX1 from "/src/assets/Projects/Images/C03.jpg";
import ADX2 from "/src/assets/Projects/Images/C02.jpg";
import AL_MAFRAQ1 from "/src/assets/Projects/Images/C05.jpg";
import AL_MAFRAQ2 from "/src/assets/Projects/Images/C04.jpg";
import HAMAD from "/src/assets/Projects/Images/C06.jpg";
import KING_ABD1 from "/src/assets/Projects/Images/C07.jpg";
import KING_ABD2 from "/src/assets/Projects/Images/C08.jpg";
import FERRARI from "/src/assets/Projects/Images/ferrari-world-abu-dhabi_3.jpg";
import SIDRA1 from "/src/assets/Projects/Images/project-1.jpg";
import ABDALI2 from "/src/assets/Projects/Images/abdali_boulevard_parking_management_system.jpg";
import THE_GATE from "/src/assets/Projects/Images/The-Gate-Mall.jpg";
import VIVA from "/src/assets/Projects/Images/Viva-Bahriya-VB-22-and-23-in-Pearl-Island-Qatar.jpg";
import PRINCESS1 from "/src/assets/Projects/Images/Princess-Nora-bint-Abdul-Rahman-University-4.jpg";
import SIDRA2 from "/src/assets/Projects/Images/WS0_9738.jpg";
import PRINCESS2 from "/src/assets/Projects/Images/Princess-Nora-bint-Abdul-Rahman-University-Saudi-Arabia.jpg";
import NATIONAL from "/src/assets/Projects/Images/National-Convention-Center-Car-Park-(NCC-Car-Park).jpg";
import CLEMENCEAU_LB from "/src/assets/Projects/Images/ClemenceauMedicalCenter.jpg";
import DR_ALI from "/src/assets/Projects/Images/Dr.-Ali-Ftais-Tower-in-Lusail---Qatar.jpg";

export const projects = [
  { id: 1, name: "SOLIDERE", location: "LEBANON", imageSrc: SOLIDERE },
  { id: 2, name: "KATARA RAFFLES & FAIRMONT HOTELS", location: "QATAR", imageSrc: KATARA },
  { id: 3, name: "CLEMENCEAU MEDICAL CENTER", location: "RIYADH", imageSrc: CLEMENCEAU },
  { id: 4, name: "ABC", location: "LEBANON", imageSrc: ABC },
  { id: 5, name: "BARWA COMMERCIAL AVENUE", location: "QATAR", imageSrc: BARWA },
  { id: 6, name: "LUSAIL MULTIPURPOSE SPORTS HALL", location: "QATAR", imageSrc: LUSAIL_SPORTS },
  { id: 7, name: "ABDALI BOULEVARD", location: "AMMAN - JORDAN", imageSrc: ABDALI },
  { id: 8, name: "SUPREME EDUCATION COUNCIL", location: "QATAR", imageSrc: SUPREME },
  { id: 9, name: "LUSAIL MUTIPURPOSE SPORTS HALL", location: "QATAR", imageSrc: LUSAIL_2 },
  { id: 10, name: "HAMRA TOWER", location: "KUWAIT", imageSrc: HAMRA },
  { id: 11, name: "ABU DHABI STOCK EXCHANGE", location: "ABU DHABI", imageSrc: ADX1 },
  { id: 12, name: "ABU DHABI STOCK EXCHANGE", location: "ABU DHABI", imageSrc: ADX2 },
  { id: 13, name: "AL MAFRAQ HOSPITAL", location: "ABU DHABI", imageSrc: AL_MAFRAQ1 },
  { id: 14, name: "AL MAFRAQ HOSPITAL", location: "ABU DHABI", imageSrc: AL_MAFRAQ2 },
  { id: 15, name: "HAMAD MEDICAL HOSPITAL", location: "QATAR", imageSrc: HAMAD },
  { id: 16, name: "KING ABDULLAH SPECIALIST CHILDREN HOSPITAL", location: "KSA", imageSrc: KING_ABD1 },
  { id: 17, name: "KING ABDULLAH SPECIALIST CHILDREN HOSPITAL", location: "KSA", imageSrc: KING_ABD2 },
  { id: 18, name: "FERRARI WORLD", location: "ABU DHABI", imageSrc: FERRARI },
  { id: 19, name: "SIDRA MEDICAL HOSPITAL", location: "QATAR", imageSrc: SIDRA1 },
  { id: 20, name: "ABDALI BOULEVARD", location: "AMMAN - JORDAN", imageSrc: ABDALI2 },
  { id: 21, name: "THE GATE MALL", location: "QATAR", imageSrc: THE_GATE },
  { id: 22, name: "VIVA BAHRIA", location: "PEARL ISLAND - QATAR", imageSrc: VIVA },
  { id: 23, name: "PRINCESS NOURA UNIVERSITY", location: "KSA", imageSrc: PRINCESS1 },
  { id: 24, name: "SIDRA MEDICAL HOSPITAL", location: "QATAR", imageSrc: SIDRA2 },
  { id: 25, name: "PRINCESS NOURA UNIVERSITY", location: "KSA", imageSrc: PRINCESS2 },
  { id: 26, name: "NATIONAL CONVENTION CENTRE CAR PARK", location: "QATAR", imageSrc: NATIONAL },
  { id: 27, name: "CLEMENCEAU MEDICAL CENTRE", location: "LEBANON", imageSrc: CLEMENCEAU_LB },
  { id: 28, name: "DR. ALI FTAIS TOWER", location: "QATAR", imageSrc: DR_ALI },
];

interface Project {
    id: number;
    name: string;
    location: string;
    imageSrc: string;
};

// const projects: Project[] = Projects as Project[];

const ProjectsContent = () => {
    const [search, setSearch] = useState("");

    const filteredProjects = projects.filter((project: Project) =>
        project.name.toLowerCase().includes(search.toLowerCase()) ||
        project.location.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="w-80/100 font-titillium xl:px-30 mx-auto">
            <div className="md:flex pb-5 md:pb-10">
                <div className="text-left">
                    <h1 id="h1" className="font-thin pb-2.5 md:pb-0">SPECIAL PROJECTS</h1>
                    <h3 id="small" className="font-extralight text-gray-600">Browse our landmark references. Use the search to filter by project name.</h3>
                </div>
                <div className="ml-auto w-full md:w-1/2 mt-auto pt-5 md:pt-0">
                    <SearchBar value={search} onChange={setSearch} />
                    <h3 id="x-small" className="font-extralight text-gray-600 text-left">Showing <span className="font-bold"> {filteredProjects.length}</span> projects</h3>
                </div>
            </div>
            <div className="grid grid-col md:grid-cols-2 xl:grid-cols-3 gap-5 mx-auto ">
                {filteredProjects.map((project) => (
                    <div key={project.id} className="bg-white border-gray-200 w-full border mt-auto pb-5 text-left">
                        <img src={project.imageSrc} alt={project.name} className="aspect-square object-cover object-center w-full" loading="lazy"/>
                        <h3 className=" pt-4 ml-5 text-[10px] md:text-[11px] lg:text-[14px] xl:text-[10px] 2xl:text-[14px]">{project.name} - {project.location}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProjectsContent;