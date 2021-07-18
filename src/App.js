import React,{Fragment} from 'react'
import Context from './context/context'
import Provider from './context/provider'

const Agents = () => {
  return(
    <Agentone />
  )
}
const Agentone = () => {
  return(
    <Agenttwo />
  )
}
const Agenttwo = () => {
  return(
    <AgentBond />
  )
}
const AgentBond = () => {
  return(
    <Context.Consumer>
      {
        (context) => (
          //consume the context here
          <Fragment>
            <h3>Agent Information</h3>
            <p>Mission Name: {context.data.mname}</p>
            <p>Mission code: {context.data.agent}</p>
            <p>Mission States: {context.data.accept}</p>
            <button onClick = {context.isMissionAccepted}>You want to Join Please Accept</button>
          </Fragment>
        )
      }

    </Context.Consumer>
  )
}

const App = () => {
  return (
    <div>
        <h1>Context</h1>
        <Provider>
        <Agents />
        </Provider>
    </div>
  )
}

export default App
