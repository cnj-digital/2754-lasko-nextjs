"use client";
import { useState, useEffect, useRef, useMemo, useCallback } from "react";
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
  form_type?: {
    value: string;
    label: string;
  };
  open_all_dates?: boolean;
  // Add additional fields as backend exposes them (e.g., items, variant, asset)
};

const FORM_CORTINA_API: string = `${
  process.env.NEXT_PUBLIC_FORM_CORTINA_API ??
  "https://2754-lasko-statamic.test/api"
}/form-cortina`;

const FORM_DAYS = [
  {
    title: "Sobota, 10.1.",
    date: "10.1.2026",
  },
  {
    title: "Nedelja, 11.1.",
    date: "11.1.2026",
  },
  {
    title: "Ponedeljek, 12.1.",
    date: "12.1.2026",
  },
  {
    title: "Torek, 13.1.",
    date: "13.1.2026",
  },
  {
    title: "Sreda, 14.1.",
    date: "14.1.2026",
  },
  {
    title: "Četrtek, 15.1.",
    date: "15.1.2026",
  },
  {
    title: "Petek, 16.1.",
    date: "16.1.2026",
  },
];

const FORM_HOURS = [
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
    title: "8:00 - 9:00",
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
];

const PARTNER_SLOTS = [
  {
    date: "10.1.2026",
    hours: [
      {
        hour: "17:00",
      },
      {
        hour: "19:00",
      },
      {
        hour: "21:00",
      },
    ],
  },
  {
    date: "11.1.2026",
    hours: [
      {
        hour: "6:00",
      },
      {
        hour: "8:00",
      },
      {
        hour: "10:00",
      },
      {
        hour: "12:00",
      },
      {
        hour: "17:00",
      },
      {
        hour: "19:00",
      },
      {
        hour: "21:00",
      },
    ],
  },
  {
    date: "12.1.2026",
    hours: [
      {
        hour: "10:00",
      },
      {
        hour: "12:00",
      },
      {
        hour: "19:00",
      },
      {
        hour: "21:00",
      },
    ],
  },
  {
    date: "13.1.2026",
    hours: [
      {
        hour: "6:00",
      },
      {
        hour: "10:00",
      },
      {
        hour: "12:00",
      },
      {
        hour: "19:00",
      },
      {
        hour: "21:00",
      },
    ],
  },
  {
    date: "14.1.2026",
    hours: [
      {
        hour: "6:00",
      },
      {
        hour: "10:00",
      },
      {
        hour: "12:00",
      },
      {
        hour: "19:00",
      },
      {
        hour: "21:00",
      },
    ],
  },
  {
    date: "15.1.2026",
    hours: [
      {
        hour: "6:00",
      },
      {
        hour: "10:00",
      },
      {
        hour: "12:00",
      },
      {
        hour: "19:00",
      },
      {
        hour: "21:00",
      },
    ],
  },
  {
    date: "16.1.2026",
    hours: [
      {
        hour: "6:00",
      },
      {
        hour: "10:00",
      },
      {
        hour: "12:00",
      },
    ],
  },
];

const RADIO_SLOTS = [
  {
    date: "10.1.2026",
    hours: [
      {
        hour: "10:00",
      },
      {
        hour: "11:00",
      },
      {
        hour: "12:00",
      },
      {
        hour: "14:00",
      },
      {
        hour: "15:00",
      },
    ],
  },
  {
    date: "11.1.2026",
    hours: [
      {
        hour: "14:00",
      },
      {
        hour: "15:00",
      },
    ],
  },
  {
    date: "12.1.2026",
    hours: [
      {
        hour: "6:00",
      },
      {
        hour: "7:00",
      },
      {
        hour: "8:00",
      },
      {
        hour: "14:00",
      },
      {
        hour: "15:00",
      },
      {
        hour: "17:00",
      },
    ],
  },
  {
    date: "13.1.2026",
    hours: [
      {
        hour: "8:00",
      },
      {
        hour: "14:00",
      },
      {
        hour: "15:00",
      },
      {
        hour: "17:00",
      },
    ],
  },
  {
    date: "14.1.2026",
    hours: [
      {
        hour: "8:00",
      },
      {
        hour: "14:00",
      },
      {
        hour: "15:00",
      },
      {
        hour: "17:00",
      },
    ],
  },
  {
    date: "15.1.2026",
    hours: [
      {
        hour: "8:00",
      },
      {
        hour: "14:00",
      },
      {
        hour: "15:00",
      },
      {
        hour: "17:00",
      },
    ],
  },
  {
    date: "16.1.2026",
    hours: [
      {
        hour: "8:00",
      },
      {
        hour: "14:00",
      },
    ],
  },
];

const RESERVED_HOURS_BY_DATE = [...PARTNER_SLOTS, ...RADIO_SLOTS].reduce(
  (acc, slot) => {
    const existing = acc.get(slot.date) ?? new Set<string>();
    slot.hours.forEach(({ hour }) => existing.add(hour));
    acc.set(slot.date, existing);
    return acc;
  },
  new Map<string, Set<string>>()
);

const ensureReservedHour = (date: string, hour: string) => {
  const existing = RESERVED_HOURS_BY_DATE.get(date) ?? new Set<string>();
  existing.add(hour);
  RESERVED_HOURS_BY_DATE.set(date, existing);
};

ensureReservedHour("10.1.2026", "9:00");
ensureReservedHour("16.1.2026", "15:00");

const USER_SLOT_TEMPLATE = FORM_DAYS.map(({ date }) => ({
  date,
  hours: FORM_HOURS.map(({ hour }) => ({ hour })),
}));

const content = {
  form: {
    title: "Izberi dan",
    description: "Tek bo potekal od sobote, 10. 1., do petka, 16. 1. 2026.",
    titleTwo: "Izberi uro",
    descriptionTwo: "Teklo se bo brez postanka, 24 ur na dan.",
    titleThree: "Posreduj podatke",
    descriptionThree: "Tako te lahko kontaktiramo in potrdimo prijavo.",
    selectedDay: "Tvoj izbrani dan:",
    selectedTermin: "Tvoj izbrani termin:",
    checkbox1Label:
      "Strinjam se s <a class='underline hover:no-underline' href='/si/pravila-in-pogoji-razpisa-cortina' target='_blank'>pravili in pogoji</a> udeležbe na dogodku »LAŠKO MARATON LEGEND«.",
    checkbox2Label:
      "Strinjam se z <a class='underline hover:no-underline' href='/si/izjava-o-varstvu-osebnih-podatkov' target='_blank'>obdelavo podatkov</a> za namene izvedbe in obveščanja o dogodku »LAŠKO MARATON LEGEND«",
    checkbox3Label:
      "Strinjam se z obdelavo svojega e-naslova za namen obveščanja o aktivnostih blagovne znamke Laško.",
    ctaLabel: "Oddaj prijavo",
    ctaLabelLoading: "Pošiljanje...",
    ctaBackForm: "Nazaj na izbiro termina",
    errorMessageName: "Vnesite ime",
    errorMessageLastName: "Vnesite priimek",
    errorMessageEmail: "Vnesite e-poštni naslov",
    errorMessagePhone: "Vnesite telefonsko številko",
    errorMessageCheckbox1: "Strinjajte se s pravili dogodka",
    errorMessageCheckbox2: "Prosimo, strinjajte se z obdelavo.",
    errorMessageCheckbox3:
      "Prosimo, strinjajte se z obdelavo svojega e-naslova za namen obveščanja o aktivnostih blagovne znamke Laško.",
    olimpijskiKomiteLabel: "Olimpijski komite Slovenije",
    errorMessageOlimpijskiKomite:
      "Prosimo, izberite možnost.",
    thankyouTitle: "Samo še en korak te čaka!",
    thankyouDescription:
      "Odpri svoj e-mail, kamor smo poslali sporočilo s povezavo. Klikni nanjo, da potrdiš svojo prijavo.",
    thankyouDescriptionTwo:
      "Kmalu ti bomo poslali tudi več informacij v zvezi z dogodkom. Do takrat pa: NA ZDRAVJE!",
    thankyouDescriptionThree: "",
    firstName: "Ime",
    lastName: "Priimek",
    email: "E-pošta",
    phone: "Telefon",
    days: FORM_DAYS,
    hours: FORM_HOURS,
    //User dates and hours
    users: USER_SLOT_TEMPLATE,
    //Partner dates and hours
    partners: PARTNER_SLOTS,
    //Radio dates and hours
    radio: RADIO_SLOTS,
  },
};

const FORM_SLOT_LOOKUP = {
  users: content.form.users,
  partners: content.form.partners,
  radio: content.form.radio,
} as const;

export default function CortinaForm({ title, form_type, open_all_dates }: CortinaFormProps) {
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
  const [checkbox3, setCheckbox3] = useState<boolean>(false);
  const [olimpijskiKomiteSlovenije, setOlimpijskiKomiteSlovenije] = useState<
    string | null
  >(null);
  const [success, setSuccess] = useState<boolean>(false);
  const [formState, setFormState] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const contentRef = useRef<HTMLDivElement>(null); 
  const [unavailableHours, setUnavailableHours] = useState<string[]>([]);
  const [availablePlacesByHour, setAvailablePlacesByHour] = useState<
    Record<string, number>
  >({});

  const normalizedFormType = (form_type?.value || "all").toLowerCase();

  const restrictedSlots = useMemo<Map<string, Set<string>> | null>(() => {
    // If form type is "users" and open_all_dates is true, show all dates
    if (normalizedFormType === "users" && open_all_dates) {
      return null;
    }

    if (
      normalizedFormType !== "users" &&
      normalizedFormType !== "partners" &&
      normalizedFormType !== "radio"
    ) {
      return null;
    }

    let dataset =
      FORM_SLOT_LOOKUP[normalizedFormType as keyof typeof FORM_SLOT_LOOKUP];

    if (normalizedFormType === "partners") {
      const radioLookup = RADIO_SLOTS.reduce((acc, slot) => {
        acc.set(slot.date, new Set(slot.hours.map(({ hour }) => hour)));
        return acc;
      }, new Map<string, Set<string>>());

      const userAdjusted = content.form.users.map((slot) => {
        const radioHours = radioLookup.get(slot.date);
        const filteredHours = radioHours
          ? slot.hours.filter(({ hour }) => !radioHours.has(hour))
          : slot.hours;

        return {
          date: slot.date,
          hours: filteredHours.map(({ hour }) => ({ hour })),
        };
      });

      dataset = [...content.form.partners, ...userAdjusted];
    }

    const map = new Map<string, Set<string>>();
    dataset.forEach(({ date, hours }) => {
      map.set(date, new Set((hours ?? []).map((hourItem) => hourItem.hour)));
    });

    return map;
  }, [normalizedFormType, open_all_dates]);

  const hasAllowedDays = !restrictedSlots || restrictedSlots.size > 0;

  const hoursForSelectedDay = useMemo(() => {
    if (!selectedDay) {
      return [] as typeof content.form.hours;
    }

    let filtered = [...content.form.hours];

    if (selectedDay === "10.1.2026") {
      filtered = filtered.filter((h) => {
        const hourNum = parseInt(h.hour.split(":")[0]);
        return hourNum >= 10;
      });
    } else if (selectedDay === "16.1.2026") {
      filtered = filtered.filter((h) => {
        const hourNum = parseInt(h.hour.split(":")[0]);
        return hourNum <= 14;
      });
    }

    return filtered;
  }, [selectedDay]);

  const allowedHoursForSelectedDay = useMemo(() => {
    if (!selectedDay || !restrictedSlots) return null;
    return restrictedSlots.get(selectedDay) ?? null;
  }, [selectedDay, restrictedSlots]);

  const isTypeWithLimitedSlots =
    normalizedFormType === "partners" || normalizedFormType === "radio";

  const hoursForDisplay = useMemo(() => {
    if (!selectedDay) return [] as typeof content.form.hours;

    if (isTypeWithLimitedSlots) {
      if (!allowedHoursForSelectedDay) return [];
      return hoursForSelectedDay.filter((hour) =>
        allowedHoursForSelectedDay.has(hour.hour)
      );
    }

    if (normalizedFormType === "users") {
      // If open_all_dates is true, show all hours without filtering reserved ones
      if (open_all_dates) {
        return hoursForSelectedDay;
      }
      const reservedSet =
        RESERVED_HOURS_BY_DATE.get(selectedDay) ?? new Set<string>();
      return hoursForSelectedDay.filter((hour) => !reservedSet.has(hour.hour));
    }

    return hoursForSelectedDay;
  }, [
    selectedDay,
    hoursForSelectedDay,
    isTypeWithLimitedSlots,
    allowedHoursForSelectedDay,
    normalizedFormType,
    open_all_dates,
  ]);

  const totalVisibleHours = hoursForDisplay.length;

  // Helper function to convert date from "15.1.2026" to "2026-01-15"
  const formatDateForBackend = (dateStr: string): string => {
    const [day, month, year] = dateStr.split(".");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  useEffect(() => {
    const measure = () => {
      if (!contentRef.current) return;
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [step, selectedDay, selectedHour, hourPage, showErrors, formState]);

  useEffect(() => {
    if (selectedDay && restrictedSlots && !restrictedSlots.has(selectedDay)) {
      setSelectedDay(null);
      setSelectedHour(null);
      setHourPage(0);
      setStep(1);
    }
  }, [restrictedSlots, selectedDay]);

  useEffect(() => {
    setHourPage(0);
    setSelectedHour(null);
  }, [selectedDay]);

  // Fetch unavailable hours function - can be called manually or via useEffect
  const fetchUnavailableHours = useCallback(async () => {
      if (!selectedDay) return;

      try {
        // Convert date from "10.1.2026" to "2026-01-10" format
        const formattedDate = formatDateForBackend(selectedDay);

        const backendBaseUrl =
          process.env.NEXT_PUBLIC_FORM_CORTINA_API ||
          "https://2754-lasko-statamic.test/api";
        const url = `${backendBaseUrl}/form-cortina/available-hours`;

        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            date: formattedDate, // e.g., "2026-01-10"
          }),
        });

        if (response.ok) {
          const data = await response.json();

          // Normalize hours: backend returns "2026-01-10 10:00", frontend uses "10:00"
          const normalizedHours = (data.fully_booked_hours || []).map(
            (h: string) => {
              // Extract time part from "2026-01-10 10:00" -> "10:00"
              const timePart = h.split(" ")[1];
              return timePart || h;
            }
          );

          setUnavailableHours(normalizedHours);

          // Process entries_by_hour data from backend
          if (data.entries_by_hour) {
            const placesMap: Record<string, number> = {};
            const MAX_CAPACITY = 3;
            Object.entries(data.entries_by_hour).forEach(([datetime, count]) => {
            const availablePlaces = Math.max(
              0,
              MAX_CAPACITY - (count as number)
            );
              placesMap[datetime] = availablePlaces;
            });
            // Also set fully booked hours to 0
            (data.fully_booked_hours || []).forEach((h: string) => {
              placesMap[h] = 0;
            });
            setAvailablePlacesByHour(placesMap);
          }
        } else {
          console.error(
            "Availability check failed:",
            response.status,
            await response.text()
          );
        }
      } catch (error) {
        console.error("Error fetching availability:", error);
      }
  }, [selectedDay]);

  // Fetch unavailable hours when a day is selected
  useEffect(() => {
    fetchUnavailableHours();
  }, [selectedDay, fetchUnavailableHours]);

  function toAppointmentDate(
    day: string | null,
    hour: string | null
  ): string | null {
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
    // For "all" form type, checkboxes are not required
    const isAllFormType = normalizedFormType === "all";
    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      (!isAllFormType && (!checkbox1 || !checkbox2))
    ) {
      return;
    }

    // Validate Olimpijski komite Slovenije for Partners form type
    if (normalizedFormType === "partners" && !olimpijskiKomiteSlovenije) {
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
      const payload: any = {
        name: firstName,
        surname: lastName,
        email,
        phone: phone || undefined,
        terms: checkbox1,
        obdelava: checkbox2,
        newsletter: checkbox3,
        appointment_date: toAppointmentDate(selectedDay, selectedHour),
        type: normalizedFormType,
      };

      // Add Olimpijski komite Slovenije for Partners form type
      // Convert "Da" to true, "Ne" to false for boolean database field
      if (normalizedFormType === "partners" && olimpijskiKomiteSlovenije) {
        payload.olimpijski_komite_slovenije = olimpijskiKomiteSlovenije === "Da";
      }

      const res = await fetch(FORM_CORTINA_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      // Parse response to check if submission actually succeeded
      let responseData;
      const contentType = res.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        responseData = await res.json();
      } else {
        const text = await res.text();
        responseData = text ? JSON.parse(text) : {};
      }

      // Check if response indicates success (backend should return success: true or similar)
      // Also check for error messages in response
      if (!res.ok || responseData.error || responseData.success === false) {
        const errorMessage =
          responseData.message ||
          responseData.error ||
          "Ta termin je že zaseden. Maksimalno 3 prijave na termin.";
        setFormState("error");
        setErrorMessage(errorMessage);
        // Refresh availability data on error
        if (selectedDay) {
          fetchUnavailableHours();
        }
        return;
      }

      // Double-check: if backend returns success field, verify it's true
      if (responseData.success !== undefined && responseData.success !== true) {
        const errorMessage =
          responseData.message ||
          "Ta termin je že zaseden. Maksimalno 3 prijave na termin.";
        setFormState("error");
        setErrorMessage(errorMessage);
        // Refresh availability data on error
        if (selectedDay) {
          fetchUnavailableHours();
        }
        return;
      }

      setFormState("success");
      setSuccess(true);
      console.log("Response", res);

      // Scroll to cortina-form section (100px from top)
      const formSection = document.getElementById("cortina-form");
      if (formSection) {
        const sectionTop =
          formSection.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: sectionTop - 100, behavior: "smooth" });
      }
    } catch {
      setFormState("error");
      setErrorMessage(
        "Ta termin je že zaseden. Maksimalno 3 prijave na termin."
      );
    }
  };

  return (
    <section
      id="cortina-form"
      className="max-w-8xl px-6 p-8 pb-10 w-full mx-auto rounded-4xl my-20"
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
            className={cx(
              "w-full md:bg-[rgba(0,0,0,0.33)] rounded-xl md:px-8 md:py-6",
              normalizedFormType === "partners" 
                ? "h-[1120px] lg:h-[960px]" 
                : "h-[1040px] lg:h-[880px]"
            )}
            //style={{ minHeight: maxStepHeight ? `${maxStepHeight}px` : undefined }}
          >
            <div className="relative w-full p-2 bg-[rgba(0,0,0,0.33)] md:bg-transparent rounded-xl flex items-center justify-center gap-2 h-10 mb-5">
              {(step === 2 || step === 3) && (
                <BackButton
                  onClick={() => {
                    if (step === 2) {
                      // Going back from step 2 to step 1: unselect day and hour
                      setSelectedDay(null);
                      setSelectedHour(null);
                      setHourPage(0);
                      setUnavailableHours([]);
                    } else if (step === 3) {
                      // Going back from step 3 to step 2: unselect hour only and refresh API
                      setSelectedHour(null);
                      setShowErrors(false);
                      setFormState("idle");
                      setErrorMessage("");
                      // Refresh available hours from API when going back to step 2
                      if (selectedDay) {
                        fetchUnavailableHours();
                      }
                    }
                    setStep(step - 1);
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
                  {!hasAllowedDays && (
                    <p className="text-sm text-white/80 text-center">
                      Trenutno ni razpoložljivih dni za ta obrazec.
                    </p>
                  )}
                  {content.form.days.map((day, i) => {
                    const isSelected = selectedDay === day.date;
                    // If restrictedSlots is null, all dates are allowed
                    // Otherwise, check if the date exists in restrictedSlots
                    const isAllowed = restrictedSlots === null 
                      ? true 
                      : restrictedSlots.has(day.date);
                    
                    if (i === 0) {
                      console.log("Date check for", day.date, "isAllowed:", isAllowed, "restrictedSlots:", restrictedSlots);
                    }

                    return (
                      <ButtonSolid
                        size="small"
                        title={day.title}
                        key={i}
                        type="button"
                        disableGradient={isSelected || !isAllowed}
                        className={`w-full justify-center ${
                          isSelected
                            ? "!shadow-none !bg-[rgba(68,153,53,0.33)] md:!bg-[rgba(68,153,53,0.25)] !text-[rgba(0,0,0,0.33)] md:!text-[rgba(0,0,0,0.25)] pointer-events-none"
                            : !isAllowed
                            ? "!hidden !shadow-none !bg-[rgba(68,153,53,0.2)] md:!bg-[rgba(68,153,53,0.15)] !text-[rgba(0,0,0,0.33)] md:!text-[rgba(0,0,0,0.25)] pointer-events-none opacity-60"
                            : ""
                        }`}
                        onClick={() => {
                          if (!isAllowed) {
                            return;
                          }
                          setSelectedDay(day.date);
                          setSelectedHour(null);
                          setHourPage(0);
                          setStep((prev) => prev + 1);
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
                    if (!selectedDay) {
                      return null;
                    }

                    const paginatedHours = hoursForDisplay.slice(
                      hourPage * 6,
                      hourPage * 6 + 6
                    );

                    if (!paginatedHours.length) {
                      return (
                        <p
                          key="no-hours"
                          className="text-sm text-white/80 text-center"
                        >
                          Trenutno ni razpoložljivih terminov za izbrani dan.
                        </p>
                      );
                    }

                    const reservedHoursForDay =
                      RESERVED_HOURS_BY_DATE.get(selectedDay) ??
                      new Set<string>();

                    return paginatedHours.map((hour, i) => {
                      const isSelected = selectedHour === hour.hour;
                      const isUnavailable = unavailableHours.includes(
                        hour.hour
                      );
                      // If open_all_dates is true, don't mark hours as reserved
                      const isReserved =
                        normalizedFormType === "users" &&
                        !open_all_dates &&
                        reservedHoursForDay.has(hour.hour);

                      // Get available places from backend data using correct date formatting
                      const formattedDate = selectedDay
                        ? formatDateForBackend(selectedDay)
                        : "";
                      // Format hour with leading zero: "4:00" -> "04:00"
                      const hourFormatted =
                        hour.hour.split(":")[0].padStart(2, "0") +
                        ":" +
                        hour.hour.split(":")[1];
                      const datetimeKey = `${formattedDate} ${hourFormatted}`;
                      const availablePlaces =
                        availablePlacesByHour[datetimeKey] ?? 3;
                      const isCapacityFull =
                        isUnavailable || availablePlaces === 0;
                      const isDisabled = isReserved || isCapacityFull;

                      return (
                        <ButtonSolid
                          size="small"
                          title={(() => {
                            const getPlacesText = (count: number) => {
                              if (count === 1) return "1 mesto";
                              if (count === 2) return "2 mesti";
                              if (count === 3) return "3 mesta";
                              return `${count} mest`;
                            };

                            if (isReserved) {
                              return `${hour.title} (Rezervirano)`;
                            }

                            if (isCapacityFull) {
                              return `${hour.title} (Zasedeno)`;
                            }

                            return `${hour.title} (${getPlacesText(
                              availablePlaces
                            )})`;
                          })()}
                          key={i}
                          type="button"
                          className={`w-full justify-center ${
                            isSelected
                              ? "!shadow-none !bg-[rgba(68,153,53,0.33)] md:!bg-[rgba(68,153,53,0.25)] !text-[rgba(0,0,0,0.33)] md:!text-[rgba(0,0,0,0.25)] pointer-events-none"
                              : isDisabled
                              ? "!shadow-none !bg-[rgba(68,153,53,0.2)] md:!bg-[rgba(68,153,53,0.15)] !text-[rgba(0,0,0,0.33)] md:!text-[rgba(0,0,0,0.25)] pointer-events-none opacity-60"
                              : ""
                          }`}
                          disableGradient={isSelected || isDisabled}
                          onClick={() => {
                            if (!isDisabled) {
                              setSelectedHour(hour.hour);
                              setStep(step + 1);
                            }
                          }}
                        />
                      );
                    });
                  })()}
                  <div
                    className={`w-full flex justify-center transition-opacity mt-2 ${
                      (() => {
                        if (!selectedDay) {
                          return false;
                        }

                        return (hourPage + 1) * 6 < totalVisibleHours;
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
                <input type="hidden" name="type" value={normalizedFormType} />
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
                  <div className="w-full flex flex-col lg:flex-row lg:gap-4">
                    <div className="w-full lg:w-[calc(50%-8px)]">
                      <Input
                        className="h-14 mb-2 lg:mb-3"
                        label={content.form.firstName}
                        required={true}
                        variant_input={{ value: "text" }}
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        errorMessage={content.form.errorMessageName}
                        showError={showErrors}
                      />
                    </div>
                    <div className="w-full lg:w-[calc(50%-8px)]">
                      <Input
                        className="h-14 mb-2 lg:mb-3"
                        label={content.form.lastName}
                        required={true}
                        variant_input={{ value: "text" }}
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        errorMessage={content.form.errorMessageLastName}
                        showError={showErrors}
                      />
                    </div>
                  </div>
                  <Input
                    className="h-14 mb-2 lg:mb-3"
                    label={content.form.email}
                    required={true}
                    variant_input={{ value: "email" }}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    errorMessage={content.form.errorMessageEmail}
                    showError={showErrors}
                  />
                  <Input
                    className="h-14 mb-6"
                    label={content.form.phone}
                    required={true}
                    variant_input={{ value: "tel" }}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    errorMessage={content.form.errorMessagePhone}
                    showError={showErrors}
                  />

                   {/* Olimpijski komite Slovenije radio buttons - only for Partners form type */}
                   {normalizedFormType === "partners" && (
                      <div className="w-full bg-[rgba(0,0,0,0.33)] rounded-xl p-4 mt-1">
                        <div className="flex flex-col gap-2">
                          <label className="text-white text-sm pr-4 leading-[1.4]">
                            {content.form.olimpijskiKomiteLabel}
                            <span className="text-[#FF6161]">*</span>
                          </label>
                          <div className="flex items-center gap-6 pr-4">
                            <div className="flex items-center gap-2">
                              <input
                                type="radio"
                                id="olimpijski-da"
                                name="olimpijski_komite_slovenije"
                                value="Da"
                                checked={olimpijskiKomiteSlovenije === "Da"}
                                onChange={(e) =>
                                  setOlimpijskiKomiteSlovenije(e.target.value)
                                }
                                className="w-[18px] h-[18px] appearance-none border-2 border-white rounded-full checked:bg-green-600 checked:border-green-600 focus:outline-none relative checked:after:content-[''] checked:after:absolute checked:after:top-1/2 checked:after:left-1/2 checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 checked:after:w-2 checked:after:h-2 checked:after:bg-white checked:after:rounded-full cursor-pointer"
                                required
                              />
                              <label
                                htmlFor="olimpijski-da"
                                className="text-white text-sm leading-[1.4] cursor-pointer"
                              >
                                Da
                              </label>
                            </div>
                            <div className="flex items-center gap-2">
                              <input
                                type="radio"
                                id="olimpijski-ne"
                                name="olimpijski_komite_slovenije"
                                value="Ne"
                                checked={olimpijskiKomiteSlovenije === "Ne"}
                                onChange={(e) =>
                                  setOlimpijskiKomiteSlovenije(e.target.value)
                                }
                                className="w-[18px] h-[18px] appearance-none border-2 border-white rounded-full checked:bg-green-600 checked:border-green-600 focus:outline-none relative checked:after:content-[''] checked:after:absolute checked:after:top-1/2 checked:after:left-1/2 checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 checked:after:w-2 checked:after:h-2 checked:after:bg-white checked:after:rounded-full cursor-pointer"
                                required
                              />
                              <label
                                htmlFor="olimpijski-ne"
                                className="text-white text-sm leading-[1.4] cursor-pointer"
                              >
                                Ne
                              </label>
                            </div>
                          </div>
                        </div>
                        {showErrors && !olimpijskiKomiteSlovenije && (
                          <p className="text-[#FF6161] text-sm pr-4">
                            {content.form.errorMessageOlimpijskiKomite}
                          </p>
                        )}
                      </div>
                    )}

                  <div className="w-full bg-[rgba(0,0,0,0.33)] rounded-xl p-4 mt-1 flex flex-col gap-4">
                   

                    <Checkbox
                      className="!bg-transparent !p-0"
                      classNameInput="!w-[18px] !h-[18px]"
                      label={content.form.checkbox1Label}
                      required={normalizedFormType !== "all"}
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
                      required={normalizedFormType !== "all"}
                      content=""
                      title="checkbox2"
                      checked={checkbox2}
                      onChange={(e) => setCheckbox2(e.target.checked)}
                      showError={showErrors}
                      errorMessage={content.form.errorMessageCheckbox2}
                    />
                    <Checkbox
                      className="!bg-transparent !p-0"
                      classNameInput="!w-[18px] !h-[18px]"
                      label={content.form.checkbox3Label}
                      required={false}
                      content=""
                      title="checkbox3"
                      checked={checkbox3}
                      onChange={(e) => setCheckbox3(e.target.checked)}
                      showError={showErrors}
                      errorMessage={content.form.errorMessageCheckbox3}
                    />
                  </div>
                </div>
                {errorMessage && (
                  <div className="text-[#FF6161] text-sm text-center bg-[rgba(0,0,0,0.33)] rounded-xl p-4 mt-3">
                    {errorMessage}
                  </div>
                )}
                {formState === "error" ? (
                  <ButtonSolid
                    size="small"
                    title={content.form.ctaBackForm}
                    type="button"
                    disableGradient={true}
                    className="w-full justify-center mt-3 !bg-[#F4F4F4] !text-black"
                    onClick={() => {
                      setFormState("idle");
                      setErrorMessage("");
                      setStep(2);
                    }}
                  />
                ) : (
                <ButtonSolid
                  size="small"
                  title={
                    formState === "loading"
                      ? content.form.ctaLabelLoading
                      : content.form.ctaLabel
                  }
                  type="button"
                  disableGradient={true}
                  className={cx(
                    "w-full justify-center mt-3 !bg-[#F4F4F4] !text-black",
                    formState === "loading"
                      ? "opacity-50 pointer-events-none"
                      : ""
                  )}
                  onClick={handleFormSubmit}
                />
                )}
              </div>
            )}
          </div>
        ) : (
          <div className="w-full p-2 md:bg-[rgba(0,0,0,0.33)] rounded-xl md:px-8 md:py-6 flex items-center justify-center h-[800px] lg:h-[870px]">
            <div>
              <div className="text-white text-center font-neutraface text-[22px] font-normal leading-[24px] uppercase mb-5">
                {content.form.thankyouTitle}
              </div>
              <div
                className="text-white text-center font-raleway text-lg font-semibold leading-[24px]"
                dangerouslySetInnerHTML={{
                  __html: content.form.thankyouDescription,
                }}
              ></div>
              <div
                className="text-white text-center font-raleway text-lg font-semibold leading-[24px] mt-6"
                dangerouslySetInnerHTML={{
                  __html: content.form.thankyouDescriptionTwo,
                }}
              ></div>
              <SelectedInfoBox
                label={content.form.selectedTermin}
                selectedDay={selectedDay}
                selectedHour={selectedHour}
                className="my-16"
              />
              <div className="text-center text-white/60 font-raleway text-[18px] font-semibold leading-[24px]">
                {content.form.thankyouDescriptionThree}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
