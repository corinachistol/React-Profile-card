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

      {/* <Skill color="lightblue" skills="HTML+CSS" emoji="👍" />
      <Skill color="yellow" skills="Javascript" emoji="🧑" />
      <Skill color="green" skills="Web Design" emoji="🖔" />
      <Skill color="red" skills="Git and GitHub" emoji="🖔" />
      <Skill color="darkblue" skills="React" emoji="🖔" />
      <Skill color="orange" skills="Svelte" emoji="🖔" /> */}
    </div>
  )
}




export {Avatar, Intro,SkillList}