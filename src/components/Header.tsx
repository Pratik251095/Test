import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="header__collapse-btn">
        <span className="material-symbols-outlined" style={{ fontSize: 20 }}>
          keyboard_double_arrow_right
        </span>
      </div>
      <h1 className="header__title">Reports</h1>
    </header>
  );
}
