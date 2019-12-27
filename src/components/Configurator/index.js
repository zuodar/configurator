import React from "react";

const TrackBtn = ({ trackLength, setTrackLength, length }) => 
<button 
  style={{
    marginLeft: 12,
    width: "60px",
    height: 45,
    backgroundColor: trackLength == length ? "white" : "#4CAF50",
    color: trackLength == length ? "#4CAF50" : "white",
    border: "none",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    borderRadius: "8px",
    cursor: "pointer"
  }}
  onClick={() => setTrackLength(length)}
  >
  {length} cm
</button> 
const Configurator = ({ addToCart, configuredProduct, dmp, setDmp, qty, setQty, trackLength , setTrackLength, mountingWall, setMountingWall  }) => (
    <>
      <p> Configurator {qty} </p>
      <hr />
      <div>
        Prowadnica
        <TrackBtn
          trackLength={trackLength}
          setTrackLength={setTrackLength}
          length={120}
        />
        <TrackBtn
          trackLength={trackLength}
          setTrackLength={setTrackLength}
          length={180}
        />
        <TrackBtn
          trackLength={trackLength}
          setTrackLength={setTrackLength}
          length={200}
        />
        <TrackBtn
          trackLength={trackLength}
          setTrackLength={setTrackLength}
          length={240}
        />
      </div>

      <hr />
      <div>
        Mocowanie
        <button
          style={{
            marginLeft: 20,
            width: "90px",
            height: 45,
            backgroundColor: mountingWall == 0 ? "white" : "#4CAF50",
            color: mountingWall == 0 ? "#4CAF50" : "white",
            border: "none",
            textAlign: "center",
            textDecoration: "none",
            display: "inline-block",
            borderRadius: "8px 0 0 8px",
            cursor: "pointer"
          }}
          onClick={() => setMountingWall(0)}
        >
          Do stropu
        </button>
        <button
          style={{
            width: "90px",
            height: 45,
            backgroundColor: mountingWall == 1 ? "white" : "#4CAF50",
            color: mountingWall == 1 ? "#4CAF50" : "white",
            border: "none",
            textAlign: "center",
            textDecoration: "none",
            display: "inline-block",
            borderRadius: "0 8px 8px 0",
            cursor: "pointer"
          }}
          onClick={() => setMountingWall(1)}
        >
          Do ściany
        </button>
      </div>



      <hr />
      <div>
        Domykacz
        <button
          style={{
            marginLeft: 20,
            width: "60px",
            height: 45,
            backgroundColor: dmp < 1 ? "white" : "#4CAF50",
            color: dmp < 1 ? "#4CAF50" : "white",
            border: "none",
            textAlign: "center",
            textDecoration: "none",
            display: "inline-block",
            borderRadius: "8px 0 0 8px",
            cursor: "pointer"
          }}
          onClick={() => setDmp(0)}
        >
          Nie
        </button>
        <button
          style={{
            width: "60px",
            height: 45,
            backgroundColor: dmp >= 1 ? "white" : "#4CAF50",
            color: dmp >= 1 ? "#4CAF50" : "white",
            border: "none",
            textAlign: "center",
            textDecoration: "none",
            display: "inline-block",
            borderRadius: "0 8px 8px 0",
            cursor: "pointer"
          }}
          onClick={() => setDmp(1)}
        >
          Tak
        </button>
      </div>


      <hr />
      <div style={{ display: "flex" }}>
        <input
          type="number"
          min="1"
          max="99"
          value={qty}
          onChange={e => setQty(e.target.value)}
        />

        <button
          style={{
            marginLeft: 20,
            width: "100%",
            height: 45,
            backgroundColor: "#4CAF50",
            border: "none",
            color: "white",
            padding: "15px 32px",
            textAlign: "center",
            textDecoration: "none",
            display: "inline-block",
            fontSize: "16px",
            borderRadius: 8,
            cursor: "pointer"
          }}
          onClick={() => addToCart(configuredProduct(qty, dmp, trackLength, mountingWall))}
        >
          
          Add to Cart {qty}
        </button>
      </div>
    </>
)

export default Configurator;