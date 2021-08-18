import { useState, useEffect } from 'react'
import { Form } from 'react-bootstrap'
import { Button, FormSelect } from "shards-react";
import axios from 'axios'
import MuiAlert from '@material-ui/lab/Alert';
import { Snackbar, CircularProgress, makeStyles } from '@material-ui/core/';
import { useParams } from "react-router-dom"
const queryString = require('query-string');

export default function Contact(props){
  const [ email, setEmail ] = useState('');
  const [ emailMissing, setEmailMissing ] = useState(false);
  const [ open, setOpen ] = useState(false);
  const [ loading, setLoading ] = useState(false);

  function submitForm(){
    setEmailMissing(false)

    if (!email) return setEmailMissing(true)

    setLoading(true)
    axios.post("/api/contact", queryString.stringify({subject: "Token listing", name: "N/A", email: email, message: "N/A"}))
    .then(res => {
      setOpen(true)
      setEmail('')
      setLoading(false)
    })
    .catch(err => {

    })
  }

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const handleClose = (event, reason) => {
    setOpen(false);
  };

  return (
    <div>
      <div className="contact-us-div gradient-bg" >
        <div className="container" style={{height: "100%"}}>
          <div className="row" style={{height: "100%"}}>
            <div className="col col-md-6 col-12 my-auto text-left">
              <h1 className="white title mb-0" style={{position: "relative", bottom: "100p", fontWeight: "800"}}>List Your Token on Altura Now!</h1>
              <h6 style={{fontWeight: "500"}} className="white header-subtitle my-4">
                Provide an immediate use case for your token and an enjoyable NFT experinace for your community now!
              </h6>
              <Button href="https://app.alturanft.com/" target="_blank" className="white" pill outline>
                Visit Marketplace
              </Button>
            </div>
            <div className="col col-md-6 col-12 my-auto text-center">
              <img style={{maxWidth: "100%", maxHeight: "100%", borderRadius: "16px"}}src="/images/graphics/marketplace2.png" />
            </div>
          </div>
        </div>
      </div>

      <div style={{paddingTop: "100px", paddingBottom: "100px"}}>
        <div className="container">
          <h2 className="blue" style={{fontWeight: "800", marginBottom: "6rem"}}>
            Why use the Altura marketplace?
          </h2>
          <div className="row">
            <div className="col col-12 col-md-6 col-lg-4">
              <img alt="transparent files" style={{maxWidth: "100px", maxHeight: "100px"}} src="images/graphics/transparent.svg"/>
              <h4 className="mb-3 mt-3" style={{fontWeight: "600"}}>Simple</h4>
              <p>
                The Altura marketplace is the simplest and easiest to use marketplace in all of crypto
              </p>
            </div>

            <div className="col col-12 col-md-6 col-lg-4">
              <img alt="open network around gem" style={{maxWidth: "100px", maxHeight: "100px"}} src="images/graphics/open.svg"/>
              <h4 className="mb-3 mt-3" style={{fontWeight: "600"}}>Your Own Token</h4>
              <p>
                We will add your token on the Altura marketplace such that users can buy and sell NFTs in your token
              </p>
            </div>

            <div className="col col-12 col-md-6 col-lg-4">
              <img alt="shapes" style={{maxWidth: "100px", maxHeight: "100px"}} src="images/graphics/simple.svg"/>
              <h4 className="mb-2 mt-2" style={{fontWeight: "600"}}>Perpetual Royalties</h4>
              <p>
                You can set a royalty on all of your NFTs such that you continue to earn passive income from them
              </p>
            </div>


            <div className="col col-12 col-md-6 col-lg-4">
              <img alt="deed" style={{maxWidth: "100px", maxHeight: "100px"}} src="images/graphics/ownership.svg"/>
              <h4 className="mb-2 mt-2" style={{fontWeight: "600"}}>Featured Collection</h4>
              <p>
                Your NFT collection will be featured on the frontpage of the marketplace for one week when you work with us
              </p>
            </div>

            <div className="col col-12 col-md-6 col-lg-4">
              <img alt="coin with dollar sign" style={{maxWidth: "100px", maxHeight: "100px"}} src="images/graphics/fees.svg"/>
              <h4 className="mb-2 mt-2" style={{fontWeight: "600"}}>Low Fees</h4>
              <p>
                Altura is built on the Binance Smart Chain, which means
                transactions are cheap and fast!
              </p>
            </div>
            <div className="col col-12 col-md-6 col-lg-4">
              <img alt="ven diagram with sword in middle" style={{maxWidth: "100px", maxHeight: "100px"}} src="images/graphics/cross.svg"/>
              <h4 className="mb-2 mt-2" style={{fontWeight: "600"}}>Extensive Customization</h4>
              <p>
                You may provide your own images, CSS, color and backgrounds for your collection and marketplace page
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="gradient-bg" style={{paddingTop: "40px", paddingBottom: "40px"}}>
        <div className="container">
          <div className="row">
            <div className="align-self-center col col-12 col-md-6 text-left">
              <h2 className="mb-4 white" style={{fontWeight: "600", lineHeight: "3rem"}}>
                List Your Own Native Token
              </h2>
              <h6 className="white" style={{fontWeight: "400", lineHeight: "1.8rem"}}>
                You and your users will be able to list and sell NFTs in your native cryptocurrency.
                This means that your token instantly becomes a utility token and gains an awesome use case.
              </h6>
            </div>
            <div className="col col-12 col-md-6 p-5">
              <img alt="floating gaming sword" src="images/graphics/token-pitch/selectToken.png" style={{width: "100%", height: "100%", borderRadius: "16px"}}/>
            </div>
          </div>
        </div>
      </div>

      <div style={{paddingTop: "40px", paddingBottom: "40px"}}>
        <div className="container">
          <div className="row">
            <div className="col col-12 col-md-6 order-2 order-md-1 p-5">
              <img src="/images/graphics/token-pitch/collectionCard.png" style={{width: "100%", height: "100%", borderRadius: "16px"}}/>
            </div>

            <div className="align-self-center col col-12 col-md-6 order-1 order-md-2 text-left">
              <h2 className="mb-4 blue" style={{fontWeight: "600", lineHeight: "3rem"}}>
                Custom NFT Collection Featured & Verified
              </h2>
              <h6 style={{fontWeight: "400", lineHeight: "1.8rem"}}>
                We will feature your NFT collection on the front page for one week. This will attract
                many users to buy your NFTs. Additionally your collection will be verified to add a layer of trust
              </h6>
            </div>

          </div>
        </div>
      </div>

      <div className="gradient-bg" style={{paddingTop: "40px", paddingBottom: "40px"}}>
        <div className="container">
          <div className="row">
            <div className="align-self-center col col-12 col-md-6 text-left">
              <h2 className="mb-4 white" style={{fontWeight: "600", lineHeight: "3rem"}}>
                Marketing Promotion
              </h2>
              <h6 className="white" style={{fontWeight: "400", lineHeight: "1.8rem"}}>
                We will announce to our community of <strong>18,000 members on Twitter, 7,000 members on TG</strong> that we have just listed your token on the marketplace and
                will promote your collection and add a link to your project
              </h6>
            </div>
            <div className="col col-12 col-md-6 p-5">
              <img alt="floating gaming sword" src="images/graphics/token-pitch/tokenDrop.png" style={{width: "100%", height: "100%", borderRadius: "16px"}}/>
            </div>
          </div>
        </div>
      </div>

      <div style={{paddingTop: "40px", paddingBottom: "40px"}}>
        <div className="container my-5">
          <div className="row text-left justify-content-center">
            <div className="col col-12 col-md-6">
              <h2 className="mb-2 mx-auto " style={{fontWeight: "600", lineHeight: "3rem"}}>
                Request meeting
              </h2>
              <h6 className="gray">Submit your email and we will get back to you for a meeting</h6>
                <Form className="text-left mt-5">
                  <Form.Group>
                    <Form.Label>Email*</Form.Label>
                    <Form.Control isInvalid={emailMissing} type="email" onChange={e => setEmail(e.target.value)} value={email} />
                  </Form.Group>

                  <Button onClick={e => {
                      e.preventDefault()
                      submitForm()
                    }} variant="primary" pill type="submit">
                    <CircularProgress style={{display: loading ? "" : "none", color: "white", width: "20px", height: "20px"}} />
                    <span style={{display: loading ? "none" : ""}}>Submit</span>
                  </Button>
                </Form>
            </div>
          </div>
        </div>

      </div>
      <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
        <Alert onClose={handleClose} style={{backgroundColor: "#00d1ff"}}>
          Sent to the Altura Team!
        </Alert>
      </Snackbar>
    </div>
  )
}
