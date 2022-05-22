import {React} from './deps.ts';
// import './static/css/App.css';

function App() {
  return (
    <>
      <link rel={'stylesheet'} href={'./static/css/App.css'}/>
      <div className="App">
       <header className="App-header">
        <LikeButton />
       </header>
      </div>
      </>
  );
}

function LikeButton() {
  const count = 999;
  return <span className="LikeButton">♡{count}</span>;
}

export default App;
