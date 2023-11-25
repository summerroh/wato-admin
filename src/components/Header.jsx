import profilePicture from '../images/profile-picture.png';
import bell from '../images/bell.svg';

export const Header = ({ userInfo }) => {
  const user = { ...userInfo, name: 'Emre', avatar: profilePicture };
  return (
    <header>
      <p>
        Life<span>++</span>
      </p>
      <div>
        <img src={user.avatar} />
        <p>{user.name}</p>
        <img src={bell} />
      </div>
    </header>
  );
};
