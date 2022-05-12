import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductScreen from "./screens/ProductScreen";
const App = () => {
  return (
    <>
      {/* full application will be inside BrowserRouter from react-router-dom  */}
      <Router>
        {/* Header component from components folder  */}
        <Header></Header>
        {/* main Semantic Elements and margin 3 on y axis  */}
        <main className="py-3">
          {/* container makes the element in the middle */}
          <Container>
            {/* Routes for switching  between different routers from react-router-dom */}
            <Routes>
              {/* Route for setting up single routes from react-router-dom  */}
              {/* HomeScreen component from sereens folder  */}
              <Route path="/" element={<HomeScreen></HomeScreen>}></Route>
              {/* ProductScreen component from screens folder  */}
              <Route
                path="/product/:id"
                element={<ProductScreen></ProductScreen>}
              ></Route>
            </Routes>
          </Container>
        </main>
        {/* Footer component from component folder  */}
        <Footer></Footer>
      </Router>
    </>
  );
};

export default App;
