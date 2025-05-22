"use client";

import { useEffect, useState } from "react";
import Loader from "./_components/Loader";
import Banner from "./_components/Banner";
import SkillTabs from "./_components/Skills";
import { getAllSkills } from "./_actions";
import { Skill } from "./_types";

export default function HomePage() {
  const [showLoader, setShowLoader] = useState(true);
  const [skills, setSkills] = useState<Skill[]>([]);
  
  useEffect(() => {
    (async () => {
      const data = await getAllSkills();
      setSkills(data.data);
    })();
  }, []);
  console.log({skills})
  const frontend = skills.filter(
    (skill: Skill) => skill.category === "Frontend"
  );
  const backend = skills.filter(
    (skill: Skill) => skill.category === "Backend"
  );
  const tools = skills.filter((skill: Skill) => skill.category === "Tools");
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      {showLoader ? (
        <Loader />
      ) : (
        <div className="space-y-20">
          <div className="mt-20">
            <Banner />
          </div>
          <div>
            <SkillTabs frontend={frontend} backend={backend} tools={tools} />
          </div>
        </div>
      )}
    </div>
  );
}
