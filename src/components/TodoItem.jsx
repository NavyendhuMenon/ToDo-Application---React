import styles from './todoitem.module.css'

export default function TodoItem ({item, todos, setTodos}){

    function handleDelete(item){
        console.log("Delete button clicked for:", item);

       //checks if item which click delete is present in todos array
       //if it is present then it is returned to the setTodo array
       //if doesnot meet the condition it will not get returned hense get removed 
       setTodos( todos.filter((todo)=>todo!==item))
    }

    function handleClick(name){
        console.log("item text clicked", name);

       const newTodos= todos.map ((todo)=>todo.name===name ? {...todo, done:!todo.done} :todo)
        
       setTodos(newTodos)

       console.log(todos);
       
    }

    const isComplted = item.done? styles.completed :""


    return(
        <div className={styles.item}>
          <div className={styles.itemName}>
            <span className={isComplted} onClick={()=>handleClick(item.name)}> {item.name} </span>
            <span>
                <button onClick={()=>handleDelete(item)} className={styles.deleteButton}> x</button>
            </span>
          </div>
            <hr className={styles.line}/>
        </div>
    )
}