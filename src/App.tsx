import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Notes from "./Components/Notes";
import Desc from "./Components/Desc";
import Button from "./Components/Button";

function App() {
  return (
    <div className="">
      <Header />
      {Desc.map((item) => (
        <Notes {...item} key={item.id} />
      ))}
      <Button />
      <Footer />
    </div>
  );
}

export default App;
