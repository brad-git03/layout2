import './App.css'

function App() {
  return (
    <div className="container">
      {/* Top Section */}
      <div className="section">
        <div className="box"></div>
        <div className="peach-box">
          <div className="red-group-box">
            <div className="inner-box"></div>
            <div className="inner-box"></div>
          </div>
        </div>
        <div className="box"></div>
      </div>

      {/* Middle Section */}
      <div className="middle-box">
        <div className="left"></div>
        <div className="right">
          <div></div>
          <div></div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bottom-box">
        <div className="side"></div>
        <div className="center">
          <div></div>
          <div></div>
        </div>
        <div className="side"></div>
      </div>
    </div>
  );
}

export default App;