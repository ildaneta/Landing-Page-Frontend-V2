import { useState } from 'react'
import { Form } from 'react-bootstrap'
import { Button } from "shards-react";
import axios from 'axios'
import MuiAlert from '@material-ui/lab/Alert';
import { Snackbar, CircularProgress, makeStyles } from '@material-ui/core/';

const queryString = require('query-string');

export default function LPStakingGiveaway(props){

  return (
    <div>
      <div className="container text-left writing">
        <div className="mt-5 pt-5 mb-5 pb-5">
          <div className="row justify-content-center">
            <div className="col col-12 col-lg-9">
              <h2 className="mb-5" style={{fontWeight: "600", lineHeight: "3rem"}}>
                $1,000 $PLAY NFT Compeition
              </h2>
              <img alt="verified symbol" className="mb-5" style={{width: "100%", borderRadius: "12px"}} src="/images/graphics/polyplaytoken.png"/>
              <p>AlturaNFT and PolyPlay are hosting the first ever NFT compeition on Altura's NFT marketplace! Alongside the NFT compeition,
              the first 10 people to purchase an NFT registered in the compeition will win $50 in $PLAY!</p>
              <br />
              <h5>
                How do I enter the compeition?
              </h5>
              <ol>
                <li>You must mint an original NFT, create by you, on the <a href="https://app.alturanft.com/" target="_blank">Altura NFT marketplace</a></li>
                <li>You must put the hashtag <strong><i>#polyplay</i></strong> in the description of the NFT. The hashtag may be put anywhere in the description.</li>
                <li>You must list your NFT in the <strong>$PLAY</strong> token on the Altura marketplace. If your NFT gets sold, it is still entered in the compeition. As long as it
                  <strong> was</strong> listed in $PLAY once, it is eligible.</li>
              </ol>

              <br />
              <h5>
                Compeition rules
              </h5>
              <ul>
                <li>Your NFT must be an original piece created by you. If it was taken from the internet or plagarised it will be disqualified.</li>
                <li>Your NFT must have <i>#polyplay</i> in the description and must have been listed in $PLAY at least once</li>
                <li>The vote will begin on the 27th of August and will last until the 30th.</li>
                <li>All elgible NFTs will be displaye for users to vote.</li>
                <li>The first place prize is $300, second place is $200 and third place is $100.</li>
              </ul>

              <br />
              <h5>
                First 10 people to purchase an NFT
              </h5>
              <p>The first 10 users to purchase an NFT that is eligible to enter the compeition (has #polyplay in the description and was listed in $PLAY) will recieve $50 in PLAY on the 27th of August.</p>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}
