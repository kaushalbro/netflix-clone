import "./App.scss";
import Footer from "./Common/Footer/Footer";
import MainContent from "./Components/Contents/MainContent";
import Row_seperator from "./Components/Contents/Row_seperator";
import FrequentlyAQ from "./Components/FrequentlyAQ/FrequentlyAQ";
import Header from "./Components/Header/Header.jsx";
import NewRegisterForm from "./Components/NewRegister/NewRegisterForm";
import faq from "./Data/faq.json";
function App() {
  // const faq=[
  //   {"question":"What is Netflix","answer":"hello"},
  //   {"question":"What is Netflix","answer":"hello"}
  // ]
  return (
    <div className="app">
      <Header />
      <MainContent />
      <div className="frequently_asked_question_container">
        <h1>Frequently Asked Questions</h1>
        {faq.map((s) => (
          <FrequentlyAQ question={s.question} answer={s.answer} />
        ))}
        <div className="registerForm">
          <NewRegisterForm />
        </div>
      </div>
      <Row_seperator/>
      <Footer />
    </div>
  );
}

export default App;
