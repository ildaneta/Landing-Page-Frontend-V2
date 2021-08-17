import { IoLogoTiktok } from 'react-icons/io5';
import {
  FaTelegramPlane,
  FaTwitter,
  FaInstagram,
  FaDiscord,
  FaRedditAlien,
  FaGithub,
  FaMediumM } from 'react-icons/fa';
import { Button } from "shards-react";

export default function Banner(props){
  return (
    <div>
      <div className="banner" style={{height: "45px", display: "table-cell", verticalAlign: "middle", width: "100vw"}}>
        <div className="colorize-icons container" style={{}}>
          <a target="_blank" href="https://twitter.com/altura_nft"><FaTwitter /></a>
          <a href="https://t.me/alturanft" target="_blank"><FaTelegramPlane /></a>
          <a href="https://medium.com/@alturanft" target="_blank"><FaMediumM /></a>
          <a href="https://www.instagram.com/Altura.nft/" target="_blank"><FaInstagram /></a>
          <a href="https://discord.com/invite/cHW6SDMsEZ" target="_blank"><FaDiscord /></a>
          <a href="https://www.reddit.com/r/AlturaNFT/" target="_blank"><FaRedditAlien /></a>
          <a href="https://www.tiktok.com/@altura_nft" target="_blank"><IoLogoTiktok /></a>
          <a href="https://github.com/Plutus-Gaming-NFTs-Reimagined" target="_blank"><FaGithub /></a>
        </div>
      </div>
    </div>
  )
}
