
import { useState } from "react"
import styles from "./form.module.css"


export default function Form({todos, setTodos}) {
    const [todo, setTodo] = useState({name: "", done: false});
    const [error, setError] = useState(""); 

    
    function handleSubmit(e) {
        e.preventDefault();

        if (todo.name.trim() === "") {
            setError("Please enter a valid todo item.");
            setTimeout(()=>{setError("")},1200)
            return;
        }

        setTodos([...todos, todo]);
        setTodo({name: "", done: false});
        setError(""); 
    }

    return (
        <>
            {error && <div className={styles.errorMessage}>{error}</div>}

            <form className={styles.todoform} onSubmit={handleSubmit}>
                <div className={styles.inputContainer}>
                    <input
                        className={styles.modernInput}
                        onChange={(e) => setTodo({name: e.target.value, done: false})}
                        value={todo.name}
                        type="text"
                        placeholder="Enter todo item..."
                    />
                    <button className={styles.modernButton} type="submit">Add</button>
                </div>
            </form>
        </>
    );
}