"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { formType, personDetailsSchema } from "@/lib/types/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Dispatch, SetStateAction } from "react";

const PersonalDetails = ({
  setCurrentStep,
  formData,
}: {
  setCurrentStep: Dispatch<SetStateAction<number>>;
  formData: formType;
}) => {
  const form = useForm<z.infer<typeof personDetailsSchema>>({
    resolver: zodResolver(personDetailsSchema),
    defaultValues: {
      name: "",
      designation: "",
      email: "",
      phone: undefined,
    },
  });

  const onSubmit = (data: z.infer<typeof personDetailsSchema>) => {
    formData.personalDetails = data;
    setCurrentStep(() => 3);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 flex flex-col"
      >
        <h2 className="text-xl font-bold">Step 2: Personal Details</h2>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Person Name</FormLabel>
              <FormControl>
                <Input {...field} placeholder="John Doe" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="designation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Designation</FormLabel>
              <FormControl>
                <Input {...field} placeholder="CEO, Marketing Head, etc." />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input {...field} placeholder="johndoe@example.com" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Phone number with country code"
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

export default PersonalDetails;
