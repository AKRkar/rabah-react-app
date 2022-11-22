import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
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
function Routing() {
    return (
        <>
            <ul>
                <li> React Routering</li>
            </ul>
        </>
    );

}

export default App;
