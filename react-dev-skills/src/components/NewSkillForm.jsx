import React from "react";
import { useState } from "react";
import "./NewSkillForm.css";


const NewSkillForm = ({ setSkill, skills }) => {
    const [newSkill, setNewSkill] = useState({ name:"", level:3 })
   
   
    const handleFunction = (event) =>{
        event.preventDefault();
        const updatedSkill = {
            ...newSkill,
            [event.target.name]: event.target.value,
            
        }
        setNewSkill(updatedSkill)
        console.log('this is newSkill = ', updatedSkill);   
    }

    const submitSkill = (event) => {
        event.preventDefault();
        const updatedSkills = [...skills]
        updatedSkills.push(newSkill)
        setSkill(updatedSkills);
        console.log('this is skills post clicking submit =', skills)

    }
    
    return (
        <div>
        <form className="NewSkillForm" onSubmit={submitSkill}>
            <label>Skill</label>
            <input name='name' value={newSkill.name} onChange={handleFunction}></input>
            <label>Level</label>
            <select name='level' value={newSkill.level} onChange={handleFunction}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                
                </select>
            <button type="submit">ADD SKILL</button>
        </form>
        </div>
    );
};

export default NewSkillForm;