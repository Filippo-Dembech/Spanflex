import PageLayout from './PageLayout';
import Stepper from '../components/Stepper';
import ConditionalStep from '../components/ConditionalStep';
import Step from '../components/Step';
import { useState } from 'react';

export default function TutorialPage() {
    
    const [ condition, setCondition ] = useState(false);

    return (
        <PageLayout gobackButton className="flex flex-col overflow-y-auto overflow-x-hidden mx-auto">
            <Stepper>
                <Step>
                    <h2 className='text-3xl mb-2 font-bold'>What is Memory Span?</h2>
                    <p>In human memory, '<strong>span</strong>' refers to the amount of information that can be held in memory at a given time.</p>
                    
                    <h3 className='mt-4 mb-2 text-2xl font-semibold'>The "Magic Number"</h3>
                    <p>An American Psychologist named <em>George Armitage Miller</em> discovered that most people can remember about <strong>7 ± 2</strong> things at once. But newer research says it’s probably closer to <strong>4 ± 1</strong>.</p>
                    
                    <h3 className="mt-4 mb-2 text-2xl font-semibold">Types of Memory Span</h3>
                    <ul className='ml-8'>
                        <li className="mb-2"><strong>Digit Span</strong> – How many numbers you can remember in order. <br/> <div class="example">Try this: 732941 – can you say it back?</div></li>
                        <li><strong>Word Span</strong> – How many words you can hold in your head. <br/> <div class="example">Example: Apple, Chair, Dog, Moon, Phone</div></li>
                    </ul>
                </Step>
                <Step>Second Step</Step>
                <ConditionalStep condition={condition}>Conditional Step</ConditionalStep>
            </Stepper>
        </PageLayout>
    )
}