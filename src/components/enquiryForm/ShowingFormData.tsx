import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formType } from "@/lib/types/formSchema";

const ShowingFormData = ({ formData }: { formData: formType }) => {
  return (
    <>
      <CardHeader>
        <CardTitle className="mb-6 text-xl font-bold">
          Below is Your Data:
        </CardTitle>
        <CardDescription>
          <section className="mb-4">
            <h3 className="text-base font-semibold">Company Details:</h3>
            <p className="ml-3">
              <strong>Name: </strong>
              {formData.companyDetails.name}
            </p>
            <p className="ml-3">
              <strong>Country: </strong>
              {formData.companyDetails.country}
            </p>
            {formData.companyDetails.socialMediaLink && (
              <p className="ml-3">
                <strong>Social Media Link: </strong>
                {formData.companyDetails.socialMediaLink}
              </p>
            )}
            {formData.companyDetails.website && (
              <p className="ml-3">
                <strong>Website: </strong>
                {formData.companyDetails.website}
              </p>
            )}
          </section>

          <section className="mb-4">
            <h3 className="text-base font-semibold">Personal Details:</h3>
            <p className="ml-3">
              <strong>Name: </strong>
              {formData.personalDetails.name}
            </p>
            <p className="ml-3">
              <strong>Designation: </strong>
              {formData.personalDetails.designation}
            </p>
            <p className="ml-3">
              <strong>Email: </strong>
              {formData.personalDetails.email}
            </p>
            {formData.personalDetails.phone && (
              <p className="ml-3">
                <strong>Phone: </strong>
                {formData.personalDetails.phone}
              </p>
            )}
          </section>

          <section>
            <h3 className="text-base font-semibold">Project Details:</h3>
            <p className="ml-3">
              <strong>Budget: </strong>${formData.projectDetails.budget}
            </p>
            <p className="ml-3">
              <strong>Primary Goal: </strong>
              {formData.projectDetails.primaryGoal}
            </p>
            <p className="ml-3">
              <strong>Services: </strong>
              {formData.projectDetails.services.join(", ")}
            </p>
          </section>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-primary">
          I didn&apos;t have any creative ideas on what to so with the data, so
          I just decided on diplaying it.
        </CardDescription>
      </CardContent>
    </>
  );
};
export default ShowingFormData;
