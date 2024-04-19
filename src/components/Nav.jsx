import "../app.scss";

export default function Nav() {
  return (
    <header className="header">
      <nav className="nav-bar">
        <ul className="nav-menu">
          <a href="#">
            <li>
              <img src="/vite.svg" alt="logo" className="logo" />
            </li>
          </a>
          <a href="#">
            <li>Services</li>
          </a>
          <a href="#">
            <li>Partners</li>
          </a>
          <a href="#">
            <li>Team</li>
          </a>
          <a href="#">
            <li>Blog</li>
          </a>
        </ul>
      </nav>
      <div className="auth-btn">
        <button className="register">Register</button>
        <button className="login">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
          <span>Log in</span>
        </button>
      </div>
    </header>
  );
}
