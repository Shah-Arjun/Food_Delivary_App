import React from "react";

export default function Card() {
  return (
    <div>
      <div>
        <div
          className="card mt-3"
          style={{ width: "18rem", maxHeight: "360px" }}>
          <img src="https://media.istockphoto.com/id/613770824/photo/penne-pasta-with-tuna-and-basil.jpg?s=1024x1024&w=is&k=20&c=Ewg27LXRknTGQ3BPbpOWSMOyaOcm3BtMZcrWSRGrOyU=
" alt="Indian food" className="card-img-top"/>
          <div className="card-body">
            <h5 className="card-title"> Card title </h5>
            <p className="card-text"> This is card 's text.</p>
            <div className="container w-100">
              <select className="m-2 h-100 bg-success rounded" name="" id="">
                
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      
                      {i + 1}
                    </option>
                  );
                })}
              </select>

              <select className="m-2 h-100 bg-success rounded" name="" id="">
                <option value="half"> Half </option>
                <option value="full"> Full </option>
              </select>

              <div className="d-inline fs-5"> Total Cost </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
