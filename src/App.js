import './App.css';
import BucketList from './components/BucketList';
 
console.log("APP.JS ACCESSED")
function App() {
  console.log("App.js=>App()")
  return (
    <div className="bucket-app">
      <BucketList />
    </div>
  );
}

export default App;
