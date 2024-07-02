import { Contact } from "../components/Contact";
import Footer from "../components/Footer";
import BlogPage from "./Blog";
import NavBar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";

function HomePage() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Projects />
      <BlogPage/>
      <Contact/>
      <Footer />
    </div>
  );
}

export default HomePage;
