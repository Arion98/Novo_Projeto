import {useState, useEffect} from "react";
import LoginService from "../../service/Login-service"
import PropTypes from 'prop-types';
import styles from "../styles/Input.module.css";




const Login = (props) => {
    const [Login, setLogin] = useState({});
    const { id, onSave } = props;
  
    useEffect(() => {
      if (!id) return;
      const load = async () => {
        const loginData = await LoginService.getLogin(id);
        setLogin(loginData);
      };
      load();
    }, [id]);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (props.id) {
        LoginService.updateCarro(props.id, Login)
          .then(() => {
            props.onSave();
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        LoginService.createCarro(Login)
          .then(() => {
            props.onSave();
          })
          .catch((error) => {
            console.log(error);
          });
      }
    };


  
  Login.propTypes = {
    id: PropTypes.number, // Assuming 'id' is a number, adjust accordingly
    onSave: PropTypes.func,
  };

    const handleChange = (e) => {
        setLogin({
            ...Login,
            nome:e.target.value,
        });
    }; 
    const handleChanges = (e) => {
        setLogin({
            ...Login,
                senha:e.target.value,
        });
    };
    

    return(
        <div className={styles.container}>
                  <h1>Formulário de login</h1>
        <form onSubmit={handleSubmit}>
            <div className={styles.input}>
                <label htmlFor="nome">Digite o nome</label>
                <br />
                <input 
                type="text"
                id="nome"
                onChange={handleChange}
                required = {true}
                placeholder="Digite seu nome"
                value={Login.nome ? Login.nome:""}/>
            </div>
            
            <div className={styles.input}>
                <label htmlFor="password">Digite a senha</label>
                <br />
                <input type="password"
                 id="password" 
                 placeholder="Digite sua senha"
                 onChange={handleChanges}
                required = {true} 
                value={Login.senha ? Login.senha:""}/>
            </div>   
            <div>
            <button className={styles.register}>Entrar</button>
            
            </div>   
        </form>
        </div>
    )
}

export default Login