import React, {useState,useEffect} from 'react';
import './App.css';


//COMPONENTS
import ToDo from './components/ToDo';
import Header from './components/Header';

//STYLES
import "./styles/App.css"

function App() {

  //STATE
  const [todoList, setTodoList] = useState([]);
  const [todoList2, setTodoList2] = useState([]);
  const [component, setComponent] = useState(null);

  //EFFECT
  useEffect(()=>{
    const handleTodoList = async ()=>{
      const response = await fetch("https://jsonplaceholder.typicode.com/todos");
      const result = await response.json();
      const resultTodoList = result.slice(0, 20);
      setTodoList(resultTodoList);
    }
    handleTodoList();
    
  },[])



  //FUNCTION
  const handleStatusTodo = id=>{
    const handleStatusSingleTodo = todoList.map(singleTodo =>(
      singleTodo.id === id ? {...singleTodo, completed: !singleTodo.completed} : singleTodo
    ))
    setTodoList(handleStatusSingleTodo)
   
    if(component===1){
      setTodoList2(handleStatusSingleTodo);
    }else if(component===2){
      setTodoList2(handleStatusSingleTodo.filter(singleTodo=>singleTodo.completed));
    }else{
      setTodoList2(handleStatusSingleTodo.filter(singleTodo=>!singleTodo.completed));
    }
  }

  
  const handleAllTodo = ()=>{
    setTodoList2(todoList);
    setComponent(1);
    
  }

  const handleCompletedTodo = ()=>{
    setTodoList2(todoList.filter(singleTodo=>singleTodo.completed))
    setComponent(2);
    
  }

  const handleResetTodo = ()=>{
    setTodoList2(todoList.filter(singleTodo=>!singleTodo.completed))
    setComponent(3);
    
  }

  return (
    <div className="App">
      {todoList &&(
         <Header
         handleAllTodo={handleAllTodo}
         handleCompletedTodo={handleCompletedTodo}
         handleResetTodo={handleResetTodo}
         component={component}
         />
      )}
      
      {todoList2.length > 0 &&(
          todoList2.map(singleTodo => (
            <ToDo
              key={singleTodo.id}
              title={singleTodo.title}
              status={singleTodo.completed}
              handleStatusTodo={handleStatusTodo}
              id={singleTodo.id}
            />
          ))
        )
      }
     
      
    </div>
  );
}

export default App;
