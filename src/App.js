import React, { Fragment } from "react";
import Context from "./Context";
import Provider from "./Provider";

const Agents = () => {
  return <AgentOne />;
};

const AgentOne = () => {
  return <AgentTwo />;
};

const AgentTwo = () => {
  return <AgentBond />;
};

const AgentBond = () => {
  return (
    <Context.Consumer>
      { (context)=>(
        <Fragment>
          <p> Mission Name : {context.data.fname}</p>
          <p> CodeName : {context.data.agent}</p>
          <p> Status : {context.data.accept}</p>
        <button onClick={context.isMissionAccepted}>Change Status</button>
        </Fragment>
      )}
    </Context.Consumer>
      )
};

const App = () => {
  return (
    <Provider>
      <Agents />
    </Provider>
  );
};

export default App;
