import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className = "App">

      <aside className = "sidemenu">

        <div className="side-menu-button">
          <span className="side-menu-button-span">+</span>
          New chat
        </div>
        
      </aside>

      <section className = "chatbox">
        <h1>ChatGPT</h1>

        <div className="chat-log">
          <div className="chat-message">
            <div className="avatar">Me</div>
            <div className="message">Hello World</div>
          </div>
        </div>

        <div className = "chat-input-holder">
          <textarea rows="1" className = "chat-input-textarea" placeholder = "Send a message."></textarea>
          
        </div>
      </section>
    </div>
  );
}

export default App;
