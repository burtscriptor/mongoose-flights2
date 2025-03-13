import SkillListItem from "./SkillListItem";    

const SkillList = ( { skills } ) => {
console.log(skills);
    const SkillListItems = skills.map((s, index) => <SkillListItem key={index} name={s.name} level={s.level} />)
    return (
          
             <ul>{SkillListItems}</ul>
          
            );
        };

export default SkillList;