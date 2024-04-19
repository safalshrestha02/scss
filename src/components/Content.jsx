import "../app.scss";

export default function Content() {
  return (
    <div className="main-content">
      <div className="text-content">
        <h1>
          Maximum profit<span>from advertising</span>
          on marketplaces
        </h1>
        <p>
          We help raise products to the top using
          <span>smart management and analytics</span>
        </p>
        <div className="content-btn">
          <button className="learn-more">Learn more</button>
          <button className="start">
            <span className="start-btn">Start for free</span>
            <span className="middle-space"></span>
            <span className="svg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
      <div className="info-content">
        <div className="about">
          <div className="user">
            <p>
              100K+ <span>Users</span>
              <span>Joined</span>
            </p>
          </div>
          <div className="about-btn">
            <button>
              About Company{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="numbers">
          <div className="earn">
            <h1>85%</h1>
            <p>
              <span>earn in the</span> <span>first month</span>
            </p>
          </div>
          <div className="profit">
            <h1>120K</h1>
            <p>
              <span>average profit</span> <span>per month</span>
            </p>
          </div>
          <div className="sales">
            <h1>5%</h1>
            <p>
              <span>sales decline</span> <span>after six month</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
