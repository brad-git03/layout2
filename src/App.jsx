import './App.css'

// ================= TOP SECTION =================
function TopBox(props) {
  return <div className="TopBox">{props.text}</div>;
}

function TopInnerBox(props) {
  return <div className="TopInnerBox">{props.name}</div>;
}

function TopPeachBox() {
  return (
    <div className="TopPeachBox">
      <TopInnerBox name="Bradley" />
      <TopInnerBox name="Manalese" />
    </div>
  );
}

function TopSection() {
  return (
    <div className="TopSection">
      <TopBox/>
      <TopPeachBox />
      <TopBox/>
    </div>
  );
}


// ================= MIDDLE SECTION =================
function MiddleLeft(props) {
  return <div className="MiddleLeft">{props.text}</div>;
}

function MiddleRightBox(props) {
  return <div className="MiddleRightBox">{props.text}</div>;
}

function MiddleRight() {
  return (
    <div className="MiddleRight">
      <MiddleRightBox/>
      <MiddleRightBox/>
    </div>
  );
}

function MiddleSection() {
  return (
    <div className="middle-box">
      <MiddleLeft/>
      <MiddleRight />
    </div>
  );
}

// ================= BOTTOM SECTION =================
function BottomSide(props) {
  return <div className="BottomSide">{props.text}</div>;
}

function BottomCenterBox(props) {
  return <div className="BottomCenterBox">{props.text}</div>;
}

function BottomCenter() {
  return (
    <div className="BottomCenter">
      <BottomCenterBox text="C-PCIT9" />
      <BottomCenterBox text="IT3B" />
    </div>
  );
}

function BottomSection() {
  return (
    <div className="bottom-box">
      <BottomSide/>
      <BottomCenter />
      <BottomSide/>
    </div>
  );
}

// ================= APP =================
function App() {
  return (
    <div className="container">
      <TopSection />
      <MiddleSection />
      <BottomSection />
    </div>
  );
}

export default App;
