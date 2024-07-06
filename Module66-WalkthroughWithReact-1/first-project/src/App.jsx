import React from "react";
import Person from "./Person";
import Button from "./Button";
import Header from "./Header";
import List from "./List";

const App = () =>{
  const handleClick = () =>{
    alert('Button Clicked ! ')
  }
  return(
    <div>
      <section>
        <div style={{color: "green", fontSize: "30px"}}>Question 1</div>
      <h2>Person Information</h2>
      <Person name="Sagar Suri" age={23} gender='Male' />
      <Person name="Priyanka Vadra" age={53} gender='Female' />
      <Person name="Kiran Tyagi" age={22} gender='Female' />
      <Person name="Akhilesh Yadav" age={45} gender='Male' />
      </section>
      <br />
      <section>
        <div style={{color: "green" , fontSize: "30px"}}>Question 2</div>
        <br />
        <div>
          <Button text="Click Me" onClick={handleClick} />
        </div>
        <br />
        <br />
      </section>

      <section>
      <div style={{color: "green" , fontSize: "30px"}}>Question 3</div>
      <Header title="I Am The Dictator" />
      </section>
      <br />
      <br />
      <section>
      <div style={{color: "green" , fontSize: "30px"}}>Question 4</div>
      <List items="book's" />
      <List items="video's" />
      <List items="audio's" />
      </section>
    </div>
  )
}

export default App