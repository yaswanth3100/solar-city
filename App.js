import './App.css';
import { Button, TextField,FormControl} from '@material-ui/core'
import React from 'react';
import data from "./carousel"
function App() {
  const [index,setIndex]=React.useState(0);
  const myref=React.useRef(null);
  const scrollToRef = (ref) =>{
    // window.scrollTo(0, ref.current.offsetTop) 
     myref.current?.scrollIntoView({ behavior: 'smooth' });
  } 
const handleLeftClick=()=>{
  if(index>0)
  {
    setIndex(index-1);
  }
  else{
    setIndex(data.length-1);
  }

}
const handleRightClick=()=>{
  if(index<data.length-1)
  {
    setIndex(index+1);
  }
  else{
    setIndex(0);
  }
}
  return (
    <div className="main">
      <div className="starter">
        <nav className="nav-bar">
          <div className="logo">
            <h2>Unicorn</h2>
          </div>

        
          <div className="nav-links">
            <div>
              <a className="call" onClick={()=>scrollToRef(myref)} >Contact Us</a>
            </div>
          </div>
        </nav>
        <div className="line">
        
        </div>
        <div className="starter__texts">
          <h1>
            let the magic begin..with silicon and sunshine!
          </h1>
          <p>
            Unicorn is a team of Energy Engineers specializing in powering your building with Clean and Uninterrupted power.​
          </p>
          <img  className="scrolldown" src="https://media4.giphy.com/media/Wtg8Bmgul1Qxc0otod/200.webp?cid=ecf05e4714g8whrrd2wb4reagcolstxurt1vvzn9lu3hdhnm&rid=200.webp" alt=""  />
        </div>
      </div>
      <div className="line-end"></div>
      <div className="features">
        <div className="uniques">
          <div>
            <img src="https://media1.giphy.com/media/LPZtw1JynGuTIEcDVS/200w.webp?cid=ecf05e47xs7otlg43rhaqs01u4ppmk0nbmmervgesbhejje5&rid=200w.webp" alt=""/>
          </div>
          <div className="uniques-content">
            <h1>Excellence in Design and Engineering</h1>
            <p>
              We don't just set up Solar for your Rooftop.
              We solve your Energy Problems.
            </p>
          </div>
        </div>

        <div className="uniques2">
          <div className="uniques-content2">
            <h1>
            Best utilisation of your Sunny Rooftop</h1>
            <p>
              Flat roof? Sloped roof? Sheet metal shed?
              No worries. We got you covered.
            </p>
          </div>
          <div>
            <img src="https://media3.giphy.com/media/XGImpWsgw3VIQEbXQ3/200w.webp?cid=ecf05e47b7iqtw4wsgh41hmvtrpxyoigdziqdrvntcbsi8mj&rid=200w.webp" alt=""/>
          </div>
        </div>

         <div className="uniques">
          <div>
            <img src="https://media2.giphy.com/media/PjaVO2QgB95iKsRmGZ/200w.webp?cid=ecf05e472bg4oqr0b6ws2eklfl5pvag65jmch89mdrw9qigu&rid=200w.webp" alt=""/>
          </div>
          <div className="uniques-content">
            <h1>One size doesn't fit all..</h1>
            <p>
              You are Unique. So is your Energy Consumption Pattern.
We customize your solution. Just For You.
            </p>
          </div>
        </div>

      </div>

{/* <div className="line-end"></div> */}
<div className="caption">
  <h1>Re-powering Your Abode</h1>
    <h3>We offer a range of cost-effective solutions which do not necessitate any reduction in your energy usage while bringing down your usage bills substantially.</h3>
</div>
      <div ref={myref} className="contact">
        <form action="" className="forms">

         <center> <h1>Contact us</h1></center>
         <div className="each-field">
          <TextField className="outlined-basic" size="large" id="outlined-basic"  variant="filled" label="Name" placeholder="Name"/>
         </div>
        <div className="each-field">
          <TextField id="outlined-basic"  variant="filled" label="Town/City" placeholder="Town/City" size="large" />
        </div>
        <div className="each-field">
          <TextField className="outlined-basic" size="large" id="outlined-basic"  variant="filled" label="email" placeholder="Email"/>
         </div>
        <div className="each-field">
          <TextField id="outlined-basic"  variant="filled" label="Phone no:" placeholder="Phone no "/>
        </div>
        <div>
        <Button variant="outlined" color="primary" size="medium">Submit</Button>
        </div>
        
        </form>
        <div className="gallery">
          <div>
            <button onClick={handleLeftClick}><i class="fas fa-angle-left"></i></button>
          </div>
          <div>
            <img className="caro-img" src={data[index].image} alt=""/>
          </div>
          <div className="caro-texts">
            <h1>{data[index].title}</h1>
            <h3>{data[index].description}</h3>
          </div>
          <div>
            <button onClick={handleRightClick}><i class="fas fa-angle-right"></i></button>
          </div>
        </div>
      </div>
      <footer className="foot">
        <h3>Unicorn Solar</h3>
        <p>random@mail.com</p>
        <p>+91 93123 2345 | +91 97777 7777</p>
        <p>Unicorn Solar Solutions Pvt. Ltd</p>
        <p>Visakhapatnam</p>
      </footer>
    </div>
  );
}

export default App;
