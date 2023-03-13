import logo from './logo.svg';
import './App.css';

function App() {

  const fetchData = async(msg) => {
    console.log("poda sunni")
    console.log(msg)
    const response = await fetch(`http://localhost:5000/${msg}`)
    const data = await response.json();
    console.log(data)
    return data['message']
  };

  const handleInput = () => {
    const botMessage = document.querySelector('#message1');
    const userMessage = document.querySelector('#message2');
    const inpt = document.getElementById("input").value
    
    
    
    let badwords = ['fuck|bad|stupid|useless|bitch|cringe'];
    let words = new RegExp(badwords);
    if(words.test(document.querySelector('#input').value)){
      botMessage.innerHTML = 'Typing...';
      setTimeout(() => {
        botMessage.innerHTML = resReg.map((val) =>{ 
          return val.res;
        });
        document.querySelector('#input').value = " ";
      }, 2000);
    }
    userMessage.innerHTML = document.querySelector('#input').value;
    console.log(fetchData(inpt))
    botMessage.innerHTML = fetchData(inpt)
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
