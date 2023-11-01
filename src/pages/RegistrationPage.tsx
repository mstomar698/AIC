import { useEffect, useRef } from 'react';
import SimpleBar from 'simplebar';
import StepCard from '../components/StepsCard';

const steps = [
  {
    id: 1,
    description:
      'Let`s embody your beautiful ideas together, simplify the way you visualize your next big things.',
  },
  {
    id: 2,
    description:
      'Let`s embody your beautiful ideas together, simplify the way you visualize your next big things.',
  },
  {
    id: 3,
    description:
      'Let`s embody your beautiful ideas together, simplify the way you visualize your next big things.',
  },
];

type Props = {};

const RegistrationPage = (props: Props) => {
  const scrollableContainerRef = useRef(null);

  useEffect(() => {
    if (scrollableContainerRef.current) {
      new SimpleBar(scrollableContainerRef.current);
    }
  }, []);
  return (
    <div className="min-h-screen flex flex-col justify-start">
      <div className="flex flex-col justify-start lg:py-4 max-lg:py-2 max-sm:py-1 items-center text-center lg:pt-16 max-lg:pt-8 max-sm:pt-6">
        <span className="lg:text-4xl max-lg:text-2xl max-sm:textl-xl font-bold lg:pb-8 max-lg:pb-6 max-sm:pb-4">
          Register for AI Council
        </span>
        <div className="w-full flex justify-center items-center text-center">
          <button
            type="submit"
            className="p-4 rounded-lg bg-blue-500 w-[40%]"
            title="Register for AI Council"
          >
            Register
          </button>
        </div>
        <span className="lg:text-4xl max-lg:text-2xl max-sm:textl-xl font-bold lg:pt-16 max-lg:pt-8 max-sm:pt-4">
          Why register for AI Council?
        </span>
        <span className="text-[#292524] lg:w-[75%] max-lg:w-[90%] max-sm:w-full px-4 lg:text-xl max-lg:text-lg max-sm:text-sm leading-8 lg:py-4 max-lg:py-4 max-sm:py-2">
          By joining the Artificial Intelligence Council, institutes can benefit
          from a range of valuable resources and opportunities that includes
          sponsorships for fests and events, AI and AWS credits, along with
          partnerships with leading companies. These benefits will empower
          institutes to drive AI innovation, foster collaborations, and create a
          brighter future for the AI community in India.
        </span>
        <span className="lg:text-4xl max-lg:text-2xl max-sm:textl-xl font-bold lg:pt-8 max-lg:pt-6 max-sm:pt-4">
          How it works
        </span>
        {/* How It works Card */}
        <div className="w-[90%] flex lg:flex-row justify-around max-lg:flex-wrap lg:py-4 max-lg:py-2 max-sm:py-1 max-lg:hidden">
          {steps.map((step: any) => (
            <StepCard key={step.id} step={step} />
          ))}
        </div>
        <div
          className="relative w-full text-left max-sm:block max-w-full overflow-x-auto lg:hidden py-2"
          ref={scrollableContainerRef}
        >
          <div className="relative flex flex-row">
            {steps.map((step: any) => (
              <StepCard key={step.id} step={step} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
