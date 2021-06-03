import React from 'react';
import {Container} from 'react-bootstrap';
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";

const App = () => {
  return (
    // return one must one element. many elements inside.
    <>
    <Header/>
      <main className="py-3">
          <Container>
            <HomeScreen/>
          </Container>
        </main>
      <Footer />
    </>
  );
}

export default App;
