
import React, { useState, useEffect } from "react";
import { getProfile, updateProfile } from "../../services/ApiCalls";
import "./ProfileCard.css";
import { Card, Form, Button } from "react-bootstrap";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { userData } from "../../pages/userSlice";
// import { inputHandler } from "../../services/usefull";



export const ProfileCard = () => {

    const [user, setUser] = useState({});
    const [editing, setEditing] = useState(false);
    const [body, setBody] = useState({});

    const datos = useSelector(userData);
    const token = datos?.credentials?.token;

    const editHandler = (body, token) => {
        updateProfile(body, token)
            .then(setEditing(false));
    };

    useEffect(() => {
        if (!editing) {
            getProfile(token).then((res) => {
                setUser(res.data);
            });
        }
    }, [editing]);
    return (
        <Card style={{ width: '30rem' }}>

            <Card.Body>
                <Card.Title>Cita:</Card.Title>
                <Card.Text>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicLastName">
                            <Form.Label>Nombre:</Form.Label>
                            {editing ? (
                                <Form.Control
                                    type="text"
                                    name="lastName"
                                    placeholder={user.lastName}
                                    onChange={(e) => inputHandler(e, setBody)}
                                />
                            ) : (
                                <div>{user.lastName}</div>
                            )}
                        </Form.Group>
                        {/* <Form.Group className="mb-3" controlId="formBasicLastName">
                            <Form.Label>Apellido:</Form.Label>
                            {editing ? (
                                <Form.Control
                                    type="text"
                                    name="lastname"
                                    placeholder={user.lastname}
                                    onChange={(e) => inputHandler(e, setBody)}
                                />
                            ) : (
                                <div>{user.lastname}</div>
                            )}
                        </Form.Group> */}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email:</Form.Label>
                            {editing ? (
                                <Form.Control
                                    type="text"
                                    name="email"
                                    placeholder={user.email}
                                    onChange={(e) => inputHandler(e, setBody)}
                                />
                            ) : (
                                <div>{user.email}</div>
                            )}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Contraseña:</Form.Label>
                            {editing ? (
                                <Form.Control
                                    type="text"
                                    name="password"
                                    placeholder={user.password}
                                    onChange={(e) => inputHandler(e, setBody)}
                                />
                            ) : (
                                <div>{user.email}</div>
                            )}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicDni">
                            <Form.Label>DNI/NIE:</Form.Label>
                            {editing ? (
                                <Form.Control
                                    type="text"
                                    name="dni"
                                    placeholder={user.dni}
                                    onChange={(e) => inputHandler(e, setBody)}
                                />
                            ) : (
                                <div>{user.dni}</div>
                            )}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicAddress">
                            <Form.Label>Dirección:</Form.Label>
                            {editing ? (
                                <Form.Control
                                    type="text"
                                    name="address"
                                    placeholder={user.address}
                                    onChange={(e) => inputHandler(e, setBody)}
                                />
                            ) : (
                                <div>{user.address}</div>
                            )}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicAge">
                            <Form.Label>Edad:</Form.Label>
                            {editing ? (
                                <Form.Control
                                    type="text"
                                    name="age"
                                    placeholder={user.age}
                                    onChange={(e) => inputHandler(e, setBody)}
                                />
                            ) : (
                                <div>{user.age}</div>
                            )}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPhone">
                            <Form.Label>Teléfono:</Form.Label>
                            {editing ? (
                                <Form.Control
                                    type="text"
                                    name="phone"
                                    placeholder={user.phone}
                                    onChange={(e) => inputHandler(e, setBody)}
                                />
                            ) : (
                                <div>{user.age}</div>
                            )}
                        </Form.Group>
                        
                        {editing ? (
                            <Button
                                onClick={() => {
                                    editHandler(body, token);
                                }}
                            >
                                SEND
                            </Button>
                        ) : (
                            <Button
                                onClick={() => {
                                    setEditing(true);
                                }}
                            >
                                EDIT
                            </Button>
                        )}
                    </Form>
                </Card.Text>
            </Card.Body>
        </Card>
    );
};