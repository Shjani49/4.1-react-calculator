import React from 'react';


class App extends React.Component{
  constructor ( props )
  {
    super( props );

    this.state = {
      num1: "", 
      num2: "",
      result: "" 
    };
  }

render()
{
  return(
    <>
        <h1>Welcome to my Calculator App!</h1>
        <form>
          <label htmlFor="num1">
            Input 1:<br/>
            <input
              type="text"
              name="num1"
              id="num1"
              required
              value={this.state.num1} />    
          </label>
          <br/><br/>
          <label htmlFor = "operation">
            Operation: <br/>
          <select>
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
              required
              value={this.state.num2} />    
          </label>
          <br/><br/>
          <input type="submit" value="Calculate" />
          <br/>
          <p>Result:</p>
          </form>
    </>

  );
}

}

export default App;
