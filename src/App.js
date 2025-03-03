import './App.css';
import Header from './components/header';
import MediaCard from './components/projects';
import FloatingActionButtonExtendedSize from './components/fab';
import DenseAppBar from './components/second header';
import About from './components/about';
import SkillsSection from './components/skills';
import ContactCard from './components/contactcard/ContactCard';
import { Home } from './components/home';

function App() {

    return (
        <div className="App">
            <Header/>
            <main id='home'><Home /></main>
            <main id='about'><About /></main>
            <main id='skills'><SkillsSection /></main>
            <main id='projects'><MediaCard /></main>
            <main id='contact'><ContactCard /></main>
            <FloatingActionButtonExtendedSize />
            <DenseAppBar />
        </div>
    );
}

export default App;
