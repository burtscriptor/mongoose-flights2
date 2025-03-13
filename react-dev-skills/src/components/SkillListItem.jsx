import "./SkillListItem.css";

const SkillListItem = ({ name, level }) => {
    return <li className='SkillListItem'>{ name } <div className="level">Level { level } </div> </li>
};

export default SkillListItem;