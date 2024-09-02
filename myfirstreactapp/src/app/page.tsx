import Welcome from "../components/welcome";
import Counter from "../components/counter";
import UserForm from "../components/userform";

export default function Home() {
  return (
    <div>
      <Welcome />
      <Counter />
      <UserForm />
    </div>
  );
}
