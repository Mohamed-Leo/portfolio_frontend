import {Link} from 'react-router-dom';
import { ScrollParallax } from "react-just-parallax";

// import json files-------------------------
import projects from "../static/jsonfiles/projects.json";
import templates from "../static/jsonfiles/templates.json";

// react bootstrap----------
import { Container, Row , Col , Nav , TabContainer, TabContent, TabPane } from 'react-bootstrap';

import { FaAngleRight } from "react-icons/fa";


export default function Projectssection() {

    // const [templates , setTemplates] = useState();
    // const [projects , setProjects] = useState();

    // useEffect(() => {
    //     // get templates api----
    //     axios.get('https://portfoliobackend-production-d3c2.up.railway.app/api/templates-api').then(response => setTemplates(response.data)).catch(error => console.log(error));

    //     // get projects api----
    //     axios.get('https://portfoliobackend-production-d3c2.up.railway.app/api/projects-api').then(response => setProjects(response.data)).catch(error => console.log(error));
    // } , []);


    return (
        <section className='project_sec' id='projects'>
            <ScrollParallax>
                <Container>
                    <Row>
                        <Col>
                        {/* Start head */}
                            <div className="head">
                                <h2>
                                    projects
                                    <span>
                                        during this journey, I made multiple templates and projects. May it is not that
                                        good but I learned alot from these projects
                                        here are some of these projects.
                                    </span>
                                </h2>
                            </div>
                            {/* End head */}
                            <TabContainer id='projects_tabs' defaultActiveKey={'first'}>
                                {/* Start navigation */}
                                <Nav className='navigation' variant="pills" defaultActiveKey="/home">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">Templates</Nav.Link>
                                    </Nav.Item>

                                    <Nav.Item>
                                        <Nav.Link eventKey="second">Projects</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                {/* End navigation */}

                                {/* Start templates */}
                                <TabContent>
                                    <TabPane eventKey={'first'}>
                                        <Row>
                                        <div className='pro_con'>
                                            {/* Start pro_Boxes */}
                                            <div className="pro_Boxes">
                                                {/* Start box */}
                                                {
                                                    templates.map(temp =>
                                                        <div className="box" style={{"--d" : temp.id - 1}} key={temp.id}>
                                                            <img src={temp.img} alt={temp.name} />
                                                            <div className="over">
                                                                <h5>{temp.name}</h5>
                                                                <Link to={temp.demo} target='_blank'>
                                                                    demo <FaAngleRight className='arrow_icon'/>
                                                                </Link>
                                                                <Link to={temp.repo} target='_blank'>
                                                                    repo <FaAngleRight className='arrow_icon'/>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                                {/* End box */}
                                            </div>
                                            {/* End pro_Boxes */}
                                        </div>
                                        </Row>
                                    </TabPane>
                                </TabContent>
                                {/* End templates */}

                                {/* Start projects */}
                                <TabContent>
                                    <TabPane eventKey={'second'}>
                                        <Row>
                                        <div className='pro_con'>
                                            {/* Start pro_Boxes */}
                                            <div className="pro_Boxes">
                                                {/* Start box */}
                                                {
                                                    projects.map(pro =>
                                                        <div className="box" key={pro.id} style={{"--d" : pro.id - 1}}>
                                                            <img src={pro.img} alt="template-img" />
                                                            <div className="over">
                                                                <h5>{pro.name}</h5>
                                                                {
                                                                    pro.demo && 
                                                                    <Link to={pro.demo} target='_blank'>
                                                                        demo <FaAngleRight className='arrow_icon'/>
                                                                    </Link>
                                                                }
                                                                <Link to={pro.repo} target='_blank'>
                                                                    repo <FaAngleRight className='arrow_icon'/>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                                {/* Start box */}
                                            </div>
                                            {/* End pro_Boxes */}
                                        </div>
                                        </Row>
                                    </TabPane>
                                </TabContent>
                                {/* End projects */}
                            </TabContainer>
                        </Col>
                    </Row>
                </Container>
            </ScrollParallax>
        </section>
    )
}
