import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { Form } from '../components/Form';
export default function Dashboard() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="max-w-[1070px]">
        <Header />
        <Form />
      </div>
    </div>
  );
}
