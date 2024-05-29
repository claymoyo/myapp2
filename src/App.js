import logo from './logo.svg';
import './App.css';



//conditional rendering based on props
function ParentCom(){
  return(
    <div>
      <h1>Parent component</h1>
      <ChildCom isloggedin = {true} />
    </div>
  )

}

function ChildCom(props){
  return(
    <div>
      <h1>Child component</h1>
      {props.isloggedin ? <p>Welcome back </p>: <p>please sign up.</p>}
    </div>
  )
}


//passing object as props

function Child(props){
  return(
    <div>
      <p> Name: {props.person.name}</p>
      <p> Age: {props.person.age}</p>
      <p> Color: {props.person.color}</p>

      </div>
  )


}



function Parent(){
  const person= {
    Name: "Jaun",
    Age: 50,
    color: "Black"
  };

  return(
    <div>
      <Child person= {person}/>
    </div>
  )


}

function App() {
  
  <ParentCom />
   
  
}

export default App;
