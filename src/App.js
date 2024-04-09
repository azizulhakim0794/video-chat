import './App.css';
import VideoChat from './VideoChat';

function App() {
  return (
    <div className="App">
      <div className="container">
        <br/> 
        <br/>
        <div class="alert alert-warning text-start" role="alert">
          <b>Note:</b> The room name must be same for both user.
        </div>
        <header>
          <h1>Video Chat</h1>
        </header>
        <main>
          <VideoChat />
        </main>
      </div>
    </div>
  );
}

export default App;
