import { useContext } from 'react';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { DiseasesContext } from '../store/DiseasesContext';
import { CardList } from '../components/CardList';

export default function Diagnosis() {
  const { diseases } = useContext(DiseasesContext);

  return (
    <div className="flex h-max">
      <Sidebar />
      <div className="grow">
        <Header />
        <CardList items={diseases} />
      </div>
    </div>
  );
}
