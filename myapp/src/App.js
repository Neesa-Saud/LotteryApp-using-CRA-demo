import React, { Component } from 'react';
import Lottery from "./Lottery";
class App extends Component {
  render()
  {
    return(
      <div>
       <Lottery  title ="Mini Lotto" numballs={4} maxvalue={25}/>
       <Lottery title="LottoKing" maxvalue={48}/>
      </div>
    );
  }
}
export default App;

