import Labs from "./Labs";
import HelloWorld from "./Labs/a6/hello-world";
import Tuiter from "./tuiter";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import Home from "./final-project/home";

function App() {
  return (
      <BrowserRouter>
          <div className="container">
              <Routes>
                  <Route  path="/*" element={<Labs/>}/>
                  <Route path="/hello"
                         element={<HelloWorld/>}/>
                  <Route path="/tuiter/*"
                         element={<Tuiter/>}/>
                  <Route path="/final-project/*"
                         element={<Home/>}/>
              </Routes>
          </div>
      </BrowserRouter>
  );
}
export default App;
