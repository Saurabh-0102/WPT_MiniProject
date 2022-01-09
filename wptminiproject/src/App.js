import { useState } from "react";
import axios, { Axios } from "axios";

export default function App() {
  return <MyCompo />;
}

function MyCompo() {
  const [message, setmessage] = useState("");
  const [list, setlist] = useState([]);

  const changeMessage = (e) => {
    setmessage(e.target.value);
  };

  const submit = async () => {
    if (message.length != 0) {
      const url = "http://localhost:5000/addmessage";
      const data = {
        message: message,
      };
      await axios.post(url, data);
      const newdata = [data, ...list];
      setlist(newdata);
      setmessage("");
    }
  };

  // const weather = async () =>{
  //   let url = `https://api.openweathermap.org/data/2.5/weather?q="mumbai"&units=metric&appid=c303cf6a4b5523f432fbec616070ab15`;
  //   const result = await axios.get(url);
  //   const list = result.data;
  //   console.log(list.json);
  // }


  const getAll = async () => {
    const url = "http://localhost:5000/message";
    const result = await axios.get(url);
    const list = result.data;
    const newlist = [result.data, ...list];
    setlist(newlist);
  };

  return (
    <div className="container-fliud m-0">
      <div className="row g-0 bg-dark">
        <div className="col">
          <div className="bg-primary fs-2 p-2 text-center">Twitter</div>
        </div>
        {/* <div className="col-6 ">
          <div className="bg-info fs-2 p-2 d-flex justify-content-center">
            <div className="d-flex">Temperature</div>
          </div>
        </div> */}
      </div>
      <div className="row mt-4 justify-content-center">
        <div className="col-2"></div>
        <div className="col-8 d-flex">
          <div className="col-8">
            <input
              className="form-control"
              type="text"
              value={message}
              placeholder="Type To Tweet"
              onChange={changeMessage}
            />
          </div>
          <div className="col-4">
            <input
              className="btn w-100 btn-info"
              type="button"
              value="Tweet"
              onClick={submit}
            />
          </div>
        </div>
        <div className="col-2">
          <input
            className="btn w-100 btn-info"
            type="button"
            value="GetData"
            onClick={getAll}
          />
        </div>
        <div className="row"></div>
        <div className="col-3"></div>
        <div className="col-6 mt-5">
          <div className="mt-4">
            {list.map((item, index) => (
              <div
                className="m-2  border border-secondary rounded border-2 rounded fs-4 mb-3 "
                style={{ height: "45px" }}
                key={index}
              >
                <div>
                  {item.message}
                </div>
              </div>
            ))}
          </div>

          {/* <div>
            {list.map((item) => (
              <div >
                {item.message}
              </div>
            ))}
          </div> */}
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  );
}
// className="text-start border m-2 form-control"
