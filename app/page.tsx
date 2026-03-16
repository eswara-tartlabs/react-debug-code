import Form from './components/Form';
import AdvancedForm from './components/AdvancedForm';
import TableView from './components/TableView';
import ParentChild from './components/ParentChild';

export default function Home() {
  return (
    <main>
      <h1>AI Debugging Challenge</h1>
      <Form />
      <AdvancedForm />
      <TableView />
      <ParentChild />
    </main>
  );
}