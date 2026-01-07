import { useState } from 'react';
import { EXAMPLES } from '../data.js';
import TapButton from "./CoreConcept/TapButton.jsx";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx"

export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState(null);
    function handleSelect(selectedButton) {
        // selectedButton => 'Components', 'JSX', 'Props', 'State'
        console.log(selectedTopic);
        setSelectedTopic(selectedButton);
    }
    return (
        <Section title="Examples" id="examples">
            <h2>Examples</h2>
            <Tabs>
            </Tabs>
            <menu>
                <TapButton isSelected={selectedTopic === 'components'} onClick={() => handleSelect('components')}>Components</TapButton>
                <TapButton isSelected={selectedTopic === 'jsx'} onClick={() => handleSelect('jsx')}>JSX</TapButton>
                <TapButton isSelected={selectedTopic === 'props'} onClick={() => handleSelect('props')}>Props</TapButton>
                <TapButton isSelected={selectedTopic === 'state'} onClick={() => handleSelect('state')}>State</TapButton>
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
        </Section>
    );
}