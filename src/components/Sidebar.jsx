import airplay from '../images/airplay.svg';
import clipboard from '../images/clipboard.svg';
import settings from '../images/settings.svg';
import smile from '../images/smile.svg';
import user from '../images/user.svg';

export const Sidebar = () => {
  return (
    <aside className="flex flex-col justify-between bg-sidebar text-white text-xl w-[239px]">
      <div>
        <a className="flex">
          <img src={airplay} />
          Dashboard
        </a>
        <a className="flex">
          <img src={clipboard} />
          "Upcoming visits
        </a>
        <a className="flex">
          <img src={settings} />
          "Patients
        </a>
        <a className="flex">
          <img src={settings} />
          Settings
        </a>
      </div>
      <div>
        <a className="flex">
          <img src={user} />
          Profile
        </a>
      </div>
    </aside>
  );
};
