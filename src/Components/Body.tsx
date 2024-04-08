import Button from "./Button";
import Footer from "./Footer";
import Notes from "./Notes";
import data from "../data/Data.json";

function Body() {
  return (
    <div>
      {data.map((item) => (
        <Notes {...item} key={item.id} />
      ))}
      <Button />
      <Footer />
    </div>
  );
}

export default Body;
