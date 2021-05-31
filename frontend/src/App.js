import React from 'react';
import {Container} from 'react-bootstrap';
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    // return one must one element. many elements inside.
    <>
    <Header/>
      <main className="py-3">
          <Container><h1>Welcome to Our Store</h1></Container>
        </main>
      <Footer />
    </>
  );
}

export default App;
