"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { AxiosError } from "axios";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";
import { Spinner } from "@/components/ui/spinner";

import { useAddBookNow } from "@/hooks/use-add-book-now";
import { bookNowSchema } from "@/schemas";
import { axios } from "@/lib/axios";

export const AddBookNow = () => {
  const addBookNowModal = useAddBookNow();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const form = useForm<z.infer<typeof bookNowSchema>>({
    resolver: zodResolver(bookNowSchema),
    defaultValues: {
      full_name: "",
      email: "",
      message: "",
    },
  });

  const onCancel = () => {
    addBookNowModal.onClose();
    form.reset();
    router.refresh();
  };

  const onSubmit = async (values: z.infer<typeof bookNowSchema>) => {
    try {
      setIsLoading(true);
      await axios.post(`${process.env.NEXT_PUBLIC_SEND_MESSAGE}`, values);
      toast.success("Success!");
      onCancel();
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error?.response?.data?.message || "Something went wrong!");
      }
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Modal
      title="Add book now"
      description="You can add a new book now."
      isOpen={addBookNowModal.isOpen}
      onClose={addBookNowModal.onClose}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 gap-5">
            <FormField
              control={form.control}
              name="full_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isLoading}
                      placeholder="full name"
                      {...field}
                    />
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
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="email"
                      disabled={isLoading}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="col-span-1 md:col-span-2">
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      rows={6}
                      disabled={isLoading}
                      placeholder="Enter your Message here.."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex justify-end items-center w-full pt-6 gap-x-5">
            <Button
              disabled={isLoading}
              type="button"
              variant="outline"
              onClick={onCancel}
            >
              Cancel
            </Button>
            <Button disabled={isLoading} type="submit">
              Send {isLoading && <Spinner className="text-background ml-2" />}
            </Button>
          </div>
        </form>
      </Form>
    </Modal>
  );
};
