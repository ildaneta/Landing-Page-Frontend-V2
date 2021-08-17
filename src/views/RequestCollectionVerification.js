import { useState } from 'react'
import { Form } from 'react-bootstrap'
import { Button } from "shards-react";
import axios from 'axios'
import MuiAlert from '@material-ui/lab/Alert';
import { Snackbar, CircularProgress, makeStyles } from '@material-ui/core/';

const queryString = require('query-string');

export default function RequestCollectionVerifiation(props){

  const [ collectionURL, setCollectionURL ] = useState('')
  const [ notes, setNotes ] = useState('')
  const [ confirmed, setConfirmed ] = useState(false)
  const [ open, setOpen ] = useState(false);
  const [ loading, setLoading ] = useState(false)

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const handleClose = (event, reason) => {
    setOpen(false);
  };

  function submitForm(){
    setLoading(true)
    axios.post("/api/request-collection-verification", queryString.stringify({collectionURL: collectionURL, notes: notes}))
    .then(res => {
      setOpen(true)
      setCollectionURL('')
      setNotes('')
      setLoading(false)
    })
  }

  return (
    <div>
      <div className="container text-left writing">
        <div className="mt-5 pt-5 mb-5 pb-5">
          <div className="row justify-content-center">
            <div className="col col-12 col-lg-9">
              <h2 className="mb-5" style={{fontWeight: "600", lineHeight: "3rem"}}>
                How to Get Your Collection Verified
              </h2>
              <img alt="verified symbol" className="mb-5" style={{width: "100%", borderRadius: "12px"}} src="https://techcrunch.com/wp-content/uploads/2016/07/twitter-verified-pattern.png"/>
              <h5>
                Getting your NFT collection verified means the following:
              </h5>
              <ul>
                <li>It will show up on the <a target="_blank" href="https://app.alturanft.com/collections">verified collections page</a></li>
                <li>It will show up in a dropdown menu in the <a target="_blank" href="https://app.alturanft.com/marketplace">marketplace</a></li>
                <li>It will show up as a new collection at the top of the marketplace</li>
                <li>It has a chance of being featured on the front page</li>
                <li>A blue checkmark will show next to the collection</li>
              </ul>
              <br />
              <h5>
                Who can be verified?
              </h5>
              <p>
                To get your collection verified you must be either a videogame,
                artist or content creator. You do not need to be a famous
                triple-A video game to be verified. Indie, niche and small games
                will be verified. Additionally, you do not need to be a famous or
                well-known artist or content creator to be verified. You just have
                to produce unique, original content.
              </p>

              <br />
              <h5>
                How do I get my collection verified?
              </h5>
              <p>
                <strong>To get your collection verified, follow the steps below.</strong>
              </p>
              <ol>
                <li>Mint your collection. You may do so on the <a target="_blank" href="https://app.alturanft.com/">Altura marketplace.</a></li>
                <li>
                  Provide an appropriate image, name, description, website
                  and, genre for your collection. If you have already minted your
                  collection and want to edit these values, you may do so here.
                  There is no specific requirements for the collection details.
                </li>
                <li>
                  You do not have to have any NFTs minted beforehand. however,
                  we recommend minting some NFTs to the collection so that we
                  have a better idea of the content that will be included in the
                  collection. To mint NFTs to your collection, click <a target="_blank" href="https://app.alturanft.com/create">here</a>. Make
                  sure you select the collection you want to get verified when
                  minting.
                </li>
                <li>
                  After you have completed your collection and are ready
                  to get verified, you may submit the form below.
                </li>
              </ol>

              <br />
              <h5>
                Verification Form
              </h5>

              <Form>
                <Form.Group>
                  <Form.Label>Collection URL</Form.Label>
                  <Form.Control onChange={e => setCollectionURL(e.target.value)} value={collectionURL} placeholder="Enter collection URL" />
                  <Form.Text className="text-muted">
                    To get your collection URL, visit the <a target="_blank" href="https://app.alturanft.com/">Altura Marketplace</a>,
                    log in with metamask, click on your profile (top right),
                    click on "my collections," then click on your collection.
                    Copy the URL from the search bar.
                  </Form.Text>
                </Form.Group>

                <Form.Group>
                  <Form.Label>Additional notes</Form.Label>
                  <Form.Control as="textarea" rows={3} onChange={e => setNotes(e.target.value)} value={notes} placeholder="Notes" />
                    <Form.Text className="text-muted">
                      Provide any additional notes you want our review team to
                      know about your collection.
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check checked={confirmed} onChange={e => setConfirmed(!confirmed)} type="checkbox" label="
                    I confirm that I have provided a title, image, and description that
                    accurately describes the contents and nature of the collection. I also confirm
                    that all NFTs minted to this collection are my work only and comply with
                    Altura's terms of use." />
                </Form.Group>
                <Button onClick={e => {
                    e.preventDefault()
                    submitForm()
                  }} disabled={!confirmed || !collectionURL} variant="primary" pill type="submit">
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
          Verification request sent!
        </Alert>
      </Snackbar>
    </div>
  )
}
