export default function NotFoundPage(props){
  return(
    <div>
      <div className="container" style={{height: "500px", display: "flex", alignItems: "center", justifyContent: "center"}}>
        <div>
        <h1 className="text-gradient" style={{fontWeight: "800"}}>
          404
        </h1>
        <h6 style={{color: "black"}}>This page does not exist or has been removed. <a href="/">Homepage</a></h6>
        </div>


      </div>
    </div>
  )
}
