import WelcomeMessage from "./components/WelcomeMessage";
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";
import UserProfile from "./UserProfile";

function App() {
  return (
    <>
      {/* <WelcomeMessage /> */}
      <Header />
      <MainContent />
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <Footer />
    </>
  );
}

export default App;
