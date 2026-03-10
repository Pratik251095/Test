import './IconSidebar.css';

const mainNavIcons = [
  'person_search',
  'person_check',
  'campaign',
  'chat',
  'panorama',
  'shopping_bag',
  'insert_chart',
  'attach_money',
  'psychiatry',
];

const bottomNavIcons = ['settings', 'support_agent'];

export default function IconSidebar() {
  return (
    <div className="icon-sidebar">
      <div className="icon-sidebar__logo">
        <div className="icon-sidebar__logo-circle">
          <span className="material-symbols-outlined">arrow_upward</span>
        </div>
      </div>

      <nav className="icon-sidebar__nav">
        {mainNavIcons.map((icon) => (
          <div key={icon} className="icon-sidebar__nav-item">
            <span className="material-symbols-outlined">{icon}</span>
          </div>
        ))}
      </nav>

      <div className="icon-sidebar__bottom">
        <div className="icon-sidebar__divider" />
        <div className="icon-sidebar__nav-item">
          <span className="material-symbols-outlined">notifications</span>
        </div>
        {bottomNavIcons.map((icon) => (
          <div key={icon} className="icon-sidebar__nav-item">
            <span className="material-symbols-outlined">{icon}</span>
          </div>
        ))}
        <div className="icon-sidebar__divider" />
        <div className="icon-sidebar__avatar" />
      </div>
    </div>
  );
}
