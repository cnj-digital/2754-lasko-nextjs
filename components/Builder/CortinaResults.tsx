"use client";
import { useEffect, useState } from "react";

type ProgramItem = {
  title: string;
  description: string;
};

type CortinaResultsProps = {
  title?: string;
  description?: string;
  title_two?: string;
  description_two?: string;
  title_three?: string;
  description_three?: string;
  energy_collected?: number; 
  program?: ProgramItem[];
};

export default function CortinaResults({
  title,
  description,
  title_two,
  description_two,
  title_three,
  description_three,
  energy_collected = 0,
  program = [],
}: CortinaResultsProps) {
  // Calculate initial fill height
  const calculateFillHeight = (percentage: number) => {
    const barrelHeight = 444.49;
    const barrelTop = 18;
    const cappedPercentage = Math.min(percentage, 100);
    const fillAmount = (cappedPercentage / 100) * barrelHeight;
    return barrelTop + (barrelHeight - fillAmount);
  };
  
  const [fillHeight, setFillHeight] = useState(() => calculateFillHeight(energy_collected));
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);
  const [waveOffset, setWaveOffset] = useState(0);
  
  // Update fill height when energy_collected changes
  useEffect(() => {
    setFillHeight(calculateFillHeight(energy_collected));
  }, [energy_collected]);

  // Animate water wave effect when not full
  useEffect(() => {
    if (energy_collected >= 100) {
      setWaveOffset(0);
      return;
    }

    let animationFrame: number;
    let startTime: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      
      // Create smooth up/down wave: oscillates between -10 and +10 (20px range)
      const wave = Math.sin(elapsed / 400) * 10;
      setWaveOffset(wave);
      
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [energy_collected]);

  return (
    <>
    <section id="results" className="max-w-8xl w-full mx-auto my-20">
      <div
        style={{ backgroundImage: "url('/bg-green.png')" }}
        className="bg-cover bg-center rounded-3xl shadow-card md:h-[560px] flex flex-col-reverse md:flex-row md:items-center px-8 md:pl-8 lg:pl-32 md:pr-0 overflow-hidden" 
      >
        <div className="shrink-0">
          <div className="relative w-full">
            <div className="pt-16 md:pt-0 z-10 absolute w-full h-full flex items-center justify-center md:w-auto md:h-auto md:bottom-[-145px] md:left-[30px] md:items-end text-[#559F3E] font-neutraface text-[28vw] md:text-[250px] font-normal leading-normal">{energy_collected}%</div>
            <img
              src="/placeholders/sod.svg"
              alt={title}
              className="w-full h-auto"
            />
            <svg
              className="absolute top-0 left-0 w-full h-full"
              viewBox="0 0 438 480"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid meet"
            >
              <mask
                id="mask0_10766_1776"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="-12"
                y="0"
                width="462"
                height="480"
              >
                <rect x="-11.0254" width="460.05" height="480" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_10766_1776)">
                <mask
                  id="mask1_10766_1776"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="16"
                  y="18"
                  width="406"
                  height="445"
                >
                  <path
                    d="M416.149 145.572C414.882 134.57 413.376 123.784 411.656 113.286C409.565 100.545 407.151 88.2348 404.415 76.501C402.228 67.1308 399.838 58.1325 397.245 49.5661C395.895 45.1269 394.509 40.7837 393.051 36.5965C391.999 33.5611 389.478 31.3415 386.348 30.6456C365.21 26.3144 335.671 23.231 305.87 21.1794C305.428 21.1434 304.986 21.1194 304.544 21.0834C272.795 18.9598 240.903 18 218.677 18C196.452 18 164.56 18.9598 132.811 21.0954C132.464 21.1194 132.106 21.1434 131.759 21.1674C101.863 23.207 72.2048 26.3024 51.007 30.6456C47.8763 31.3295 45.355 33.5491 44.3035 36.5965C42.8457 40.7957 41.4596 45.1269 40.1094 49.5661C37.5164 58.1325 35.1266 67.1308 32.9399 76.501C30.2035 88.2348 27.7898 100.545 25.6987 113.286C23.9661 123.82 22.4725 134.654 21.1939 145.692C14.5024 203.749 14.1678 267.697 20.8235 325.706C22.1857 337.608 23.8466 349.27 25.8063 360.56C28.0169 373.253 30.5979 385.491 33.5732 397.153C36.0825 406.967 38.8547 416.361 41.9137 425.252C43.8375 430.855 45.8808 436.278 48.0317 441.461C49.0115 443.824 50.8994 445.636 53.3251 446.44C71.8104 452.607 101.803 456.662 133.253 459.157C133.647 459.193 134.042 459.217 134.448 459.253C163.663 461.533 194.002 462.469 217.482 462.493C217.877 462.493 218.283 462.493 218.677 462.493C219.072 462.493 219.478 462.493 219.872 462.493C243.388 462.457 273.763 461.521 303.014 459.241C303.373 459.217 303.731 459.181 304.102 459.157C335.552 456.662 365.544 452.607 384.029 446.44C386.455 445.636 388.343 443.824 389.323 441.461C391.474 436.278 393.517 430.855 395.441 425.252C398.5 416.361 401.284 406.967 403.781 397.153C406.757 385.491 409.35 373.253 411.548 360.56C413.508 349.27 415.157 337.62 416.531 325.73C423.199 267.673 422.864 203.665 416.149 145.572Z"
                    fill="black"
                    fill-opacity="0.6"
                  />
                </mask>
                <g mask="url(#mask1_10766_1776)">
                  <rect
                    x="16"
                    y={fillHeight + waveOffset}
                    width="405.36"
                    height={444.49 - (fillHeight - 18) - waveOffset}
                    fill="black"
                  />
                </g>
              </g>
            </svg>
          </div>
        </div>
        <div className="py-10 md:py-0 md:pl-8 lg:pl-32 md:pr-16">
          {/* 0-66%: Show title and description */}
          {energy_collected < 66 && (
            <>
              {title && (
                <h2 className="text-green-800 font-black text-[40px] lg:text-[52px] leading-tight font-neutraface mb-6 text-center md:text-left">
                  {title}
                </h2>
              )}

              {description && (
                <div
                  className="prose prose-lg max-w-none text-black text-lg font-semibold md:mb-8 text-center md:text-left"
                  dangerouslySetInnerHTML={{ __html: description }}
                />
              )}
            </>
          )}

          {/* 66-99%: Show title_two and description_two */}
          {energy_collected >= 66 && energy_collected < 100 && (
            <>
              {title_two && (
                <h3 className="text-green-800 font-black text-[40px] lg:text-[52px] leading-tight font-neutraface mb-6 text-center md:text-left">
                  {title_two}
                </h3>
              )}

              {description_two && (
                <div
                  className="prose prose-lg max-w-none text-black text-lg font-semibold md:mb-8 text-center md:text-left"
                  dangerouslySetInnerHTML={{ __html: description_two }}
                />
              )}
            </>
          )}

          {/* 100%: Show title_three and description_three */}
          {energy_collected >= 100 && (
            <>
              {title_three && (
                <h3 className="text-green-800 font-black text-[40px] lg:text-[52px] leading-tight font-neutraface mb-6 text-center md:text-left">
                  {title_three}
                </h3>
              )}

              {description_three && (
                <div
                  className="prose prose-lg max-w-none text-black text-lg font-semibold md:mb-8 text-center md:text-left"
                  dangerouslySetInnerHTML={{ __html: description_three }}
                />
              )}
            </>
          )}
        </div>
      </div>
    </section>
     {program && program.length > 0 && (
       <section id="program" className="max-w-8xl w-full mx-auto my-20">
         <h2 className="text-green-800 font-black text-[48px] md:text-[48px] leading-tight font-neutraface mb-10">
           Program
         </h2>
         <div className="space-y-6 md:space-y-10">
           {program.map((item, index) => (
             <div
               key={index}
               className="overflow-hidden"
             >
               <button
                 onClick={() => setOpenAccordion(openAccordion === index ? null : index)}
                 className="w-full px-6 py-3 flex items-center  justify-between md:justify-start text-left transition-colors"
               >
                 <h3 className="text-green-800 font-black text-[32px] md:text-[40px] leading-tight font-neutraface">
                   {item.title}
                 </h3>
                 <svg
                   className={`w-4 h-4 text-green-800 transition-transform ml-6 ${
                     openAccordion === index ? 'rotate-180' : ''
                   }`}
                   xmlns="http://www.w3.org/2000/svg"
                   viewBox="0 0 17 10"
                   fill="none"
                 >
                   <path
                     d="M0.690794 0.57996C0.960898 0.309856 1.30467 0.174804 1.7221 0.174804C2.13953 0.174804 2.4833 0.309856 2.75341 0.57996L8.49926 6.32582L14.2451 0.579961C14.5152 0.309856 14.859 0.174805 15.2764 0.174805C15.6939 0.174805 16.0376 0.309856 16.3077 0.579961C16.5778 0.850065 16.7129 1.19383 16.7129 1.61127C16.7129 2.0287 16.5778 2.37247 16.3077 2.64258L9.53057 9.41974C9.38324 9.56707 9.22363 9.67167 9.05175 9.73355C8.87986 9.79445 8.6957 9.8249 8.49926 9.8249C8.30282 9.8249 8.11866 9.79445 7.94678 9.73355C7.77489 9.67167 7.61529 9.56707 7.46796 9.41974L0.690794 2.64258C0.420689 2.37247 0.285635 2.0287 0.285635 1.61127C0.285635 1.19383 0.420689 0.850064 0.690794 0.57996Z"
                     fill="currentColor"
                   />
                 </svg>
               </button>
               <div
                 className={`overflow-hidden transition-all duration-300 ease-in-out ${
                   openAccordion === index ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                 }`}
               >
                 <div className="px-8 pb-6">
                   <div
                     className="prose prose-lg max-w-none text-black text-lg font-semibold"
                     dangerouslySetInnerHTML={{ __html: item.description }}
                   />
                 </div>
               </div>
             </div>
           ))}
         </div>
       </section>
     )}
     </>
  );
}
