import styles from "../styles/Input.module.css"
import { Link } from "react-router-dom";
import {useState, useEffect} from "react";
import { useForm } from "react-hook-form";
import { api } from "../../config_axios";

const registerTarefas = () =>{
    const {register, handleSubmit, reset} = useForm();
    const [tarefas, setTarefas] = useState([]);
    const [aviso, setAviso] = useState("");

    const salvar = async (campos) => {
        try {
          const response = await api.post("tarefas", campos);
          setAviso(`Tarefa cadastrada com sucesso!" ${response.data.id}`);
        } catch (error) {
          setAviso("Erro ao cadastrar tarefa!");
        }
      };
    return(
        <div className={styles.container}>
            <h1>Cadastro de tarefas</h1>
        <form onSubmit={handleSubmit(salvar)}>
            <div className={styles.input}>
                <label htmlFor="titulo">Titulo</label>
                <br />
                <input type="text" 
                id="titulo"
                placeholder="Digite um titulo"
                {...register("titulo")}/>
            </div>
            
            <div className={styles.input}>
                <label htmlFor="descricao">Descrição</label>
                <br />
                <input 
                type="text" 
                id="descricao" 
                placeholder="Insira uma descrição"
                {...register("descricao")} />
            </div>
            <div className={styles.input}>
                <label htmlFor="status">Status</label>
                <br />
                <input type="text"
                 id="status" 
                 placeholder="Insira a pendencia da tarefa"
                 {...register("status")} />
            </div>  
            <div className={styles.input}>
                <label htmlFor="data_criacao">data de criação</label>
                <br />
                <input type="date"
                 id="data_criacao" 
                 placeholder="Insira uma data" 
                 {...register("data_criacao")}/>
            </div>
            <div className={styles.input}> 
                <label htmlFor="data_limite">Data Final</label>
                <br />
                <input type="date"
                 id="data_limite" 
                 placeholder="Insira uma data" 
                 {...register("data_limite")}/>
            </div>    
            <div>
            <button className={styles.register}>Cadastrar</button>
            <Link to="/">
            <button >Voltar</button>
            </Link>
            </div>   
        </form>
        </div>
    )
}

export default registerTarefas