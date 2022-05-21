import React, {useEffect, useState} from 'react';
import {fetchUnits, removeUnit} from "../http/unitAPI";
import {Button, Card, Col, Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom";


const UnitBoard = () => {

    const navigate = useNavigate()

    const [units, setUnits] = useState([0])

    useEffect(() => {
        fetchUnits().then(data => setUnits(data))
    }, [])

    const edit = (event) => {
        event.preventDefault()
        navigate("/edit")
    }

    const remove = async (event, customId) => {
        event.preventDefault()
        await removeUnit(customId)
        window.location.reload()
    }




    return (
        <div className="d-flex flex-column align-items-center justify-content-center">
            <Card style={{width: 1200}} className="d-flex m-4 justify-content-center">
                <Button
                    onClick={(event) => edit(event)}
                >
                    Добавить нового юнита
                </Button>
            </Card>
            {
                units.map((unit, pos) => (
                    <Card style={{width: 1200}} className="d-flex m-4 justify-content-center" key={pos} >
                        <Row>
                            <Col className="d-flex flex-row p-5 mt-4 justify-content-center align-items-center">
                            <Card style={{width: 200, fontSize: 20}} className="m-2 text-center">
                                Unit customId {unit.customId}
                            </Card>
                            <Card style={{width: 200, fontSize: 20}} className="m-2 text-center">
                                HP =  {unit.hp}
                            </Card>
                            <Card style={{width: 200, fontSize: 20}} className="m-2 text-center">
                                Mana = {unit.mana}
                            </Card>
                            </Col>
                            <Col className="d-flex flex-row p-5 mt-4 justify-content-center align-items-center">
                                <Button
                                    variant="primary"
                                    size="lg"
                                    className="m-2"
                                    onClick={(event) => edit(event)}
                                >
                                    Изменить
                                </Button>{' '}
                                <Button
                                    variant="secondary"
                                    size="lg"
                                    onClick={(event) => remove(event, unit.customId)}
                                >
                                    Удалить
                                </Button>
                            </Col>
                        </Row>

                    </Card>
                ))
            }
        </div>
    );
};

export {UnitBoard};