import logo from './logo.svg';
import './App.css';
import study from './study.jpg';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div>
        <img src='https://www.homeworkhelpglobal.com/wp-content/uploads/2019/03/studying-student-on-desk.jpg' style={{width:"60%", height:"98vh", float:"left", left:"0", position:"relative"}}></img>
        <div><div style={{display:"block", width:"100%", textAlign:"center", color:"darkblue", backgroundColor:"skyblue", padding:"5px"}}>
            This site is intended for people 13 years of age <br/> and older.
          </div>
        <div className="sub-main">
          <p style={{padding:"0", margin:"0"}}>
            Back to home</p>
       <div>
         <div>
          <h1 className="stride">Stride Tutoring</h1>
           <h3 className="headingfour">Sign in to your account!</h3>
           <div>
            <h5>Email Address</h5>
             <input type="text" placeholder="mohit@k12.com" className="name"/>
           </div>
           <div className="second-input">
            <h5>Password</h5>
             <input type="password" placeholder="enter your password" className="name"/>
           </div>
          <div style={{display:"flex"}}>
            <input type="checkbox" style={{width:"18px", height:"18px", marginTop:"25px"}}></input>
            <h4 style={{paddingLeft:'5px'}}>Remember me</h4>
          </div>
          <div className="login-button">
          <button>Login</button>
          </div>
           
            <p>
              <p href="#">Need help signing in?</p>
            </p>
            <p style={{textAlign:"center", fontSize:"25px"}}>
          Or
            </p>
            <p className="link">
              <p > Don't have an account? <a href="#">Sign Up</a></p>
            </p>
           
 
         </div>
       </div>
       </div>

     </div>
        </div>
    </div>
  );
}

export default App;
