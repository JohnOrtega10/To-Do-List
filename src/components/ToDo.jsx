import React from "react";

//STYLES
import "../styles/ToDo.css"
const ToDo = ({title, status, id, handleStatusTodo})=>{
  
    return (
      <section className="todo">
        <div className="conteiner-todo">
          <p>{title}</p>
          <button onClick={() => handleStatusTodo(id)} className={status? "completed" : "reset"}>{status?"Completed":"Reset"}</button>
        </div>
      </section>
        
    );
};

export default ToDo;