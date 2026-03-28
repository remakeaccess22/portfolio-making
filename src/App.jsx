import { useState } from "react";
import { Header } from "./components/layout/Header/Header";
import { Container } from "./components/layout/Container";
import { Background } from "./components/layout/Background";
import { Cursor } from "./components/layout/Cursor";
import { HeroPage } from "./components/sections/HeroPage";
import { Stats } from "./components/sections/Stats";
import { FadeUp } from "./components/ui/FadeUp";
import { About } from "./components/sections/About";
import { CareerTimeline } from "./components/sections/CareerTimeline";
import { WorkProjects } from "./components/sections/WorkProjects";
import { SkillsTools } from "./components/sections/SkillsTools";
import { Footer } from "./components/sections/Footer";
import { SmoothScroll } from "./components/ui/SmoothScroll";
import { LeadershipSkills } from "./components/sections/LeadershipSkills";
import { Preloader } from "./components/layout/Preloader";

function App() {
  const [loading, setLoading] = useState(true);
  return (
    <>
      {loading && <Preloader onFinish={() => setLoading(false)} />}

      {!loading && (
        <>
          <Cursor />
          <SmoothScroll />
          <Background>
            <Container>
              <FadeUp>
                <Header />
              </FadeUp>
              <FadeUp>
                <HeroPage />
              </FadeUp>
            </Container>
            <FadeUp>
              <Stats />
            </FadeUp>
            <Container>
              <FadeUp>
                <About />
              </FadeUp>
              <FadeUp>
                <CareerTimeline />
              </FadeUp>
              <FadeUp>
                <WorkProjects />
              </FadeUp>
              <FadeUp>
                <LeadershipSkills />
              </FadeUp>
              <FadeUp>
                <SkillsTools />
              </FadeUp>
              <FadeUp>
                <Footer />
              </FadeUp>
            </Container>
          </Background>
        </>
      )}
    </>
  );
}
export default App;
