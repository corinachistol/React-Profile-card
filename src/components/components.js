import { skills } from "./skills"
console.log(skills)

function Avatar( {source, name} ) {
    return (
      <div className="avatar">
        <img src={source} alt={name} />

      </div>
    )
}

function Intro( {name,description} ) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  )
}

function Skill ({color,skills,level}) {
  return (
    <div style={{backgroundColor:color}} className="skill">
      <span>{skills}</span>
      <span>
        {level ==="beginner" && "🧑"}
        {level ==="intermediate" && "👍"}
        {level ==="advanced" && "💪"}
      </span>
    </div>
  )
}

function SkillList() {
    
  return (
    <div className="skill-list">
      {skills.map(skill=>(
        <Skill color={skill.color} skills={skill.skill} level={skill.level} />
      ))}
    </div>
  )
}




export {Avatar, Intro,SkillList}