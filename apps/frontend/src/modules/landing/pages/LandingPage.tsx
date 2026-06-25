import {
  TopBar,
  Navbar,
  HeroSection,
  FeatureHighlight,
  PopularServices,
  StatsSection,
  WeatherMapSection,
  TimelineSection,
  UpdatesSection,
  LeadershipSection,
  ContactSection,
  QuizSection,
  Footer,
} from '../components';

export function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navbar />
      <main>
        <HeroSection />
        <FeatureHighlight />
        <PopularServices />
        <StatsSection />
        <WeatherMapSection />
        <TimelineSection />
        <UpdatesSection />
        <LeadershipSection />
        <ContactSection />
        <QuizSection />
      </main>
      <Footer />
    </div>
  );
}
