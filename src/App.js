import './App.css';

let name = 'Adarsh';
function App() {
  return (
    <>
    <nav>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </nav>
    <div className="container">
      <h1>Hello {name}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing 
        elit. Nemo commodi corporis perspiciatis suscipit 
        inventore nobis architecto dolorum deserunt, cum 
        quae neque quis hic natus rem alias quos minima 
        repellat magnam corrupti molestias ducimus modi!
      </p>
    </div>
    </>
    
  );
}

export default App;
