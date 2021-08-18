import {
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  Button
} from "shards-react";

import {
  FaLinkedin,
  FaGithub,
  FaTwitter} from 'react-icons/fa';

  import {
    CgWebsite} from 'react-icons/cg';


export default function Team(props){
  return (
    <div className="colorize-icons" style={{paddingTop: "100px", paddingBottom: "100px"}}>
      <div className="container">
        <h2 className="blue" style={{fontWeight: "800", marginBottom: "6rem"}}>
          Meet the Team
        </h2>
        <div className="row justify-content-center">
          <div className="d-flex justify-content-center col col-12 col-md-6 col-xl-3 text-left mb-xl-5 mb-5">
            <Card style={{ maxWidth: "300px"}}>
              <CardImg alt="Majd Hailat" top src="/images/team/color/majd.png" />
              <CardBody style={{height: "180px"}}>
                <CardTitle>Majd Hailat</CardTitle>
                <p>Founder & Lead Developer</p>
                <div style={{position: "absolute", bottom: "30px"}}>
                  <a href="https://www.linkedin.com/in/majd-hailat-033389197/" target="_blank"><FaLinkedin style={{paddingLeft: "0", marginLeft: "0"}}/></a>
                  <a href="https://github.com/majd64" target="_blank"><FaGithub /></a>
                  <a href="https://twitter.com/Majd_Hailat" target="_blank"><FaTwitter /></a>
                </div>
              </CardBody>
            </Card>
          </div>

          <div className="d-flex justify-content-center col col-12 col-md-6 col-xl-3 text-left mb-xl-5 mb-5">
            <Card style={{ maxWidth: "300px" }}>
              <CardImg alt="Maxim Sindall" top src="/images/team/color/max.png" />
              <CardBody style={{height: "180px"}}>
                <CardTitle>Maxim Sindall</CardTitle>
                <p>Co-Founder & Partnerships Manager</p>
                <div style={{position: "absolute", bottom: "30px"}}>
                  <a href="https://www.linkedin.com/in/maxim-s-245a86116/" target="_blank"><FaLinkedin style={{paddingLeft: "0", marginLeft: "0"}}/></a>
                  <a href="https://twitter.com/maximsindall?lang=en" target="_blank"><FaTwitter /></a>
                </div>
              </CardBody>
            </Card>
          </div>

          <div className="d-flex justify-content-center col col-12 col-md-6 col-xl-3 text-left mb-xl-5 mb-5">
            <Card style={{ maxWidth: "300px" }}>
              <CardImg alt="Andrew" top src="/images/team/color/andrew.png" />
              <CardBody style={{height: "180px"}}>
                <CardTitle>Andrew Evanyshyn</CardTitle>
                <p>Graphic Designer</p>
                <div style={{position: "absolute", bottom: "30px"}}>
                  <a target="_blank" href="https://www.linkedin.com/in/andrew-evanyshyn-a66481211/"><FaLinkedin style={{paddingLeft: "0", marginLeft: "0"}}/></a>
                </div>
                </CardBody>
            </Card>
          </div>

          <div className="d-flex justify-content-center col col-12 col-md-6 col-xl-3 text-left mb-xl-5 mb-5">
            <Card style={{ maxWidth: "300px" }}>
              <CardImg alt="Long Hong Wang" top src="/images/team/color/longHong.png" />
              <CardBody style={{height: "180px"}}>
                <CardTitle>LongHong Wang</CardTitle>
                <p>Blockchain Developer & Backend Engineer</p>
                <div style={{position: "absolute", bottom: "30px"}}>
                  <a href="https://www.linkedin.com/in/wanglonghong/" target="_blank"><FaLinkedin style={{paddingLeft: "0", marginLeft: "0"}}/></a>
                  <a href="https://github.com/wanglonghong" target="_blank"><FaGithub /></a>
                </div>
              </CardBody>
            </Card>
          </div>

          <div className="d-flex justify-content-center col col-12 col-md-6 col-xl-3 text-left mb-xl-5 mb-5">
            <Card style={{ maxWidth: "300px" }}>
              <CardImg alt="Tarj Mecwan" top src="/images/team/color/tarj.png" />
              <CardBody style={{height: "180px"}}>
                <CardTitle>Tarj Mecwan</CardTitle>
                <p>Social Media Marketing Director</p>
                <div style={{position: "absolute", bottom: "30px"}}>
                  <a href="https://twitter.com/tarjmecwan" target="_blank"><FaTwitter style={{paddingLeft: "0", marginLeft: "0"}}/></a>
                  <a href="https://github.com/TarjMecwan" target="_blank"><FaGithub /></a>
                </div>
              </CardBody>
            </Card>
          </div>

          <div className="d-flex justify-content-center col col-12 col-md-6 col-xl-3 text-left mb-xl-5 mb-5">
            <Card style={{ maxWidth: "300px" }}>
              <CardImg alt="Mark Nicholson" top src="/images/team/color/mark.png" />
              <CardBody style={{height: "180px"}}>
                <CardTitle>Mark Nicholson</CardTitle>
                <p>Head of Cyber Security</p>
                <div style={{position: "absolute", bottom: "30px"}}>
                  <a href="https://www.linkedin.com/in/markusnicholson/" target="_blank"><FaLinkedin style={{paddingLeft: "0", marginLeft: "0"}}/></a>
                </div>
              </CardBody>
            </Card>
          </div>

          <div className="d-flex justify-content-center col col-12 col-md-6 col-xl-3 text-left mb-xl-5 mb-5">
            <Card style={{ maxWidth: "300px" }}>
              <CardImg alt="Bashar Mograbi" top src="/images/team/color/bashar.png" />
              <CardBody style={{height: "180px"}}>
                <CardTitle>Bashar Mograbi</CardTitle>
                <p>Head of Finance</p>
                <div style={{position: "absolute", bottom: "30px"}}>
                  <a href="https://www.linkedin.com/in/bashar-mograbi-7395551b4/" target="_blank"><FaLinkedin style={{paddingLeft: "0", marginLeft: "0"}}/></a>
                </div>
              </CardBody>
            </Card>
          </div>

        </div>
      </div>
    </div>
  )
}

//majd, max, long hong wang, andrew,
