import "./App.scss";
import Logo from "../images/logo.svg";
import { useEffect, useState } from "react";
import days from "../data.json";

function App() {
  return (
    <main className="App">
      <div className="header">
        <div className="header__content">
          <p className="header__balance">My balance</p>
          <p className="header__total">$921.48</p>
        </div>
        <h1>
          <img className="header__logo" src={Logo} alt="Expenses chart logo" />
        </h1>
      </div>
      <section className="graph">
        <h2 className="graph__heading">Spending - Last 7 days</h2>
        <div className="graph__days">
          {days.map((day) => {
            return (
              <div className="graph__day" key={day.day}>
                <div
                  className="graph__day__bar"
                  style={{ height: day.amount / 0.349 }}
                  // onClick={Skontati}
                ></div>
                <p className="graph__day__text">{day.day}</p>
              </div>
            );
          })}
        </div>

        <div className="footer">
          <div className="footer__total">
            <p className="footer__text footer__total__text">Total this month</p>
            <p className="footer__total__number">$478.33</p>
          </div>
          <div className="footer__percentage">
            <p className="footer__percentage__number">+2.4%</p>
            <p className="footer__text"> from last month</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
