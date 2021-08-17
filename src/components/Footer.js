export default function Footer(props){
  return (
    <div>
      <div className="footer gradient-bg p-3" style={{height: "450px", display: "table-cell", verticalAlign: "middle", width: "100vw"}}>
        <div className="container text-left">
          <div>
            <div className="row">
              <div className="col col-12 col-md-6 mb-4">
                <h4 className="white" style={{fontWeight: "500"}}>The Future of NFTs</h4>
                <p className="mb-0">
                  Our goal is to provide gamers with true ownership over their
                  in-game items and accelerate the adoption of NFTs! We want to
                  take NFTs to the next level and intrdouce Smart NFTs to the world.
                </p>
              </div>
              <div className="col col-12 col-md-6">
                <div className="row">
                  <div className="col col-4">
                    <h6 className="white" style={{fontWeight: "500"}}>Community</h6>
                    <a target="_blank" href="https://discord.com/invite/cHW6SDMsEZ">Discord</a>
                    <br/>
                    <a target="_blank" href="https://t.me/alturanft">Telegram</a>
                    <br/>
                    <a target="_blank" href="https://www.reddit.com/r/AlturaNFT">Reddit</a>
                  </div>
                  <div className="col col-4">
                    <h6 className="white" style={{fontWeight: "500"}}>Socials</h6>
                    <a target="_blank" href="https://twitter.com/altura_nft">Twitter</a>
                    <br/>
                    <a target="_blank" href="https://www.instagram.com/Altura.nft/">Instagram</a>
                    <br/>
                    <a target="_blank" href="https://www.tiktok.com/@altura_nft">TikTok</a>
                  </div>
                  <div className="col col-4">
                    <h6 className="white" style={{fontWeight: "500"}}>Resources</h6>
                    <a target="_blank" href="/contact">Contact</a>
                    <br/>
                    <a target="_blank" href="https://drive.google.com/file/d/1xjCoKdDAsmS2lvAcNglszxhu3l15lajb/view?usp=sharing">Whitepaper</a>
                    <br/>
                    <a target="_blank" href="https://medium.com/@alturanft">Medium</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr className="my-5"></hr>

          <div>
            <div className="row">
              <div className="col col-6">
                <h6 className="white" style={{fontWeight: "400"}}>
                  Copyright © 2021 Altura | All Rights Reserved
                </h6>

              </div>
              <div className="col col-6">
                <div className="row text-right text-lg-center">
                  <div className="col col-12 col-lg-3 p-lg-0">
                    <a className="m-auto" target="_blank" href="https://www.termsfeed.com/live/b08e259d-15c5-4b8b-a4af-4d3c7f441d58">Privacy Policy</a>
                  </div>
                  <div className="col col-12 col-lg-3 p-lg-0">
                    <a className="m-auto" target="_blank" href="https://www.termsfeed.com/live/6c7d2152-5a05-40da-8ec2-700302d97e6d">Terms of service</a>
                  </div>
                  <div className="col col-12 col-lg-3 p-lg-0">
                    <a className="m-auto" target="_blank" href="/terms-of-use">Terms of use</a>
                  </div>
                  <div className="col col-12 col-lg-3">
                    <a className="m-auto" target="_blank" href="/jobs">Apply for a job</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
