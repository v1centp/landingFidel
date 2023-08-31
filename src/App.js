import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import logo from "./assets/logo.png";


function App() {
  const data = {
    hero: {
      appType: 'challenging social app',
      tagLine: 'The world is a playground but people tend to forget about it.',
      description: 'available on 1st of November 2023',
      mainActionText: 'Playstore',
      extraActionText: 'App Store',
    },
    bottomLead: {
      mainActionText: 'Playstore',
      extraActionText: 'App Store',
    },
  }
  return (
    <div className="box-border">
      <div className="flex flex-col">
        <Navbar logo={logo} />
        <Hero
          appType={data.hero.appType}
          tagLine={data.hero.tagLine}
          description={data.hero.description}
          mainActionText={data.hero.mainActionText}
          extraActionText={data.hero.extraActionText}
        />
        <Footer logo={logo} />
      </div>
    </div>
  );
}

export default App;
