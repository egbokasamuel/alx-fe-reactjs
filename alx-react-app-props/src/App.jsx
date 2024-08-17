// import WelcomeMessage from "./components/WelcomeMessage";
// import Header from "./Header";
// import MainContent from "./MainContent";
// import Footer from "./Footer";
// import UserProfile from "./UserProfile";
import ProfilePage from "./ProfilePage";
import UserContext from "./components/UserContext";
// import UserInfo from "./UserInfo";

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };
  return (
    <>
      {/* return <ProfilePage userData={userData} />;
      <UserInfo /> */}
      <UserContext.Provider value={userData}>
        <ProfilePage />
      </UserContext.Provider>
      {/* <WelcomeMessage /> */}
      {/* <Header /> */}
      {/* <MainContent /> */}
      {/* <UserProfile name="Alice" age="25" bio="Loves hiking and photography" /> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;
