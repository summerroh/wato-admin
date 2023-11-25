import airplay from '../images/airplay.svg';
import clipboard from '../images/clipboard.svg';
import settings from '../images/settings.svg';
import smile from '../images/smile.svg';
import user from '../images/user.svg';

export const Sidebar = () => {
  return (
    <aside className=" px-[27px] flex flex-col justify-between bg-sidebar text-white text-xl w-[239px] pt-[84px] ">
      <div className="gap-y-7 flex flex-col">
        <a className="flex gap-x-2">
          <img src={airplay} />
          Dashboard
        </a>
        <a className="flex gap-x-2">
          <img src={clipboard} />
          Upcoming visits
        </a>
        <a className="flex gap-x-2">
          <img src={settings} />
          Patients
        </a>
        <a className="flex gap-x-2">
          <img src={settings} />
          Settings
        </a>
      </div>
      <div>
        <a className="flex gap-x-2">
          <img src={user} />
          Profile
        </a>
      </div>
    </aside>
  );
};
