import React from "react";
import Footer from "../Common/Footer/Footer.jsx";
import MainContent from "../Components/Contents/MainContent.jsx";
import Row_seperator from "../Components/Contents/Row_seperator";
import FrequentlyAQ from "../Components/FrequentlyAQ/FrequentlyAQ";
import Header from "../Components/Header/Header.jsx";
import NewRegisterForm from "../Components/NewRegister/NewRegisterForm";
import faq from "../Data/faq.json";
import "./Css/HomePage.scss"

export default function HomePage() {
  return (
    <>
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

      <Row_seperator />
      <Footer />
    </>
  );
}
