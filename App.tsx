import {React} from './deps.ts';

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
  )
}

function LikeButton() {
  const [count, setCount] = (React as any).useState(999);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
  <span className="likeButton" onClick={handleClick}>
   ♡ {count}
  </span>
  );
}

export default App;
