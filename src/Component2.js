function Component2(props){
    return(
      
       <ul> 
        {props.data.array.map((item)=> <li>{item}</li>)}
    </ul>
    
   
    );
}

export default Component2;