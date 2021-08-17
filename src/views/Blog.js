import { useState, useEffect } from 'react'
import { Nav } from 'react-bootstrap'
import {
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  Button
} from "shards-react";
import Skeleton from '@material-ui/lab/Skeleton';
import { useParams, useHistory } from "react-router-dom"

export default function Blog(props){

  const skeletons = [1, 2, 3, 4, 5, 6]

  const [ articles, setArticles ] = useState([])

  let { category } = useParams();
  const history = useHistory()

  useEffect(() => {
    if (!category){
      history.push(`/blog/news`)
    }
    if (props.blogs){
      if (category === "news") setArticles(props.blogs.news)
      if (category === "educational") setArticles(props.blogs.educational)
      if (category === "events") setArticles(props.blogs.events)
      if (category === "shorts") setArticles(props.blogs.shorts)
    }
  }, [category, props.blogs])

  return(
    <div>
      <div className="container">
        <div className="blog-div" >
          <div style={{height: "100%"}}>
            <div className="row" style={{height: "100%"}}>
              <div className="col col-12 my-auto">
                {
                  category &&
                  <h1 className="text-gradient-color mb-4" style={{position: "relative", bottom: "100p", fontWeight: "800"}}>{`${category.split("")[0].toUpperCase()}${category.substring(1)}`}</h1>
                }
                <div>
                  <Nav className="justify-content-center text-center" activeKey="/home">
                    <Nav.Item>
                      <Nav.Link onClick={() => history.push(`/blog/news`)}>News</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link onClick={() => history.push(`/blog/educational`)}>Educational</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link onClick={() => history.push(`/blog/events`)}>Events</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link onClick={() => history.push(`/blog/shorts`)}>Shorts</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr/>

        <div>
          <div style={{paddingTop: "100px", paddingBottom: "100px"}}>
            <div>

              {
                articles && articles.length >= 1 ?

                <div className="row">
                  {
                    articles.map((news, i) => {
                      if (category != "shorts"){
                        return (
                          <div className="col col-12 col-lg-4 mb-5 text-left">
                            <Card style={{height: "100%"}}>
                              <CardImg top src={news.image} />
                              <CardBody>
                                <CardTitle>{news.title}</CardTitle>
                                <p>{news.body}</p>
                                <Button style={{display: news.link ? "" : "none"}} target="_blank" href={news.link}>{news.linkTitle}{` `}&rarr;</Button>
                              </CardBody>
                              <CardFooter>{news.date}</CardFooter>
                            </Card>
                          </div>
                        )
                      }else{
                        return (
                          <div className="col col-12 col-lg-6 mb-5 text-left">
                            <iframe width="560" height="315" src={`https://www.youtube.com/embed/${news.image}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                          </div>
                          )
                      }

                    })
                  }
                </div>

                  :

                  <div className="row">
                    {
                      skeletons.map((value, i) => {
                        return (
                          <div className="col col-lg-4 col-12 mb-5 text-left">
                            <Card>
                              <Skeleton top variant="rect" height={200} />
                              <CardBody>
                                <Skeleton variant="text" />
                                <Skeleton variant="text" />
                              </CardBody>
                              <CardFooter><Skeleton variant="text" /></CardFooter>
                            </Card>
                          </div>
                        )
                      })
                    }
                  </div>
            }

            </div>
            <Button href="https://medium.com/@alturanft" target="_blank" className="mt-5 mr-3" pill>Visit our Medium</Button>
            <Button href="https://twitter.com/altura_nft" target="_blank" className="mt-5" outline pill> Follow us Twitter </Button>
          </div>
      </div>
      </div>

    </div>
  )
}
