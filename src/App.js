import React from 'react';


class App extends React.Component{
  constructor ( props )
  {
    super( props );

    this.state = {
      num1: "", 
      num2: "",
      result: "" ,
      value : "Addition"
      
    };
  }

handlenum1 = ( event ) =>{
 // const num1 = (event.target.validity.valid) ? event.target.value : this.state.num1;
 //this.setState({ num1 });
    if (event.target.validity.valid) 
    {
      this.setState({
        num1: event.target.value
      })
    }
    else
    {
      this.setState({
        result: "please Enter a numerical value"
      })
    } 
    
}

handlenum2 = ( event ) =>{
  if (event.target.validity.valid) 
  {
    this.setState({
      num2: event.target.value
    })
  }
  else
  {
    this.setState({
      result: "please Enter a numerical value"
    })
  } 
  
}
submit = (event) =>{
  event.preventDefault();   
  //const value =  event.target.getAttribute('value');
  switch (this.state.value){

    case "Addition" :
    this.setState({result : parseInt(this.state.num1) + parseInt(this.state.num2)})
    break;

    case "Subtraction" :
      this.setState({result : parseInt(this.state.num1) - parseInt(this.state.num2)})
    break;

    case "Multiplication" :
      this.setState({result : parseInt(this.state.num1) * parseInt(this.state.num2)})
    break;
    
    case "Division" :
      this.setState({result : parseInt(this.state.num1) / parseInt(this.state.num2)})
    break;
    
    default:
        this.setState(
          { 
            result : " Please select Operation"
          })
    break;
    }

}


ChangeState = (event) =>{

  this.setState({value: event.target.value});
  
}

render()
{
  return(
    <>
        <h1>Welcome to my Calculator App!</h1>
        <form onSubmit = {this.submit}>  
          <label htmlFor="num1">
            Input 1:<br/>
            <input
              type="text"
              name="num1"
              id="num1"
              pattern="[0-9]*"
              required
              value={this.state.num1}
              onChange = {this.handlenum1} />    
          </label>
          <br/><br/>
          <label htmlFor = "operation">
            Operation: <br/>
          <select id = "calc" value={this.state.value} onChange ={this.ChangeState} >
              <option value = "Addition"> + </option>
              <option value = "Subtraction"> - </option>
              <option value = "Multiplication"> * </option>
              <option value = "Division"> / </option>
          </select>
          </label>
          <br/><br/>
          <label htmlFor="num2">
            Input 2:<br/>
            <input
              type="text"
              name="num2"
              id="num2"
              pattern="[0-9]*"
              required
              value={this.state.num2} 
              onChange = {this.handlenum2}/>    
          </label>
          <br/><br/>
          <input type="submit" value="Calculate"  />
          <br/>
          <p>Result: {this.state.result}</p>
          </form>
    </>

  );
}

}

export default App;
