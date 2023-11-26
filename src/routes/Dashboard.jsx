import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { Form } from '../components/Form';
export default function Dashboard() {
  return (
    <div className="flex h-max">
      <Sidebar />
      <div className="grow">
        <Header />
        <Form />
      </div>
    </div>
  );
}
