import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Container, DropdownButton, Form, Row, Dropdown} from "react-bootstrap";
import {creatingUnit, editUnit} from "../http/unitAPI";

const EditPage = (effect, deps) => {


    const [message, setMessage] = useState("")

    const [customId, setCustomId] = useState("")
    const [hp, setHp] = useState("")
    const [maxHp, setMaxHp] = useState("")
    const [mana, setMana] = useState("")
    const [maxMana, setMaxMana] = useState("")
    const [armor, setArmor] = useState("")
    const [magResist, setMagResist] = useState("")
    const [roleId, setRoleId] = useState("")
    const [x, setX] = useState("")
    const [y, setY] = useState("")


    const messaging = () => {
        if(roleId) {
            let roleName = ""
            switch (roleId) {
                case 1:
                    roleName = "воин"
                    break
                case 2:
                    roleName = "лучник"
                    break
                case 3:
                    roleName = "волшебник"
                    break
            }
            setMessage(`Вы выбрали класс юнита ${roleName}`)
        } else {
            setMessage(`Вы ещё не выбрали класс юнита`)
        }
    }
    useEffect(
        () => messaging(),
        [roleId]
    )


    const setRoleInButton = (event, roleInButton) => {
        event.preventDefault()
        setRoleId(roleInButton)

    }

    const createUnit = async (event) => {
        const response = await creatingUnit(Number(customId), Number(hp), Number(maxHp), Number(mana),
            Number(maxMana), Number(armor), Number(magResist), Number(roleId), Number(x), Number(y))
        // window.location.reload();
    }
    const editingUnit = async (event) => {
        const response = await editUnit(Number(customId), Number(hp), Number(maxHp), Number(mana),
            Number(maxMana), Number(armor), Number(magResist), Number(roleId), Number(x), Number(y))
        // window.location.reload();
    }

    return (
        <Container className="d-flex justify-content-center align-content-center">
            <Card style={{width: 600}} className="p-5 mt-4">
                <h2 className="m-auto">Создайте или измените юнита</h2>
                <Form className="d-flex flex-column">
                    <Row>
                        <Col>
                            <Form.Control
                                className="mt-4"
                                placeholder="unitId"
                                value={customId}
                                onChange={e => setCustomId(e.target.value)}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Control
                                className="mt-4"
                                placeholder="currentHp"
                                value={hp}
                                onChange={e => setHp(e.target.value)}
                            />
                        </Col>
                        <Col>
                            <Form.Control
                                className="mt-4"
                                placeholder="maxHp"
                                value={maxHp}
                                onChange={e => setMaxHp(e.target.value)}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Control
                                className="mt-4"
                                placeholder="currentMana"
                                value={mana}
                                onChange={e => setMana(e.target.value)}
                            />
                        </Col>
                        <Col>
                            <Form.Control
                                className="mt-4"
                                placeholder="maxMana"
                                value={maxMana}
                                onChange={e => setMaxMana(e.target.value)}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Control
                                className="mt-4"
                                placeholder="armor"
                                value={armor}
                                onChange={e => setArmor(e.target.value)}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Control
                                className="mt-4"
                                placeholder="magResist"
                                value={magResist}
                                onChange={e => setMagResist(e.target.value)}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col className="d-flex justify-content-center align-content-center">
                            <DropdownButton id="dropdown-item-button" title="Class of Unit" className="mt-3" align={{ lg: 'start' }}>
                                <Dropdown.Item onClick={event => setRoleInButton(event, 1)} as="button">Воин</Dropdown.Item>
                                <Dropdown.Item onClick={event => setRoleInButton(event, 2)} as="button">Лучник</Dropdown.Item>
                                <Dropdown.Item onClick={event => setRoleInButton(event, 3)} as="button">Волшебник</Dropdown.Item>
                            </DropdownButton>
                        </Col>
                    </Row>
                    <Row className="d-flex justify-content-center align-content-center text-align: center mt-4">
                        <h4 style={{textAlign: "center"}}>{message}</h4>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Control
                                className="mt-4"
                                placeholder="x"
                                value={x}
                                onChange={e => setX(e.target.value)}
                            />
                        </Col>
                        <Col>
                            <Form.Control
                                className="mt-4"
                                placeholder="y"
                                value={y}
                                onChange={e => setY(e.target.value)}
                            />
                        </Col>
                    </Row>
                    <Row className="d-flex justify-content-between">
                    <Col className="d-flex justify-content-center align-content-end">
                        <Button
                            className="mt-3"
                            variant={"outline-success"}
                            onClick={event => createUnit(event)}>
                            Создать
                        </Button>
                    </Col>
                    <Col className="d-flex justify-content-center align-content-end">
                        <Button
                            className="mt-3 align-self-center"
                            variant={"outline-dark"}
                            onClick={event => editingUnit(event)}>
                            Изменить
                        </Button>
                    </Col>
                    </Row>


                </Form>
            </Card>
        </Container>
    );
};

export default EditPage;