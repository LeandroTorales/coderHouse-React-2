import React, { useContext, useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import Swal from "sweetalert2";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 90px);
  background-color: #000000;
  .container--form {
    background: rgb(156, 150, 255);
    border-radius: 5px;
    background: linear-gradient(
      45deg,
      rgba(156, 150, 255, 1) 42%,
      rgba(0, 212, 255, 1) 100%
    );
    padding: 20px;
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    @media (max-width: 768px) {
      padding: 5px;
      gap: 5px;
    }
  }
  .flex--name {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
  label {
    font-size: 0.9rem;
    color: white;
    span {
      color: red;
    }
  }

  .input--field {
    outline: none;
    border-radius: 10px;
    border: 1px solid #7e7e7e;
    width: 230px;
    height: 50px;
    padding: 15px 20px;
    font-size: 1.2rem;
  }
  button {
    outline: none;
    border: 2px solid blakc;
    color: black;
    background-color: #b6b6b6;
    padding: 15px 30px;
    border-radius: 5px;
    font-size: 1.2rem;
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
      background: black;
      color: white;
      border: 2px solid white;
    }
  }

  #telephoneField {
    border-radius: 0px;
  }
  .children--telephoneNumber {
    background-color: white;
    border-top: 1px solid #7e7e7e;
    border-bottom: 1px solid #7e7e7e;
    border-left: 1px solid #7e7e7e;
    padding: 0px 10px;
  }
  .field--password--flex {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .active {
    border: 2px solid red;
  }
  .active--text {
    color: #d60101;
    text-align: center;
  }
`;

const RegisterContainer = () => {
  const { userData, setUserData, form, setForm } = useContext(userContext);
  console.log("fodadrm:", form);

  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [isValidTelephone, setIsValidTelephone] = useState(true);

  const onChangeField = (e) => {
    const field = e.target.name;
    const value = e.target.value.trim();

    const copyUserData = { ...userData };
    console.log("copyUserData:", copyUserData);
    copyUserData[field] = value;
    return setUserData(copyUserData);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setForm(userData);
    return Swal.fire({
      title: "❤ Gracias por registrarte ❤",
      timer: 3000,
    });
  };

  const regexEmail = (email) => {
    const value = email.target.value;
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const res = re.test(value);
    if (res) {
      onChangeField(email);
      return setIsValidEmail(true);
    } else {
      return setIsValidEmail(false);
    }
  };

  const regexPassword = (password) => {
    /*
Tiene que contener al menos 8 caracteres, 1 numero, 1 letra minuscula, 1 mayuscula
Contain at least 8 characters
contain at least 1 number
contain at least 1 lowercase character (a-z)
contain at least 1 uppercase character (A-Z)
contains only 0-9a-zA-Z
*/
    const value = password.target.value;
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    const res = re.test(value);
    if (res) {
      onChangeField(password);
      return setIsValidPassword(true);
    } else {
      return setIsValidPassword(false);
    }
  };

  const regexTelephone = (tel) => {
    const value = tel.target.value;
    const re = /^\+?[0-9][0-9]{7,14}$/;
    const res = re.test(value);
    if (res) {
      onChangeField(tel);
      return setIsValidTelephone(true);
    } else {
      return setIsValidTelephone(false);
    }
  };

  return (
    <div>
      {form.name !== "" ? (
        <StyledForm>
          <div className="container--form">
            <h2>Tu usuario:</h2>
            <span>Nombre: {form.name}</span>
            <span>Apellido: {form.surname}</span>
            <span>Email: {form.email}</span>
          </div>
        </StyledForm>
      ) : (
        <StyledForm onSubmit={onSubmit}>
          <div className="container--form">
            <div className="flex--name">
              <FormControl isRequired>
                <FormLabel>Nombre</FormLabel>
                <Input
                  type="text"
                  name="name"
                  onChange={onChangeField}
                  placeholder="Nombre"
                  className="input--field"
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Apellido</FormLabel>
                <Input
                  type="text"
                  name="surname"
                  onChange={onChangeField}
                  placeholder="Apellido"
                  className="input--field"
                />
              </FormControl>
            </div>
            <FormControl isRequired isInvalid={!isValidEmail}>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                name="email"
                onChange={regexEmail}
                placeholder="Dirección email"
                className={`input--field ${isValidEmail ? "" : "active"}`}
              />
              {isValidEmail ? (
                ""
              ) : (
                <FormErrorMessage
                  className={isValidEmail ? "" : "active--text"}
                >
                  Ingrese un email correcto.
                </FormErrorMessage>
              )}
            </FormControl>
            <FormControl
              isRequired
              isInvalid={!isValidPassword}
              className="field--password--flex"
            >
              <div>
                <FormLabel>Contraseña</FormLabel>
                <Input
                  type="password"
                  name="password"
                  onChange={regexPassword}
                  placeholder="Contraseña"
                  className={`input--field ${isValidPassword ? "" : "active"}`}
                  autoComplete="true"
                />
              </div>
              {isValidPassword ? (
                ""
              ) : (
                <FormErrorMessage
                  className={isValidPassword ? "" : "active--text"}
                >
                  La contraseña debe tener un minimo de 8 caracteres en total, 1
                  numero, 1 letra minúscula y 1 letra mayúscula.
                </FormErrorMessage>
              )}
            </FormControl>

            <FormControl isRequired isInvalid={!isValidTelephone}>
              <FormLabel>Telefono</FormLabel>
              <InputGroup className="telephone--field">
                <InputLeftAddon
                  children="+54"
                  className={`children--telephoneNumber ${
                    isValidTelephone ? "" : "active"
                  }`}
                />
                <Input
                  type="tel"
                  name="phone"
                  onChange={regexTelephone}
                  placeholder="Numero de telefono"
                  className={`input--field ${isValidTelephone ? "" : "active"}`}
                  id="telephoneField"
                />
              </InputGroup>
              {!isValidPassword ? (
                ""
              ) : (
                <FormErrorMessage
                  className={isValidTelephone ? "" : "active--text"}
                >
                  Ingrese un numero de telefono valido.
                </FormErrorMessage>
              )}
            </FormControl>

            <Button type="submit" disabled={!(userData.name !== "")}>
              {" "}
              Registrarse
            </Button>
            <p>
              ¿Ya tienes una cuenta? <Link to="/login">Iniciar sesión</Link>
            </p>
          </div>
        </StyledForm>
      )}
    </div>
  );
};

export default RegisterContainer;
