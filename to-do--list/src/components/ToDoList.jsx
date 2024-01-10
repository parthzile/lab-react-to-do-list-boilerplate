import { Component } from "react";


class ToDoList extends Component {

    constructor(){
        super();
        this.state = {
            text : "",
            todo: [],
        }
    }

    render(){
        let {text,todo} = this.state;

        let handleChange = (event) => {
            this.setState({text:event.target.value})
            console.log(text)
        }

        let handleClick = ()=>{
            this.setState({todo:[...todo,text]})
        }

        let handleUpdate = (index) =>{
            let updatedText = prompt("Enter a new Todo")
            let fileredTodo = todo.map((element, i) => {
                if(i== index){
                    return updatedText;
                }

                return element
            })

            console.log(fileredTodo)
            this.setState({
                todo:fileredTodo
            })
        }

        let handleDelete = (index) => {
            let deletedData = todo.filter((element,i) => i!==index)
            console.log(deletedData)
            this.setState({todo:deletedData})
        }

        return(
            <>
                <div className="addTodo">
                    <input type="text" placeholder="Enter new Todo" onChange={handleChange} />
                    <button onClick={handleClick}>ADD TODO</button>
                </div>

                <div className="renderTodo">
                    {todo.map((element,i) => (
                        <div key={i}>
                            <p>{element}</p>
                            <button onClick={()=>handleUpdate(i)}>Update Todo</button>
                            <button onClick={()=>handleDelete(i)}>Delete Todo</button>
                        </div>
                    ))}
                </div>
            </>
        )
    }

}

export default ToDoList