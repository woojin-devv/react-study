
import Header from "./components/Header/Header.jsx";
import CoreConcept from './components/CoreConcept/CoreConcept.jsx';
import TapButton from "./components/CoreConcept/TapButton.jsx";
import { CORE_CONCEPTS } from './data.js';


function App() {
  let tabContent = 'Please select a tab.';
  function handleSelect(selectedButton) {
    // selectedButton => 'Components', 'JSX', 'Props', 'State'
    console.log(selectedButton);
    tabContent = `Selected Tab: ${selectedButton}`;
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TapButton onSelect={() => handleSelect('Components')}>Components</TapButton>
            <TapButton onSelect={() => handleSelect('JSX')}>JSX</TapButton>
            <TapButton onSelect={() => handleSelect('Props')}>Props</TapButton>
            <TapButton onSelect={() => handleSelect('State')}>State</TapButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
