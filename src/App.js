import './App.css';
import Component1 from './Component1';
import Component2 from './Component2';
import Component3 from './Component3';
import Component4 from './Component4';
import Component5 from './Component5';
import Component6 from './Component6';


const obj = {
  number: 1,
  string: "Заголовок",
  boolean: true,
  object: {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqp-AWY5ReusEhXoEzrRYc1rIYZQ-63CloeQ&s' 
  },
  metod: function(){
   console.log("Click");
  },
  array: [1,2,4,5]    
}

function App() {
  return (
    <div className="App">
      <Component1 data={obj}></Component1>
      <Component2 data={obj}></Component2>
      <Component3 data={obj}></Component3>
      <Component4 data={obj}></Component4>
      <Component5 data={obj}></Component5>
      <Component6 data={obj}></Component6>
   </div>
  );
}

export default App;


