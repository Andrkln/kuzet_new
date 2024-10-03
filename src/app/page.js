'use client'
import LandingSection from "@/components/LandingSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactMeSection from "@/components/ContactMeSection";
import Alert from "@/components/Alert.client";
import ChatPlace from "@/components/chatWindow";
import PasswordGate from "./components/closer";
import Header from './components/Header';


function App() {
  return (
    <>
      <main>
        <PasswordGate>
        <Header />
        <LandingSection />
        <ProjectsSection />
        <ContactMeSection />
        <ChatPlace />
        </PasswordGate>
        <Alert />
      </main>
    </>
)
}

export default App;
