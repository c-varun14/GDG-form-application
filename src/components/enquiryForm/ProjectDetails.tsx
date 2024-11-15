"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  formType,
  projectDetailsSchema,
  serviceOptions,
} from "@/lib/types/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "../ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Dispatch, SetStateAction } from "react";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";

const ProjectDetails = ({
  setCurrentStep,
  formData,
}: {
  setCurrentStep: Dispatch<SetStateAction<number>>;
  formData: formType;
}) => {
  const form = useForm<z.infer<typeof projectDetailsSchema>>({
    resolver: zodResolver(projectDetailsSchema),
    defaultValues: {
      budget: undefined,
      services: [],
      primaryGoal: "",
    },
  });

  const onSubmit = (data: z.infer<typeof projectDetailsSchema>) => {
    formData.projectDetails = data;
    setCurrentStep(4);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 flex flex-col"
      >
        <h2 className="text-xl font-bold text-center">
          Step 3: Project Details
        </h2>
        <FormField
          control={form.control}
          name="budget"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Project Budget</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="1000-3000" />
                    </FormControl>
                    <FormLabel className="font-normal">$1000 - $3000</FormLabel>
                  </FormItem>

                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="3000-5000" />
                    </FormControl>
                    <FormLabel className="font-normal">$3000 - $5000</FormLabel>
                  </FormItem>

                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="5000+" />
                    </FormControl>
                    <FormLabel className="font-normal">$5000+</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="services"
          render={() => (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="text-base">Services</FormLabel>
              </div>
              {serviceOptions.map((service) => (
                <FormField
                  key={service}
                  control={form.control}
                  name="services"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={service}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(service)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, service])
                                : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== service
                                    )
                                  );
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal">{service}</FormLabel>
                      </FormItem>
                    );
                  }}
                />
              ))}
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="primaryGoal"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Primary Goal</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Eg: Bring more clients/Create more automations"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default ProjectDetails;
