import PageLayout from './PageLayout';
import Stepper from '../components/Stepper';
import ConditionalStep from '../components/ConditionalStep';
import Step from '../components/Step';
import { useState } from 'react';

export default function TutorialPage() {
    
    const [ condition, setCondition ] = useState(false);

    return (
        <PageLayout gobackButton className="flex flex-col">
            <Stepper>
                <Step>First Step</Step>
                <Step>Second Step</Step>
                <ConditionalStep condition={condition}>Conditional Step</ConditionalStep>
            </Stepper>
        </PageLayout>
    )
}