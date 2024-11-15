"use client";

import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { companyDetailsSchema, formType } from "@/lib/types/formSchema";
import { z } from "zod";
import { Button } from "../ui/button";
import { Dispatch, SetStateAction } from "react";

const CompanyDetails = ({
  setCurrentStep,
  formData,
}: {
  setCurrentStep: Dispatch<SetStateAction<number>>;
  formData: formType;
}) => {
  const form = useForm<z.infer<typeof companyDetailsSchema>>({
    resolver: zodResolver(companyDetailsSchema),
    defaultValues: {
      name: "",
      country: "",
      website: "",
      socialMediaLink: "",
    },
  });

  const onSubmit = (data: z.infer<typeof companyDetailsSchema>) => {
    formData.companyDetails = data;
    setCurrentStep(() => 2);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 flex flex-col"
      >
        <h2 className="text-xl font-bold">Step 1: Company Details</h2>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company Name</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Your Company Name" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="website"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Website (if any)</FormLabel>
              <FormControl>
                <Input {...field} placeholder="https://yourcompany.com" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Country</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Eg: India" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="socialMediaLink"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Social Media Link (optional)</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="https://twitter.com/yourprofile"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Next</Button>
      </form>
    </Form>
  );
};
export default CompanyDetails;
