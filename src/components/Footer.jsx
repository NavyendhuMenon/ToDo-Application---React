import styles from './footer.module.css'


export default function Footer({completedTodosCount , totalTodos}){
    return (
    <div className={styles.footer}>

        <span className={styles.item}>
            Completed Todos : {completedTodosCount}
        </span>
        <span className={styles.item}>
            Total Todos : {totalTodos}
        </span>


    </div>

    )
}