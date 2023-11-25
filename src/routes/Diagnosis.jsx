import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';

export default function Diagnosis() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="grow">
        <Header />
      </div>
    </div>
  );
}
