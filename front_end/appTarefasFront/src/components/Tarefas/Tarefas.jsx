import {useState, useEffect} from "react"
import TarefasService from "../../service/Tarefas-service"
import styles from "../styles/Tarefas.module.css"

const Tarefas = () => {
    const [Tarefas, setTarefas] = useState([]);
    const [page, setPage] = useState(1);
    useEffect(() => {
        fetchTasks();
       }, [page, 2]);
   
       const fetchTasks = async () => {
           const data = await TarefasService.getTarefas(page,2);
           setTarefas([...Tarefas, ...data]);
       };
    return(
        <div className={styles.Container}>
        {Tarefas.map((Tarefas) => (
            <p key={Tarefas.id}>
                <p className={styles.data}>titulo:{Tarefas.titulo}</p>
                <p className={styles.data}>descricao:{Tarefas.descricao}</p>
                <p className={styles.data}>status:{Tarefas.status}</p>
                <p className={styles.data}>data_criacao:{Tarefas.data_criacao}</p>
                <p className={styles.data}>data_limite:{Tarefas.data_limite}</p>
    
            </p>
        ))}
        </div>
    )
}

export default Tarefas