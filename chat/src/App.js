import logo from './logo.svg';
import './App.css';
import { useState, useEffect,useRef} from 'react';


function App() {

const [msgReg, setmsgReg] = useState([{}])
const [resReg, setresReg] = useState(null)
const input = useRef();
  
  const handleInput = () => {
    const botMessage = document.querySelector('#message1');
    var userMessage = document.querySelector('#message2');
    const inpt = document.getElementById("input").value
    const fetchData = async(msg) => {
      const response = await fetch(`http://localhost:5000/${msg}`)
      const data = await response.json();
      botMessage.innerHTML = data['message']
    };
    userMessage.innerHTML = document.querySelector('#input').value;
    const datam = fetchData(inpt);
  }
  return (
    <div className="App"> 
      <div className="wrapper">
        <div className="content">
          <div className="header">
            <div className='img'>
              <img src={logo} alt="" />
            </div>
            <div className="right">
              <div className="name">ChatBot</div>
              <div className='status'>Active</div>
            </div>          
            </div>
            <div className="main">
              <div className='main_content'>
                <div className='messages'>
                  <div className='bot-message' id='message1'></div>
                  <div className='human-message' id='message2'></div>
                </div>
              </div>
            </div>
            <div className='bottom'>
              <div className='btm'>
                <div className='input'>
                  <input type="text" id="input" placeholder="Enter your message"></input>
                </div>
                <div className='btn'>
                    <button onClick={handleInput}><i className='fas fa-paper-plane'>Send</i></button>
                  </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
