import { Link } from "react-router-dom";
import Content from "./components/Content.tsx";
import Header from "./components/Header.tsx";

function App() {
  return (
    <div className="fixed bg-gray-400 h-screen w-full">
     
        <Header />
       <div className="w-[90%] mx-auto pt-3">
       <Content/>
       </div>
      
    </div>
  );
}

export default App;
