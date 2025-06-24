
import './App.css'

 interface Actor {
  name: string;
 }

interface CardProps {
  title:string;
  rating?: number;
  isCool?: boolean;
  actors?: Actor[];
}


const Card = ({title , rating = 0, isCool = false, actors=[]}: CardProps) => {
  return (
    <div>
      <h2>{title} {rating} {isCool ? "Cool" : "Not cool "}</h2>
    
    {actors.length > 0 && (
      <ul>
      {actors.map((actor, idx) => (
        <li key={idx}>{actor.name}</li>
      ))}
        </ul>
    )}

    </div>
  ) 
}

const App = () => {
  return (
    <div>s
      <h2>Functional Arrow Component</h2>
      <Card title="One Piece" rating={5} isCool={true} actors={[{name: 'ZORO'}]}/>
      <Card title="One Piece1" rating={1} />
      <Card title="One Piece2" />
      

    </div>
    
  )
  
}

export default App
