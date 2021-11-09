import React, { useState, useEffect } from "react";

import Data from "../../assets/data.png";

import "./History.css";

function realToNumber(value) {
  try {
    let val = value.split(" ")[1].replace(",", ".");
    return Number(val);
  } catch (e) {
    return 0;
  }
}

function HistoryPage() {
  const [totalSpend, setTotalSpend] = useState("0,00");
  const [listSpend, setListSpend] = useState([]);

  useEffect(() => {
    setListSpend(JSON.parse(localStorage.getItem("Abastacimentos")));
    setTotalSpend(JSON.parse(localStorage.getItem("TotalAbastecido")));
  }, []);

  const handleRemove = (index, valor) => {
    const newHistory = [...listSpend];
    newHistory.splice(index, 1);
    setTotalSpend(totalSpend - realToNumber(valor));
    setListSpend(newHistory);
  };

  useEffect(() => {
    localStorage.setItem("Abastacimentos", JSON.stringify(listSpend));
  }, [listSpend]);

  useEffect(() => {
    localStorage.setItem("TotalAbastecido", JSON.stringify(totalSpend));
  }, [totalSpend]);

  return (
    <section id="page-history" className="component">
      <img src={Data} className="history" alt="data" />

      <div className="hold-form mt1">
        <span className="subtitle">Histórico</span>
      </div>

      <div className="card">
        <div className="pd3">
          <span className="subtitle black-primary">Gasto Total</span>
        </div>
        <div className="pd1">
          <span id="total-spent" className="subtitle primary-color">
            R$ {totalSpend}
          </span>
        </div>
        <hr />
        <div id="list-history" className="list">
          {listSpend.map((fuel, index) => (
            <div className="flex-between">
              <span
                className={
                  fuel.combustivel === "Gasolina" ? "gas-text" : "alcool-text"
                }
              >
                {fuel.combustivel}
              </span>
              <span>{fuel.valor}</span>
              <span> {fuel.data} </span>
              <span
                className="text-danger"
                onClick={() => handleRemove(index, fuel.valor)}
              >
                Remover
              </span>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HistoryPage;
