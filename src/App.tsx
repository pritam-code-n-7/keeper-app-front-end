import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Body from "./Components/Body";
import Layout from "./Components/Layout";
import Register from "./Components/Register";
import ContactUs from "./Components/ContactUs";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/reg" element={<Register />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
