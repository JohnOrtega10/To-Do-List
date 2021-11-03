import React from "react";

//STYLES
import "../styles/Header.css"

const Header = ({handleAllTodo,handleCompletedTodo,handleResetTodo,component})=>{
    return (
        <header>
            <div className="conteiner-h1">
                <h1>To Do List</h1>
            </div>
            <div className="conteiner-buttons">
                <button onClick={()=>handleAllTodo()}
                className={component===1?"component-selected":"component"}>All</button>
                <button onClick={()=>handleCompletedTodo()}
                className={component===2?"component-selected":"component"}>Completed</button>
                <button onClick={()=>handleResetTodo()}
                className={component===3?"component-selected":"component"}>Reset</button>
            </div>         
        </header>
    );
};

export default Header;