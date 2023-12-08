/* eslint-disable no-unused-vars */
import styles from "../styles/Input.module.css"
import { Link } from "react-router-dom"
import {useState, useEffect} from "react";
import { useForm } from "react-hook-form";
import { api } from "../../config_axios";

const Register = () => {
    const {register, handleSubmit, reset} = useForm();
    const [tarefas, setTarefas] = useState([]);
    const [aviso, setAviso] = useState("");

    const salvar = async (campos) => {
        try {
          const response = await api.post("usuarios", campos);
          setAviso(`Tarefa cadastrada com sucesso!`);
        } catch (error) {
          setAviso("Erro ao cadastrar tarefa!");
        }
      };

    return(
        <div className={styles.container}>
                  <h1>Novo usuário</h1>
        <form onSubmit={handleSubmit(salvar)}>
            <div className={styles.input}>
                <label htmlFor="username">Nome de acesso</label>
                <br />
                <input 
                type="text" 
                id="username"
                placeholder="nickname"
                required = {true}
                autoFocus = {true}
                {...register("username")}
                
                />
            </div>

            <div className={styles.input}>
                <label htmlFor="Email">Email</label>
                <br />
                <input 
                type="email" 
                id="email"
                placeholder="Digite seu email"
                required = {true}
                autoFocus = {true}
                {...register("email")}
                     
                />
            </div>
            
            <div className={styles.input}>
                <label htmlFor="senha">senha</label>
                <br />
                <input 
                type="password" 
                id="senha" 
                placeholder="Digite sua senha"
                required = {true}
                autoFocus = {true}
                {...register("senha")}
                
                />
            </div>   
            <div>
            <button className={styles.register}>Registrar</button>
            <Link to="/">
            <button >Voltar</button>
            </Link>
            
            </div>   
        </form>
        <div>{aviso}</div>
        </div>
    )
}

export default Register