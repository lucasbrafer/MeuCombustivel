import React, { useState } from "react";

import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

import GasImg from "../../assets/gas.png";
import ArrowBack from "../../assets/back.svg";
import Crow from "../../assets/crow.png";

import "./Gas.css";

function GasPage(props) {
  const [inFirstPage, setInFirstPage] = useState(true);

  const [alcool, setAlcool] = useState("");
  const [gas, setGas] = useState("");
  const [value, setValue] = useState("");

  const [bestFuel, setBestFuel] = useState();

  const realToNumber = (value) => {
    let val = value.split(" ")[1].replace(",", ".");
    return Number(val);
  };

  const handleBest = () => {
    const gasIsBest = realToNumber(gas) * 0.7 < realToNumber(alcool);
    setBestFuel(gasIsBest ? "Gasolina" : "Álcool");
    setInFirstPage(false);
  };

  const handleBack = () => {
    setInFirstPage(true);
    setAlcool("");
    setGas("");
    setBestFuel("");
  };

  const handleSetResult = () => {
    let fueling = JSON.parse(localStorage.getItem("Abastacimentos"));

    const dateNow = new Date();

    const fuelInfo = {
      valor: value,
      data:
        dateNow.getDate() +
        "/" +
        dateNow.getMonth() +
        1 +
        "/" +
        dateNow.getFullYear(),
    };

    if (!fueling) {
      fueling = [];
    }

    fueling.unshift(fuelInfo);

    localStorage.setItem("Abastacimentos", JSON.stringify(fueling));

    handleBack();
  };

  const FirstPage = () => (
    <section id="page-gas" className="component">
      <div className="gas-img">
        <img src={GasImg} alt="alt" />
      </div>

      <div className="text-center w-100 text-white mt2">
        <h3> Calcule o que está compensando mais hoje</h3>
        <span className="mt2">
          O preço do Álcool precisa ser inferior à 70%
        </span>
      </div>
      <div className="hold-form pd4">
        <div className="customInput">
          <span className="subtitle">Gasolina</span>
          <Input
            mask="R$\ 9,99"
            value={gas}
            onChange={(e) => setGas(e.target.value)}
          />
        </div>
        <div className="customInput">
          <span className="subtitle">Álcool</span>
          <Input
            mask="R$\ 9,99"
            value={alcool}
            onChange={(e) => setAlcool(e.target.value)}
          />
        </div>
      </div>

      <div className="container-center pd6">
        <Button onClick={() => handleBest()}>Calcular</Button>
      </div>
    </section>
  );

  const SecondPage = () => (
    <section id="page-result" className="component">
      <div className="arrow-container">
        <span onClick={() => handleBack()} href="#">
          <img src={ArrowBack} alt="back" />
        </span>
      </div>
      <img src={Crow} className="crow" alt="crow" />
      <div className="hold-form pd4">
        <div>
          <span className="title">{bestFuel}</span>
        </div>
        <div>
          <span className="mt2 text-white">Está com maior custo benefício</span>
        </div>
        <div className="mt3">
          <span className="subtitle">Nos Diga!</span>
          <br />
          <span className="subtitle">Quanto você abasteceu?</span>
        </div>
      </div>
      <div className="customInput mt2">
        <Input
          mask="R$\ 999,99"
          value={value}
          className="large"
          onChange={(e) => setValue(e.target.value)}
        />
      </div>

      <Button onClick={() => handleSetResult()}>Confirmar</Button>
    </section>
  );

  return <>{inFirstPage ? FirstPage() : SecondPage()}</>;
}

export default GasPage;
