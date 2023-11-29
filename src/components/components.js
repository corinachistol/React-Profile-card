
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

function Skill ({color,skills,emoji}) {
  return (
    <div style={{backgroundColor:color}} className="skill">
      <span>{skills}</span>
      <span>{emoji}</span>
    </div>
  )
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill color="lightblue" skills="HTML+CSS" emoji="🖔" />
      <Skill color="yellow" skills="Javascript" emoji="🖔" />
      <Skill color="green" skills="Web Design" emoji="🖔" />
      <Skill color="red" skills="Git and GitHub" emoji="🖔" />
      <Skill color="darkblue" skills="React" emoji="🖔" />
      <Skill color="orange" skills="Svelte" emoji="🖔" />
    </div>
  )
}




export {Avatar, Intro,SkillList}