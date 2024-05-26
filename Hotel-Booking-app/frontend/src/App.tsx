import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layouts/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <p>Home Page</p>
              </Layout>
            }
          />
          <Route
            path="/search"
            element={
              <Layout>
                <p>Search Page</p>
              </Layout>
            }
          />
          <Route path="/about" element={<>search page</>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
