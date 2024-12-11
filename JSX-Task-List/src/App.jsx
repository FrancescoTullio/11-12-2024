import tasks from "../../tasks"

function App() {

  const compliteElem = [];
  const uncompliteElem = [];

  tasks.forEach((curTask) => {
    if(curTask.state === "completed") {
      compliteElem.push(curTask);
    } else {
      uncompliteElem.push(curTask)
    }
  })

  const uncomplitedListElem = () => {
    return uncompliteElem.map((curElem, index) => {
      <li key={index}>
        <p>{curElem.title}<span>{curElem.state}</span></p>
        <p>priority: {curElem.priority}</p>
        <p>est. time: {curElem.estimatedTime}</p>
      </li>
    })
  }

  const complitedListElem = () => {
    return compliteElem.map ((curElem, index) => {
      <li key={index}>
        <p>{curElem.title}<span>{curElem.state}</span></p>
        <p>priority: {curElem.priority}</p>
        <p>est. time: {curElem.estimatedTime}</p>
      </li>
    })
  }

  return (
    <>
      <h1>task manager</h1>
      <p>current task ({uncompliteElem.length})</p>
      <ul>{uncomplitedListElem()}</ul>
    </>
  )
}

export default App
