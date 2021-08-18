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
                $10,000 ALU-BNB LP Airdrop Info
              </h2>
              <img alt="verified symbol" className="mb-5" style={{width: "100%", borderRadius: "12px"}} src="https://pbs.twimg.com/media/E9F-0-8XoAIkelJ?format=jpg&name=large"/>
              <h5>
                Summary of Airdrop
              </h5>
              <ul>
                <li>20 people will recieve $500 each in ALU for staking ALU-BNB LP</li>
                <li>The larger your share of the stake pool, the greater your chance of winning</li>
                <li>The winners will be selected, announced and airdropped on August 25, 2021</li>
                <li><a href="https://staking.alturanft.com/" target="_blank">Stake here</a></li>
              </ul>
              <br />
              <h5>
                How do I Stake ALU-BNB to Enter
              </h5>
              <p>
                We have a few resoruces that explain how to stake ALU-BNB LP!
              </p>
              <ul>
                <li><a href="https://alturanft.medium.com/altura-staking-how-to-stake-alu-bnb-on-altura-dddb0666e35c" target="_blank">Article on how to stake (Metamask)</a></li>
                <li><a href="https://www.youtube.com/watch?v=THbv_taVE3k" target="_blank">Video on how to stake (Trust Wallet)</a></li>
              </ul>

              <br />
              <h5>
                FAQ
              </h5>
              <ul>
                <li>
                  <strong>Q: Can I win more than once?</strong>
                  <br/>
                  A: Yes, the same user can win more than once. Each draw takes into account all the stakers, thus the same user can be drawn several times.
                </li>
                <br/>
                <li>
                  <strong>Q: Do I have a higher chance of winning if I stake more?</strong>
                  <br/>
                  A: Yes, the larger your stake the higher of a chance you have at winning. So if you own 7% of the stake pool you have a 7% chance of winning at each draw.
                </li>
                <br/>
                <li>
                  <strong>Q: Is there a minimum stake amount?</strong>
                  <br/>
                  A: No, there is no minimum stake amount.
                </li>
                <br/>
                <li>
                  <strong>Q: Does this airdrop apply to single asset staking?</strong>
                  <br/>
                  A: No.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}
