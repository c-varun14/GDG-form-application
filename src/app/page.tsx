"use client";

import { useState } from "react";
import CompanyDetails from "@/components/enquiryForm/CompanyDetails";
import PersonalDetails from "@/components/enquiryForm/PersonalDetails";
import ProjectDetails from "@/components/enquiryForm/ProjectDetails";
import { formType } from "@/lib/types/formSchema";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import ShowingFormData from "@/components/enquiryForm/ShowingFormData";
import { useAutoAnimate } from "@formkit/auto-animate/react";

//@ts-expect-error We have no other way
const formData: formType = {};

const Page = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [parent, enableAnimations] = useAutoAnimate();
  return (
    <section className="flex justify-center items-center container py-14 min-h-screen mx-auto px-4">
      <Card
        ref={parent}
        className={cn(
          "w-full md:min-w-96 md:max-w-md px-4 py-8 border-ring",
          currentStep === 0 ? "text-center" : ""
        )}
      >
        {currentStep === 0 && (
          <>
            <CardHeader>
              <CardTitle className="mb-6">
                GDG (Web Development): Task 2
              </CardTitle>
              <CardDescription>
                This form collects details of clients who have converted through
                a landing page. Typically, such data would be sent to a
                company&apos;s database/email but in this case the data will be
                displayed in the end
              </CardDescription>
            </CardHeader>

            <Button
              className="float-right mr-8 rounded"
              onClick={() => setCurrentStep(1)}
            >
              Next
            </Button>
          </>
        )}
        {currentStep === 1 && (
          <CompanyDetails setCurrentStep={setCurrentStep} formData={formData} />
        )}
        {currentStep === 2 && (
          <PersonalDetails
            setCurrentStep={setCurrentStep}
            formData={formData}
          />
        )}
        {currentStep === 3 && (
          <ProjectDetails setCurrentStep={setCurrentStep} formData={formData} />
        )}
        {currentStep === 4 && <ShowingFormData formData={formData} />}
      </Card>
    </section>
  );
};

export default Page;
