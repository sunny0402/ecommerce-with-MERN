import React from 'react';
// row column to use bootstrap grid
import {Container, Row, Col} from 'react-bootstrap';

const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    {/* py padding on y-axis */}
                    <Col className="text-center py-3">
                        Copyright &copy; Alex Web Developer
                    </Col>
                </Row>
            </Container> 
        </footer>
    );
}

export default Footer;
