import { useState } from "react";
import "./App.css";
import API from "./components/curiosities.json"
import randomList from "./components/randomList";
import BoxPhrase from "./components/BoxPhrase";

const imgBg = ["bg1", "bg2", "bg3", "bg4", "bg5", "bg6", "bg7", "bg8", "bg9", "bg10", "bg11"]

function App() {

  //Curiosidad Random
  const [curiositi, setCuriositi] = useState(randomList(API))

  //Imagen de fondo
  const [background, setBackground] = useState(randomList(imgBg))

  const handleChangePhr = () => {
    setCuriositi(randomList(API))
    setBackground(randomList(imgBg))
  }

  return (
    <main className={`app ${background}`}>
    <BoxPhrase handleChangePhr={handleChangePhr} curiositi={curiositi}/>
    </main>
  );
}

export default App;
