import Footer from "./Footer";

const Graph = ({ handleClick, colorIndex, days }) => {
  return (
    <section className="graph">
      <h2 className="graph__heading">Spending - Last 7 days</h2>
      <div className="graph__days">
        {days.map((day, i) => {
          const onePixel = 0.349;
          return (
            <div className="graph__day" key={day.day}>
              <div className="graph__day__popup">${day.amount}</div>
              {i !== colorIndex() ? (
                <div
                  className="graph__day__bar"
                  style={{ height: day.amount / onePixel }}
                  onClick={handleClick}
                ></div>
              ) : (
                <div
                  className="graph__day__bar graph__day__bar--max"
                  style={{ height: day.amount / onePixel }}
                  onClick={handleClick}
                ></div>
              )}
              <p className="graph__day__text">{day.day}</p>
            </div>
          );
        })}
      </div>

      <Footer />
    </section>
  );
};

export default Graph;
