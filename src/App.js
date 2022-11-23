import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Routing from "./Routing";


function App() { // show git branching...
  return (
          <BrowserRouter>
              <Routes>
                  <Route path="/" >
                    <Route index element={<Home />} />
                    <Route path="route" element={<Routing />} />
                  </Route>
              </Routes>
          </BrowserRouter>
  );
}

function Home() {
    return (
        <>
            <h2>Things to learn:</h2>
            <ul>
                <li> <a href="/route" > React Router </a></li>
            </ul>
        </>
    );

}

export default App;
