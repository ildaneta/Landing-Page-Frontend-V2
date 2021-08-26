import { useState, useEffect } from 'react'
export default function Countdown(props){

  const [ timerString, setTimerString ] = useState("")

  function setTimer(){
    var now = new Date().getTime();
    var timeleft = 1630951199000 - now;

    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    setTimerString(`${days}:${hours}:${minutes}:${seconds}`)
  }

  useEffect(() => {
    setTimer()
    const interval = setInterval(() => {setTimer()}, 1000);
  }, [])

  return (
    <div>
      <div className="countdown" style={{height: "70px", display: "table-cell", verticalAlign: "middle", width: "100vw"}}>
        <div>
          <h5 className="mb-0 mr-2" style={{fontWeight: "800", display: "inline-block", color: "white"}}>Smart NFT Phase 1 Launch: </h5>
          <h5 className="mb-0" style={{display: "inline-block", fontWeight: "800", color: "white"}}>{timerString}</h5>
        </div>
      </div>
    </div>
  )
}
