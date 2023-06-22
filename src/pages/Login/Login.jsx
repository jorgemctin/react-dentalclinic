import React, { useState } from "react";
import jwt_decode from "jwt-decode";
import "./Login.css";
import { InputText } from "../../common/InputText/InputText";
import { checkError } from "../../services/usefull";
import { loginMe } from '../../services/apiCalls';
import { useNavigate } from "react-router-dom";


  export const Login = () => {
    //Instanciamos useNavigate dentro de la constante navigate
    const navigate = useNavigate();
  
    const [credentials, setCredentials] = useState(
    //   {
    //   email: "",
    //   password: "",
    // }
    );
  
    const [credentialsError, setCredentialsError] = useState({
      emailError: "",
      passwordError: "",
    });
  
    const [welcome, setWelcome] = useState("");

    const InputHandler = (e) => {
      setCredentials((prevState) => ({
        ...prevState,
        //En este punto es donde el handler
        //asigna el valor a la propiedad adecuada....
  
        [e.target.name]: e.target.value,
      }));
    };
  
    const inputHandler = (e) => {
      //Ahora vamos a proceder a bindear o atar los inputs mediante
      //la presente función handler a sus correspondientes estados en el hook, que
      //ahora se llama credentials.
  
      setCredentials((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    };
  
    const inputCheck = (e) => {
      let mensajeError = checkError(e.target.name, e.target.value);
  
      setCredentialsError((prevState) => ({
        ...prevState,
        [e.target.name + "Error"]: mensajeError,
      }));
      // checkError(e.target.name, e.target.value); ver que hace
    };
  
    const logMe = () => {
      loginMe(credentials)
        .then((resultado) => {
          let decodificado = jwt_decode(resultado.data.token);
          console.log(resultado.data.token)
          console.log(decodificado);
  
          setTimeout(() => {
            navigate("/");
          }, 2000);
  
          setWelcome(`Bienvenid@ de nuevo ${decodificado.fullname}`);
        })
        .catch((error) => console.log(error));
    };

  return (
    <div className="loginDesign">
      {welcome !== "" ? (
        <div>{welcome}</div>
      ) : (
        <div>
          {/* La utilidad de la siguiente linea es renderizar un hook at tiempo real en el DOM */}
          {<pre>{JSON.stringify(credentials, null, 2)}</pre>}

          <InputText
            // type, design, placeholder, name, functionHandler, onBlurFunction
            type={"email"}
            design={
              credentialsError.emailError === ""
                ? "normalInput"
                : "normalInput errorInput"
            }
            placeholder={"Email...."}
            name={"email"}
            functionHandler={inputHandler}
            onBlurFunction={inputCheck}
          />
          <div className="errorText">{credentialsError.emailError}</div>
          <InputText
            // type, design, placeholder, name, functionHandler, onBlurFunction
            type={"password"}
            design={
              credentialsError.passwordError === ""
                ? "normalInput"
                : "normalInput errorInput"
            }
            placeholder={"Password...."}
            name={"password"}
            functionHandler={inputHandler}
            onBlurFunction={inputCheck}
          />
          <div className="errorText">{credentialsError.passwordError}</div>

          <div onClick={() => logMe()} className="botonLogin">
            Inicia Sesión
          </div>
        </div>
      )}
    </div>
  );
};














//   return (
//     <div className="loginDesign">
//     {<pre>{JSON.stringify(credentials, null,2)}</pre>}

//       {/* <div className="navLogin">
//         <ChangeView path={"/"} name={"Home"} />
//         <ChangeView path={"/register"} name={"Register"} />
//       </div> */}

//       <div className="loginForm">
//         <InputText 
//             type={"email"}
//             placeholder={"email..."}
//             name={"email"}
//             classDesign={"InputText"}
//             functionHandler={InputHandler}
//         />
//         <InputText 
//             type={"password"}
//             placeholder={"password..."}
//             name={"password"}
//             classDesign={"InputText"}
//             functionHandler={InputHandler}
//         />
//       </div>
//     </div>
//   );
// };