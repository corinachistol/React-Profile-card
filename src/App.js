import {Avatar, Intro, SkillList} from './components/components'
export default function App() {
    return (
      <div className="card">

        <Avatar source="../91-450x250.jpg" name="profile picture" />

        <div className="data">
          <Intro name="Jonas Schmedtmann"  description="Full-stack web developer and teacher at Udemy. When not coding or preparing a course, I like to play board games, to cook (and eat), or to just enjoy the Portuguesse sunt at the beach."/>
      
          <SkillList />
        </div>
      </div>
    );
  }
  