import LandingSection from "@/components/LandingSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactMeSection from "@/components/ContactMeSection";
import Alert from "@/components/Alert.client";
import ChatPlace from "@/components/chatWindow";


function App() {
  return (
    <>
      <main>
        <LandingSection />
        <ProjectsSection />
        <ContactMeSection />
        <ChatPlace />
        <Alert />
      </main>
    </>
)
}

export default App;
