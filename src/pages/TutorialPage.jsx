import PageLayout from "./PageLayout";
import Stepper from "../components/Stepper";
import ConditionalStep from "../components/ConditionalStep";
import Step from "../components/Step";
import SpanGame from "../features/game/SpanGame";
import { useState } from "react";

export default function TutorialPage() {
  const [condition, setCondition] = useState(false);

  return (
    <PageLayout
      gobackButton
      className="mx-auto flex flex-col overflow-x-hidden overflow-y-auto"
    >
      <Stepper>
        <Step>
          <h2 className="mb-2 text-3xl font-bold">What is Memory Span?</h2>
          <p>
            In human memory, '<strong>span</strong>' refers to the amount of
            information that can be held in memory at a given time.
          </p>

          <h3 className="mt-4 mb-2 text-2xl font-semibold">
            The "Magic Number"
          </h3>
          <p>
            An American Psychologist named <em>George Armitage Miller</em>{" "}
            discovered that most people can remember about{" "}
            <strong>7 ± 2</strong> things at once. But newer research says it’s
            probably closer to <strong>4 ± 1</strong>.
          </p>

          <h3 className="mt-4 mb-2 text-2xl font-semibold">
            Types of Memory Span
          </h3>
          <ul className="ml-8">
            <li className="mb-2">
              <strong>Digit Span</strong> – How many numbers you can remember in
              order. <br /> <div>Try this: 732941 – can you say it back?</div>
            </li>
            <li>
              <strong>Word Span</strong> – How many words you can hold in your
              head. <br /> <div>Example: Apple, Chair, Dog, Moon, Phone</div>
            </li>
          </ul>
        </Step>
        <Step>
          <h2 className="mb-2 text-3xl font-bold">Let's Test Your Span</h2>
          <p className="">
            What is your span? How many digits can you hold in memory?
          </p>
          <h3 className="mt-4 mb-2 text-2xl font-semibold">
            What Do You Need to Do?
          </h3>
          <p>
            In the next page you will have to memorize some digits (let's start
            with 3) and after that you will have to write them down in the exact
            order they have been shown to you.
          </p>
          <h3 className="mt-4 mb-2 text-2xl font-semibold">Let's Start!</h3>
          <p>
            Can you handle that? Prove it, press on <em>Continue</em> and let's
            start the test...
          </p>
        </Step>
        <ConditionalStep condition={condition}>
            <SpanGame span={3}/>
        </ConditionalStep>
      </Stepper>
    </PageLayout>
  );
}
