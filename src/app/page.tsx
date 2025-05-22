import Banner from "./_components/Banner";
import SkillTabs from "./_components/Skills";
import { getAllSkills } from "./_actions";
import { Skill } from "./_types";
import Raper from "./_components/Raper";

export default async function HomePage() {

const {data:skills} =await getAllSkills();
  

 

  return (
    <Raper>
      <div className="relative">
        <div className="space-y-20">
          <div className="mt-20">
            <Banner />
          </div>
          <div>
            <SkillTabs skills={skills} />
          </div>
        </div>
      </div>
    </Raper>
  );
}
