import React from 'react'
import { Container, Row, Col, Table, Image} from "react-bootstrap";
import {FiPhoneCall} from "react-icons/fi"
import {MdEmail} from "react-icons/md"
import { ImMobile} from  "react-icons/im"
const Contact = () => {
    return (
        <>
            <Container style={{ marginTop: "50px" }}>
                <Row>
                    <Col md={6}>
                        <h1>Pandora Kontact</h1>
                        <h6>Öppetider:</h6>
                        <p>Mån-Fre. 10:00-21:00</p>
                        <p>Lör-Sön. 11:00-21:00</p>
                        <Table striped bordered hover className='text-center'>
                            <thead>
                                <tr>
                                    <th className='bg-warning text-center' colSpan={3}>
                                        --- Kontakt information ---
                                    </th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        < ImMobile />
                                        </td>
                                    <td>Mobil</td>
                                    <td>070868755</td>
                                </tr>
                                <tr>
                                    <td>
                                        < FiPhoneCall />
                                        </td>
                                    <td>Telefon</td>
                                    <td>08057858</td>
                                </tr>
                                <tr>
                                    <td>
                                        < MdEmail />
                                        </td>
                                    <td>Email</td>
                                    <td>info.i@info.com</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                    <Col md={6}>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Contact