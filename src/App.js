import React from 'react';
import FirstName from './containers/firstName';
import LastName from './containers/lastName';
import Score from './containers/score';
import Detail from './containers/detail';


function App() {
  return (
    <div >
      <FirstName></FirstName>
      <hr></hr>
      <LastName></LastName>
      <hr></hr>
      <Score></Score>
      <hr></hr>
      <Detail></Detail>

    </div>
  );
}

export default App;
