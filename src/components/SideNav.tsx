import './SideNav.css';

const generalItems = [
  'Program Data',
  'Sales Data',
  'Campaign Data',
  'Email Data',
  'Retainer Data',
];

const tiktokItems = ['Performance', 'Content'];

export default function SideNav() {
  return (
    <nav className="side-nav">
      <div className="side-nav__section">
        <div className="side-nav__section-title">General</div>
        {generalItems.map((item) => (
          <div
            key={item}
            className={`side-nav__item${item === 'Retainer Data' ? ' side-nav__item--active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="side-nav__section">
        <div className="side-nav__section-title">TikTok Shop</div>
        {tiktokItems.map((item) => (
          <div key={item} className="side-nav__item">
            {item}
          </div>
        ))}
      </div>
    </nav>
  );
}
