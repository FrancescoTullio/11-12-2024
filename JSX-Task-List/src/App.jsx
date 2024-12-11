import tasks from "../../tasks"

function App() {

  const compliteElem = [];
  const uncompliteElem = [];

  tasks.forEach((curTask) => {
    if (curTask.state === "completed") {
      compliteElem.push(curTask);
    } else {
      uncompliteElem.push(curTask)
    }
  })

  //  console.log(compliteElem)
  //  console.log(uncompliteElem)


//genero la lista per i complited task
   const complitedList = compliteElem.map((curTask, index) =>{ return <li key={index}>
    <p><strong>{curTask.title}</strong> <span className="my-bg-green">{curTask.state}</span></p>
    <p>priority: {curTask.priority}</p>
    <p>est.time: {curTask.estimatedTime}</p>
   </li>})



//genero la lista per gli uncomplited task
  const uncomplitedList = uncompliteElem.map((curTask, index) => { return <li key={index}>
    <p><strong>{curTask.title}</strong> <span>{curTask.state}</span></p>
    <p>priority: {curTask.priority}</p>
    <p>est.time: {curTask.estimatedTime}</p>
  </li>
  })

//qui c'è il return che torna in pagina
  return (
    <>
    <h1>task manager</h1>
    <p className="bold-txt"><strong>current task ({uncomplitedList.length})</strong></p>
    <ul>{uncomplitedList}</ul>
    

    <hr />
    <p><strong>complited task ({complitedList.length})</strong></p>
    <ul>{complitedList}</ul>
    </>
  )
}

export default App
