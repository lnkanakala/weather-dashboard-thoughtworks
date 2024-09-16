import { Component } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div id="banner_android" class="banner_stripe">
        <div class="banner_container">
          <a class="smartbanner__exit" onclick="bannerClose()"></a>
          <div>
            <p class="smartbanner-text">Temperature</p>
            <p class="smartbanner-text">Humidity</p>
            <p class="smartbanner-text">Wind speed</p>
            <input type={"search"}>
          </div>
        </div>
      </div>
    </div>
  );
}
