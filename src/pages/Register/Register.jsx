import React, { useState } from "react";
import "./Register.css";
import { InputText } from "../../common/InputText/InputText";
import { Form, Button, Card, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { registerMe } from "../../services/apiCalls";
import { ClinicButton } from "../../common/clinicButton/clinicButton";


export const Register = () => {

    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const [userError, setUserError] = useState({});

    //SENDING FORM REGISTER
    const submitHandler = (e, body) => {
        e.preventDefault();
        registerMe(body)
            .then(() => {
                navigate("/login");
            })
            .catch((error) => {
                setUserError({ credentials: error.response.data.message });
            });
    };

    return (
        <div className="registerDesign">
            <Container fluid className="d-flex justify-content-center align-items-center mt-4">
                <Card className="registerCard"
                    style={{
                        backgroundColor: 'rgba(64, 139, 209, 0.607)',
                        borderRadius: '8.7em',
                        boxShadow: 'rgba(0, 0, 0, 0.2) 0em 3.5em 3em -0.5em'
                    }}>
                    <Card.Body >
                        <Card.Title className="text-center mb-3 display-5"
                            style={{
                                textShadow: '0.05em 0.05em 0.06em rgba(0, 0, 0, 0.5)',
                            }}>Registro</Card.Title>
                        <Form>
                            <Form.Group as={Row} className="mb-2 mt-4">
                                <Form.Label column xs={4} md={4} lg={4}>Nombre:</Form.Label>
                                <Col>
                                    <InputText
                                        type={"text"}
                                        design={
                                            userError.nameError === ""
                                                ? "normalInputRegister"
                                                : "normalInputRegister errorInput"
                                        }
                                        placeholder={"Ingrese su nombre..."}
                                        name={"name"}
                                        state={setUser}
                                        errorState={setUserError}
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-2">
                                <Form.Label column xs={4} md={4} lg={4}>Apellido:</Form.Label>
                                <Col>
                                    <InputText
                                        type={"text"}
                                        design={
                                            userError.lastnameError === ""
                                                ? "normalInputRegister"
                                                : "normalInputRegister errorInput"
                                        }
                                        placeholder={"Ingrese su apellido..."}
                                        name={"lastname"}
                                        state={setUser}
                                        errorState={setUserError}
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-2">
                                <Form.Label column xs={4} md={4} lg={4}>Email:</Form.Label>
                                <Col>
                                    <InputText
                                        type={"email"}
                                        design={
                                            userError.emailError === ""
                                                ? "normalInputRegister"
                                                : "normalInputRegister errorInput"
                                        }
                                        placeholder={"Ingrese su email..."}
                                        name={"email"}
                                        state={setUser}
                                        errorState={setUserError}
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-2">
                                <Form.Label column xs={4} md={4} lg={4}>Contraseña:</Form.Label>
                                <Col>
                                    <InputText
                                        type={"password"}
                                        design={
                                            userError.passwordError === ""
                                                ? "normalInputRegister"
                                                : "normalInputRegister errorInput"
                                        }
                                        placeholder={"Ingrese su contraseña..."}
                                        name={"password"}
                                        state={setUser}
                                        errorState={setUserError}
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-2">
                                <Form.Label column xs={4} md={4} lg={4}>DNI/NIE:</Form.Label>
                                <Col>
                                    <InputText
                                        type={"text"}
                                        design={
                                            userError.dniError === ""
                                                ? "normalInputRegister"
                                                : "normalInputRegister errorInput"
                                        }
                                        placeholder={"Ingrese su dirección..."}
                                        name={"address"}
                                        state={setUser}
                                        errorState={setUserError}
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-2">
                                <Form.Label column xs={4} md={4} lg={4}>Dirección:</Form.Label>
                                <Col>
                                    <InputText
                                        type={"text"}
                                        design={
                                            userError.addressError === ""
                                                ? "normalInputRegister"
                                                : "normalInputRegister errorInput"
                                        }
                                        placeholder={"Ingrese su dni..."}
                                        name={"dni"}
                                        state={setUser}
                                        errorState={setUserError}
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-2">
                                <Form.Label column xs={4} md={4} lg={4}>Teléfono:</Form.Label>
                                <Col>
                                    <InputText
                                        type={"text"}
                                        design={
                                            userError.phoneError === ""
                                                ? "normalInputRegister"
                                                : "normalInputRegister errorInput"
                                        }
                                        placeholder={"Ingrese su teléfono..."}
                                        name={"phone"}
                                        state={setUser}
                                        errorState={setUserError}
                                    />
                                </Col>
                            </Form.Group>
                            {userError?.credentials ? (
                                <div>{userError.credentials}</div>
                            ) : (
                                <div></div>
                            )}
                            <div className="text-center">
                                <ClinicButton
                                    onClick={(e) =>
                                        submitHandler(e, user)
                                    }
                                    text={'Registrarme!'}
                                />
                            </div>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
};