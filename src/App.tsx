import { Suspense } from "react";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Technologies from "./components/Technologies/Technologies";
import type { Itechnology } from "./types/TechnologiesType";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";

const technologiesFetch = async (): Promise<Itechnology[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

function App() {
  const technologiesPromise = technologiesFetch();

  return (
    <>
      <ToastContainer position="top-right" autoClose={2000} />
      <Nav />
      <Banner />
      <Suspense fallback={<h2>Loading...</h2>}>
        <Technologies technologiesPromise={technologiesPromise} />
      </Suspense>
      <Footer></Footer>
    </>
  );
}

export default App;