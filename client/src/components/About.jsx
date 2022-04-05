import React from 'react'
import {Container,Row, Col} from "react-bootstrap";

const About = () => {
  return (
    <>
    <Container style={{marginTop:'50px'}}>
        <h1>Vilka är vi ?</h1>
        <p>Vi är en litet pizzerie i Tullinge i Riksten omrode vi öppnade 2002 ovh vi görm och läverera hemgjörda pizzor från underbara råvaror från intalien. Kvaliettet är vår prioritet.</p>
        <h1>Vår koncept</h1>
        <Row>
            <Col md={6}>
            Vår koncept har alltid varit att laga god mat av färska råvaror för att nå den höga kvalitén. Maten som du äter hos oss ska motsvara dina förväntningar och vara värt priset. Vi eftersträvar en vänlig mottagande av våra gäster. Att du som gäst blir nöjd och belåten är motivationen som gör att vi alltid håller ribban högt.
            </Col>
            <Col md={6}>
            Kvalité och service står i fokus för oss. Våra kunder ska alltid kunna förlita sig på att Pizzeria Pandora gör sitt yttersta för att ge den absolut bästa servicen inom branschen.Vi är stolta över den höga nivån på hänvisningar vi får och vi tror att detta talar för vår professionalism och vårt goda rykte!
            </Col>

            
        </Row>
        <Row>
            <h1>Övrigt</h1>
            <Col  md={3}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, molestias a commodi minus doloremque soluta deserunt sint, maxime ipsum facilis aspernatur reiciendis earum fugiat culpa dolores, corporis voluptate perferendis architecto illo atque sit quis! Provident expedita nam facere accusamus dicta ad, maiores est voluptatem ipsum perspiciatis quo consequuntur excepturi iure?
            </Col>
            
            <Col  md={3}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, molestias a commodi minus doloremque soluta deserunt sint, maxime ipsum facilis aspernatur reiciendis earum fugiat culpa dolores, corporis voluptate perferendis architecto illo atque sit quis! Provident expedita nam facere accusamus dicta ad, maiores est voluptatem ipsum perspiciatis quo consequuntur excepturi iure?
            </Col>

            <Col  md={3}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, molestias a commodi minus doloremque soluta deserunt sint, maxime ipsum facilis aspernatur reiciendis earum fugiat culpa dolores, corporis voluptate perferendis architecto illo atque sit quis! Provident expedita nam facere accusamus dicta ad, maiores est voluptatem ipsum perspiciatis quo consequuntur excepturi iure?
            </Col>

            <Col  md={3}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, molestias a commodi minus doloremque soluta deserunt sint, maxime ipsum facilis aspernatur reiciendis earum fugiat culpa dolores, corporis voluptate perferendis architecto illo atque sit quis! Provident expedita nam facere accusamus dicta ad, maiores est voluptatem ipsum perspiciatis quo consequuntur excepturi iure?
            </Col>

        </Row>
    </Container>
    </>
  )
}

export default About;