import axios from "axios";
import { useEffect, useState } from "react";

function ContactUs() {
  interface MyInterface {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }
  const [value, setValue] = useState<MyInterface | null>(null);
  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/todos/1"
        );
        setValue(response.data);
      } catch (err) {
        console.error(
          "error occured at the time of getting data from api",
          err
        );
      }
    };
    fetchApi();
  }, []);
  return (
    <div>
      {value ? (
        <div>
          <p>UserId:{value.userId}</p>
          <p>Title:{value.title}</p>
          <p>Completed:{value.completed ? "yes" : "no"}</p>
        </div>
      ) : (
        <div>data loading...</div>
      )}
    </div>
  );
}

export default ContactUs;
