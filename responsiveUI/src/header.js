import React from 'react';
import headerClass from './header.css';
import { Container, Row, Col } from 'react-bootstrap';
import PEAK_PNG from './assets/PEAK_PNG.png'

// get our fontawesome imports
///import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faTumblr, faTwitter } from '@fortawesome/free-brands-svg-icons'

const head = () => {
    return (
        <Container>
            <Row className={headerClass.fullDiv}>
                <Col xs={{ span: 2 }} md={{ span: 1 }} className={headerClass.headSide}>

                </Col>
                <Col xs={{ span: 7, offset: 2 }} md={{ span: 7, offset: 1 }} className={headerClass.search}>

                </Col>
            </Row>
            <Row>
                <Col md={{ span: 12 }} className={headerClass.dark}>
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 12 }} className={headerClass.carousel}>
                    <Col md={{ span: 12 }} className={headerClass.image}>
                        <h1 xs={{ span: 12 }} md={{ span: 5 }} class={headerClass.h1}>
                            Save 10%
                    </h1>

                        <h2 md={{ span: 5 }} xs={{ span: 12 }} className={headerClass.div1}>Ipsum delicata sed ex</h2>
                        <Col md={{ span: 5 }} xs={{ span: 12 }} className={headerClass.div2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Col>
                        <img lg={{ span: 3, offset: 8 }} className="d-none d-md-block" class={headerClass.div3} src={PEAK_PNG} />
                    </Col>
                    <Col><img md={{ span: 3, offset: 8 }} class={headerClass.div4} src={PEAK_PNG} /></Col>
                </Col>
            </Row>
            <Row>
                <Col xs={{ span: 12 }} md={{ span: 4 }} lg={{ span: 3 }} className={headerClass.aside}>
                    <Col className={headerClass.divs1}>#35D3B4</Col></Col>
                <Col xs={{ span: 12 }} md={{ span: 4 }} lg={{ span: 3 }} className={headerClass.aside1}>
                    <Col className={headerClass.divs1}>#35D3B4</Col></Col>
                <Col xs={{ span: 12 }} md={{ span: 4, offset: 3 }} lg={{ span: 3, offset: 1 }} className={headerClass.aside}>
                    <Col className={headerClass.divs2}>#1B2191</Col></Col>
                <Col xs={{ span: 12 }} md={{ span: 4, offset: 3 }} lg={{ span: 3, offset: 1 }} className={headerClass.aside1}>
                    <Col className={headerClass.divs2}>#1B2191</Col></Col>
                <Col xs={{ span: 12 }} md={{ span: 4, offset: 4 }} lg={{ span: 3, offset: 1 }} className={headerClass.aside1}>
                    <Col className={headerClass.divs3}>#D822EE</Col></Col>
                <Col xs={{ span: 12 }} md={{ span: 4, offset: 4 }} lg={{ span: 3, offset: 1 }} className={headerClass.aside}>
                    <Col className={headerClass.divs3}>#D822EE</Col>

                </Col>
                <Col xs={{ span: 12 }} className={headerClass.aside2}>
                    <Col className={headerClass.divs4}>#0e7ae6</Col>

                </Col>
            </Row>
            <Row >
                <Col xs={{ span: 12 }} className={headerClass.footer}>
                    <Row>
                        <Col xs={{ span: 12 }} className={headerClass.footerDiv} md={{ span: 4, offset: 1 }}>
                            <Col xs={{ span: 12 }} className={headerClass.footerHead}> Left Footer Links</Col>
                            <Col xs={{ span: 12 }} className={headerClass.footerHead1}> Left Footer Link One</Col>
                            <Col xs={{ span: 12 }} className={headerClass.footerHead1}> Left Footer Link Two</Col>
                        </Col>

                        <Col xs={{ span: 12 }} className={headerClass.footerDiv} md={{ span: 4, offset: 1 }}>
                            <Col xs={{ span: 12 }} className={headerClass.footerHead}> Left Footer Links</Col>
                            <Col xs={{ span: 12 }} className={headerClass.footerHead1}> Left Footer Link One</Col>
                            <Col xs={{ span: 12 }} className={headerClass.footerHead1}> Left Footer Link Two</Col>
                        </Col>

                    </Row>
                </Col>
            </Row>
        </Container >


    );
}

export default head;
