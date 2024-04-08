import Button from "./Button";
import Footer from "./Footer";
import Notes from "./Notes";
import Desc from "./Desc";

function Body() {
  return (
    <div>
      {Desc.map((item) => (
        <Notes {...item} key={item.id} />
      ))}
      <Button />
      <Footer />
    </div>
  );
}

export default Body;
