import { useSelector } from "react-redux";
import Auth from "./components/Auth";
import Counter from "./components/Counter";
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";

function App() {
  const authSlice = useSelector((state) => state.auth);

  return (
    <>
      <Header />
      {!authSlice.isLoggedIn && <Auth />}
      {authSlice.isLoggedIn && (
        <>
          <UserProfile />
          <Counter />
        </>
      )}
    </>
  );
}

export default App;
