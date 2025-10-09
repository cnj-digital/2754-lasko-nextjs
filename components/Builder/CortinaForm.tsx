"use client";
import { useState, useEffect, useRef } from "react";
import ButtonSolid from "../Buttons/Solid";
import Input from "./Form/Input";
import Checkbox from "./Form/Checkbox";
import StepIndicator from "./CortinaForm/StepIndicator";
import BackButton from "./CortinaForm/BackButton";
import StepHeader from "./CortinaForm/StepHeader";
import SelectedInfoBox from "./CortinaForm/SelectedInfoBox";
import cx from "classnames";

type CortinaFormProps = {
  title?: string | null;
  // Add additional fields as backend exposes them (e.g., items, variant, asset)
};

const FORM_CORTINA_API: string =
  `${process.env.NEXT_PUBLIC_FORM_CORTINA_API ?? "https://2754-lasko-statamic.test/api"}/form-cortina`;

// Debug: Log the environment variable value
console.log('NEXT_PUBLIC_FORM_CORTINA_API:', process.env.NEXT_PUBLIC_FORM_CORTINA_API);
console.log('FORM_CORTINA_API:', FORM_CORTINA_API);

const content = {
  form: {
    title: "Izberi dan",
    description: "Tek bo potekal 8 dni: med 10. in 17.1.2026.",
    titleTwo: "Izberi uro",
    descriptionTwo: "Teklo se bo brez postanka, 24 ur na dan.",
    titleThree: "Posreduj podatke",
    descriptionThree: "Tako te lahko kontaktiramo in potrdimo prijavo.",
    selectedDay: "Tvoj izbrani dan:",
    selectedTermin: "Tvoj izbrani termin:",
    checkbox1Label:
      "Strinjam se s <a class='underline hover:no-underline' href='/pravila' target='_blank'>pravili dogodka</a>",
    checkbox2Label:
      "Strinjam se z obdelavo podatkov za namene pošiljanja e-novic.",
    ctaLabel: "Oddaj prijavo",
    ctaLabelLoading: "Pošiljanje...",
    errorMessageName: "Prosimo, vnesite ime",
    errorMessageLastName: "Prosimo, vnesite priimek",
    errorMessageEmail: "Prosimo, vnesite veljaven e-poštni naslov",
    errorMessagePhone: "Prosimo, vnesite telefonsko številko",
    errorMessageCheckbox1: "Prosimo, strinjajte se s pravili dogodka",
    errorMessageCheckbox2:
      "Prosimo, strinjajte se z obdelavo podatkov za namene pošiljanja e-novic.",
    thankyouTitle: "Prijava je oddana in zaključena",
    thankyouDescription:
      "Odlično, veselimo se, da se kmalu srečamo in skupaj naelektrimo!",
    thankyouDescriptionTwo:
      "Na tvoj email naslov smo poslali potrditev prijave.",
    thankyouDescriptionThree:
      "Kmalu lahko pričakuješ več informacij v zvezi z dogodkom, do takrat pa: NA ZDRAVJE!",
    firstName: "Ime",
    lastName: "Priimek",
    email: "E-pošta",
    phone: "Telefon",
    days: [
      {
        title: "Sobota 10.1.",
        date: "10.1.2026",
      },
      {
        title: "Nedelja 11.1.",
        date: "11.1.2026",
      },
      {
        title: "Ponedeljek 12.1.",
        date: "12.1.2026",
      },
      {
        title: "Torek 13.1.",
        date: "13.1.2026",
      },
      {
        title: "Sreda 14.1.",
        date: "14.1.2026",
      },
      {
        title: "Četrtek 15.1.",
        date: "15.1.2026",
      },
      {
        title: "Petek 16.1.",
        date: "16.1.2026",
      },
    ],
    hours: [
      {
        title: "1:00 - 2:00",
        hour: "1:00",
      },
      {
        title: "2:00 - 3:00",
        hour: "2:00",
      },
      {
        title: "3:00 - 4:00",
        hour: "3:00",
      },
      {
        title: "4:00 - 5:00",
        hour: "4:00",
      },
      {
        title: "5:00 - 6:00",
        hour: "5:00",
      },
      {
        title: "6:00 - 7:00",
        hour: "6:00",
      },
      {
        title: "7:00 - 8:00",
        hour: "7:00",
      },
      {
        title: "8:00",
        hour: "8:00",
      },
      {
        title: "9:00 - 10:00",
        hour: "9:00",
      },
      {
        title: "10:00 - 11:00",
        hour: "10:00",
      },
      {
        title: "11:00 - 12:00",
        hour: "11:00",
      },
      {
        title: "12:00 - 13:00",
        hour: "12:00",
      },
      {
        title: "13:00 - 14:00",
        hour: "13:00",
      },
      {
        title: "14:00 - 15:00",
        hour: "14:00",
      },
      {
        title: "15:00 - 16:00",
        hour: "15:00",
      },
      {
        title: "16:00 - 17:00",
        hour: "16:00",
      },
      {
        title: "17:00 - 18:00",
        hour: "17:00",
      },
      {
        title: "18:00 - 19:00",
        hour: "18:00",
      },
      {
        title: "19:00 - 20:00",
        hour: "19:00",
      },
      {
        title: "20:00 - 21:00",
        hour: "20:00",
      },
      {
        title: "21:00 - 22:00",
        hour: "21:00",
      },
      {
        title: "22:00 - 23:00",
        hour: "22:00",
      },
      {
        title: "23:00 - 00:00",
        hour: "23:00",
      },
    ],
  },
};

export default function CortinaForm({ title }: CortinaFormProps) {
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const [selectedHour, setSelectedHour] = useState<string | null>(null);
  const [step, setStep] = useState<number>(1);
  const [hourPage, setHourPage] = useState<number>(0);
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [showErrors, setShowErrors] = useState<boolean>(false);
  const [checkbox1, setCheckbox1] = useState<boolean>(false);
  const [checkbox2, setCheckbox2] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [formState, setFormState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const contentRef = useRef<HTMLDivElement>(null);
  const [maxStepHeight, setMaxStepHeight] = useState<number>(0);
  const [unavailableHours, setUnavailableHours] = useState<string[]>([]);

  useEffect(() => {
    const measure = () => {
      if (!contentRef.current) return;
      const currentHeight = contentRef.current.scrollHeight;
      setMaxStepHeight((prev) => (currentHeight > prev ? currentHeight : prev));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [step, selectedDay, selectedHour, hourPage, showErrors, formState]);

  // Fetch unavailable hours when a day is selected and moving to step 2
  useEffect(() => {
    const fetchUnavailableHours = async () => {
      if (!selectedDay || step !== 2) return;

      try {
        // Convert date from "10.1.2026" to "2026-01-10" format
        const [day, month, year] = selectedDay.split(".");
        const formattedDate = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;

        console.log('Checking availability for date:', selectedDay, '→', formattedDate);

        const backendBaseUrl = process.env.NEXT_PUBLIC_FORM_CORTINA_API || 'https://2754-lasko-statamic.test/api';
        const url = `${backendBaseUrl}/form-cortina/available-hours`;
        console.log('Fetching availability from:', url);
        
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            date: formattedDate, // e.g., "2026-01-10"
          }),
        });

        if (response.ok) {
          const data = await response.json();
          console.log('Availability response:', data);
          console.log('Fully booked hours:', data.fully_booked_hours);
          
          // Normalize hours: backend returns "09:00", frontend uses "9:00"
          // Convert "09:00" to "9:00", "10:00" stays "10:00"
          const normalizedHours = (data.fully_booked_hours || []).map((h: string) => {
            const hourNum = parseInt(h.split(':')[0]);
            return `${hourNum}:00`;
          });
          
          console.log('Normalized unavailable hours:', normalizedHours);
          setUnavailableHours(normalizedHours);
        } else {
          console.error('Availability check failed:', response.status, await response.text());
        }
      } catch (error) {
        console.error('Error fetching availability:', error);
        setUnavailableHours([]);
      }
    };

    fetchUnavailableHours();
  }, [selectedDay, step]);

  function toAppointmentDate(day: string | null, hour: string | null): string | null { 
    if (!day || !hour) return null;
    // day format: d.m.YYYY or dd.m.YYYY, hour format: H:MM or HH:MM
    const parts = day.split(".").filter(Boolean);
    if (parts.length < 3) return null;
    const d = parseInt(parts[0], 10);
    const m = parseInt(parts[1], 10);
    const y = parseInt(parts[2], 10);
    const [hStr, minStr] = hour.split(":");
    const h = parseInt(hStr, 10);
    const min = parseInt(minStr ?? "0", 10);
    const pad = (n: number) => (n < 10 ? `0${n}` : `${n}`);
    // Return MySQL-friendly datetime string
    return `${y}-${pad(m)}-${pad(d)} ${pad(h)}:${pad(min)}:00`;
  }
  const handleFormSubmit = async () => {
    setShowErrors(true);

    // Basic validation
    if (!firstName || !lastName || !email || !phone || !checkbox1) {
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return;
    }

    if (!FORM_CORTINA_API) {
      setFormState("error");
      setErrorMessage("Missing NEXT_PUBLIC_FORM_CORTINA_API endpoint.");
      return;
    }

    setFormState("loading");

    try {
      const payload = {
        name: firstName,
        surname: lastName,
        email,
        phone: phone || undefined,
        terms: checkbox1,
        newsletter: checkbox2,
        appointment_date: toAppointmentDate(selectedDay, selectedHour),
      };

      const res = await fetch(FORM_CORTINA_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || "Error on server");
      }
      setFormState("success");
      setSuccess(true);
      
      // Scroll to cortina-form section (100px from top)
      const formSection = document.getElementById('cortina-form');
      if (formSection) {
        const sectionTop = formSection.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: sectionTop - 100, behavior: 'smooth' });
      }
    } catch {
      setFormState("error");
      setErrorMessage("Ta termin je že zaseden. Maksimalno 3 prijave na termin.");
    }
  };

  return (
    <section
      id="cortina-form"
      className="max-w-8xl px-6 pt-8 pb-10 w-full mx-auto rounded-4xl"
      style={{
        backgroundImage: "url('/bg-green.jpg')",
        backgroundSize: "100% auto",
      }}
    >
      <div className="w-full md:max-w-lg mx-auto">
        {title && (
          <h2 className="text-white text-2xl md:text-[32px] leading-tight font-neutraface text-center mb-8">
            {title}
          </h2>
        )}
        {!success ? (
          <div
            ref={contentRef}
            className="w-full p-2 md:bg-[rgba(0,0,0,0.33)] rounded-xl md:px-8 md:py-6"
            style={{ minHeight: maxStepHeight ? `${maxStepHeight}px` : undefined }}
          >
            <div className="relative w-full p-2 bg-[rgba(0,0,0,0.33)] md:bg-transparent rounded-xl flex items-center justify-center gap-2 h-10 mb-5">
              {(step === 2 || step === 3) && (
                <BackButton
                  onClick={() => {
                    setStep(step - 1);
                    if (step === 2) setHourPage(0);
                    if (step === 3) setShowErrors(false);
                  }}
                />
              )}
              <StepIndicator currentStep={step} />
            </div>
            {step === 1 && (
              <div id="stepOne">
                <StepHeader
                  title={content.form.title}
                  description={content.form.description}
                  descriptionMargin="mb-12"
                />
                <div className="w-full flex flex-col gap-5">
                  {content.form.days.map((day, i) => {
                    const isSelected = selectedDay === day.date;
                    return (
                      <ButtonSolid
                        size="small"
                        title={day.title}
                        key={i}
                        type="button"
                        disableGradient={isSelected}
                        className={`w-full justify-center ${
                          isSelected
                            ? "!shadow-none !bg-[rgba(68,153,53,0.33)] md:!bg-[rgba(68,153,53,0.25)] !text-[rgba(0,0,0,0.33)] md:!text-[rgba(0,0,0,0.25)] pointer-events-none"
                            : ""
                        }`}
                        onClick={() => {
                          setSelectedDay(day.date);
                          setStep(step + 1);
                        }}
                      />
                    );
                  })}
                </div>
              </div>
            )}
            {step === 2 && (
              <div id="stepTwo">
                <StepHeader
                  title={content.form.titleTwo}
                  description={content.form.descriptionTwo}
                />
                <SelectedInfoBox
                  label={content.form.selectedDay}
                  selectedDay={selectedDay}
                />
                <div className="w-full flex flex-col gap-5">
                  <div
                    className={`w-full flex justify-center transition-opacity ${
                      hourPage > 0
                        ? "opacity-100"
                        : "opacity-0 pointer-events-none"
                    }`}
                  >
                    <button onClick={() => setHourPage(hourPage - 1)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="10"
                        viewBox="0 0 17 10"
                        fill="none"
                        className="rotate-180"
                      >
                        <path
                          d="M0.690794 0.57996C0.960898 0.309856 1.30467 0.174804 1.7221 0.174804C2.13953 0.174804 2.4833 0.309856 2.75341 0.57996L8.49926 6.32582L14.2451 0.579961C14.5152 0.309856 14.859 0.174805 15.2764 0.174805C15.6939 0.174805 16.0376 0.309856 16.3077 0.579961C16.5778 0.850065 16.7129 1.19383 16.7129 1.61127C16.7129 2.0287 16.5778 2.37247 16.3077 2.64258L9.53057 9.41974C9.38324 9.56707 9.22363 9.67167 9.05175 9.73355C8.87986 9.79445 8.6957 9.8249 8.49926 9.8249C8.30282 9.8249 8.11866 9.79445 7.94678 9.73355C7.77489 9.67167 7.61529 9.56707 7.46796 9.41974L0.690794 2.64258C0.420689 2.37247 0.285635 2.0287 0.285635 1.61127C0.285635 1.19383 0.420689 0.850064 0.690794 0.57996Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                  </div>
                  {(() => {
                    // Filter hours based on selected date
                    let filteredHours = content.form.hours;
                    
                    if (selectedDay === "10.1.2026") {
                      // Start from 9:00 for 10.1.2026
                      filteredHours = content.form.hours.filter(h => {
                        const hourNum = parseInt(h.hour.split(":")[0]);
                        return hourNum >= 9;
                      });
                    } else if (selectedDay === "16.1.2026") {
                      // End at 15:00 for 16.1.2026
                      filteredHours = content.form.hours.filter(h => {
                        const hourNum = parseInt(h.hour.split(":")[0]);
                        return hourNum <= 14;
                      });
                    }
                    
                    return filteredHours
                      .slice(hourPage * 6, hourPage * 6 + 6)
                      .map((hour, i) => {
                      const isSelected = selectedHour === hour.hour;
                      const isUnavailable = unavailableHours.includes(hour.hour);
                      return (
                        <ButtonSolid
                          size="small"
                          title={isUnavailable ? `${hour.title}` : hour.title}
                          key={i}
                          type="button"
                          className={`w-full justify-center ${
                            isSelected
                              ? "!shadow-none !bg-[rgba(68,153,53,0.33)] md:!bg-[rgba(68,153,53,0.25)] !text-[rgba(0,0,0,0.33)] md:!text-[rgba(0,0,0,0.25)] pointer-events-none"
                              : isUnavailable
                              ? "!shadow-none !bg-[rgba(68,153,53,0.33)] md:!bg-[rgba(68,153,53,0.25)] !text-[rgba(0,0,0,0.33)] md:!text-[rgba(0,0,0,0.25)] pointer-events-none"
                              : ""
                          }`}
                          disableGradient={isSelected || isUnavailable}
                          onClick={() => {
                            if (!isUnavailable) {
                              setSelectedHour(hour.hour);
                              setStep(step + 1);
                            }
                          }}
                        />
                      );
                    });
                  })()}
                  <div
                    className={`w-full flex justify-center transition-opacity ${
                      (() => {
                        let filteredHours = content.form.hours;
                        if (selectedDay === "10.1.2026") {
                          filteredHours = content.form.hours.filter(h => {
                            const hourNum = parseInt(h.hour.split(":")[0]);
                            return hourNum >= 9;
                          });
                        } else if (selectedDay === "16.1.2026") {
                          filteredHours = content.form.hours.filter(h => {
                            const hourNum = parseInt(h.hour.split(":")[0]);
                            return hourNum <= 15;
                          });
                        }
                        return (hourPage + 1) * 6 < filteredHours.length;
                      })()
                        ? "opacity-100"
                        : "opacity-0 pointer-events-none"
                    }`}
                  >
                    <button onClick={() => setHourPage(hourPage + 1)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="10"
                        viewBox="0 0 17 10"
                        fill="none"
                      >
                        <path
                          d="M0.690794 0.57996C0.960898 0.309856 1.30467 0.174804 1.7221 0.174804C2.13953 0.174804 2.4833 0.309856 2.75341 0.57996L8.49926 6.32582L14.2451 0.579961C14.5152 0.309856 14.859 0.174805 15.2764 0.174805C15.6939 0.174805 16.0376 0.309856 16.3077 0.579961C16.5778 0.850065 16.7129 1.19383 16.7129 1.61127C16.7129 2.0287 16.5778 2.37247 16.3077 2.64258L9.53057 9.41974C9.38324 9.56707 9.22363 9.67167 9.05175 9.73355C8.87986 9.79445 8.6957 9.8249 8.49926 9.8249C8.30282 9.8249 8.11866 9.79445 7.94678 9.73355C7.77489 9.67167 7.61529 9.56707 7.46796 9.41974L0.690794 2.64258C0.420689 2.37247 0.285635 2.0287 0.285635 1.61127C0.285635 1.19383 0.420689 0.850064 0.690794 0.57996Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            )}
            {step === 3 && (
              <div id="stepThree">
                <StepHeader
                  title={content.form.titleThree}
                  description={content.form.descriptionThree}
                />
                <SelectedInfoBox
                  label={content.form.selectedTermin}
                  selectedDay={selectedDay}
                  selectedHour={selectedHour}
                />
                <div className="w-full flex flex-col">
                  <Input
                    className="h-14"
                    label={content.form.firstName}
                    required={true}
                    variant_input={{ value: "text" }}
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    errorMessage={content.form.errorMessageName}
                    showError={showErrors}
                  />
                  <Input
                    className="h-14"
                    label={content.form.lastName}
                    required={true}
                    variant_input={{ value: "text" }}
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    errorMessage={content.form.errorMessageLastName}
                    showError={showErrors}
                  />
                  <Input
                    className="h-14"
                    label={content.form.email}
                    required={true}
                    variant_input={{ value: "email" }}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    errorMessage={content.form.errorMessageEmail}
                    showError={showErrors}
                  />
                  <Input
                    className="h-14"
                    label={content.form.phone}
                    required={true}
                    variant_input={{ value: "tel" }}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    errorMessage={content.form.errorMessagePhone}
                    showError={showErrors}
                  />
                  <div className="w-full bg-[rgba(0,0,0,0.33)] rounded-xl p-4 mt-1 flex flex-col gap-4">
                    <Checkbox
                      className="!bg-transparent !p-0"
                      classNameInput="!w-[18px] !h-[18px]"
                      label={content.form.checkbox1Label}
                      required={true}
                      content=""
                      title="checkbox1"
                      checked={checkbox1}
                      onChange={(e) => setCheckbox1(e.target.checked)}
                      errorMessage={content.form.errorMessageCheckbox1}
                      showError={showErrors}
                    />
                    <Checkbox
                      className="!bg-transparent !p-0"
                      classNameInput="!w-[18px] !h-[18px]"
                      label={content.form.checkbox2Label}
                      required={false}
                      content=""
                      title="checkbox2"
                      checked={checkbox2}
                      onChange={(e) => setCheckbox2(e.target.checked)}
                      showError={showErrors}
                      errorMessage={content.form.errorMessageCheckbox2}
                    />
                  </div>
                </div>
                {errorMessage && (
                  <div className="text-[#FF6161] text-sm text-center bg-[rgba(0,0,0,0.33)] rounded-xl p-4 mt-3">
                    {errorMessage}
                  </div>
                )}
                <ButtonSolid
                  size="small"
                  title={formState === "loading" ? content.form.ctaLabelLoading : content.form.ctaLabel}
                  type="button"
                  disableGradient={true}
                  className={cx(
                    "w-full justify-center mt-3 !bg-[#F4F4F4] !text-black",
                    formState === "loading" ? "opacity-50 pointer-events-none" : ""
                  )}
                  onClick={handleFormSubmit}
                />
              </div>
            )}
          </div>
        ) : (
          <div className="w-full p-2 md:bg-[rgba(0,0,0,0.33)] rounded-xl md:px-8 md:py-6">
            <div className="text-white text-center font-neutraface text-[22px] font-normal leading-[24px] uppercase mb-5">
              {content.form.thankyouTitle}
            </div>
            <div className="text-white text-center font-raleway text-lg font-semibold leading-[24px] mb-5">
              {content.form.thankyouDescription}
            </div>
            <SelectedInfoBox
              label={content.form.selectedTermin}
              selectedDay={selectedDay}
              selectedHour={selectedHour}
              className="mb-5"
            />
             <div className="text-center text-white/60 font-raleway text-[18px] font-semibold leading-[24px] mb-5">{content.form.thankyouDescriptionTwo}</div>
             <div className="text-center text-white/60 font-raleway text-[18px] font-semibold leading-[24px]">{content.form.thankyouDescriptionThree}</div>
          </div>
        )}
      </div>
    </section>
  );
}
