import Nav from "./componenets/Nav";
import Jumbotron from "./componenets/Jumbotron";
import SoundSection from "./componenets/SoundSection";
import DisplaySection from "./componenets/DisplaySection";
import WebgiViewer from "./componenets/WebgiViewer";
import Loader from "./componenets/Loader";
import { useRef } from "react";


function App() {

const webgiViewerRef =  useRef();
const contentRef = useRef();

const handlePreview =() => {
  webgiViewerRef.current.triggerPreview();
}

  return (
    <div className="App">
      <Loader></Loader>
      <div ref={contentRef} id="content">
      <Nav></Nav>
      <Jumbotron></Jumbotron>
      <SoundSection></SoundSection>
      <DisplaySection triggerPreview ={handlePreview}></DisplaySection>
      </div>
      
      <WebgiViewer contentRef={contentRef} ref={webgiViewerRef}></WebgiViewer>
    </div>
  );
}

export default App;
