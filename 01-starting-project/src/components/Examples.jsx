import { useState } from 'react';
import { EXAMPLES } from '../data.js';
import TapButton from "./CoreConcept/TapButton.jsx";

export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState(null);
    function handleSelect(selectedButton) {
        // selectedButton => 'Components', 'JSX', 'Props', 'State'
        console.log(selectedTopic);
        setSelectedTopic(selectedButton);
    }
    return (
        <section id="examples">
            <h2>Examples</h2>
            <menu>
                <TapButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect('components')}>Components</TapButton>
                <TapButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TapButton>
                <TapButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect('props')}>Props</TapButton>
                <TapButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelect('state')}>State</TapButton>
            </menu>
            <div id="tab-content">
                {!selectedTopic && null}
                {selectedTopic && (
                    <>
                        <h3>{EXAMPLES[selectedTopic].title}</h3>
                        <p>{EXAMPLES[selectedTopic].description}</p>
                        <pre>
                            <code>{EXAMPLES[selectedTopic].code}</code>
                        </pre>
                    </>
                )}
            </div>
        </section>
    );
}