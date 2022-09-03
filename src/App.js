import { useState, useEffect } from "react";
import Web3 from "web3/dist/web3.min.js";
import "./App.css";

function App() {
  const [web3, setWeb3] = useState();
  const [balance, setBalance] = useState("");
  const [walletAddress, setWallets] = useState("");

  const initWeb3 = async () => {
    const web3 = new Web3(window.ethereum);
    const rawBalance = await web3.eth.getBalance(walletAddress);
    const balance = web3.utils.fromWei(rawBalance);
    console.log(walletAddress);
    console.log("rawBalance", rawBalance, "balance", balance);
    setBalance(balance);
    setWeb3(web3);
  };

  const handleGetBalance = (e) => {
    setWallets(e.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    initWeb3();
  };

  return (
    <div className="App">
      <input
        type="text"
        id="message"
        name="message"
        onChange={handleGetBalance}
        value={walletAddress}
        autoComplete="off"
      ></input>
      <button onClick={handleClick}>Get Wallet Address</button>
      <p>{balance}</p>
    </div>
  );
}

export default App;
