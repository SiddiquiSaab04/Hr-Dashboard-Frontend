"use client";
import { Field } from "@/app/types/Form";
import Form from "./Form";
import type { Login } from "@/app/types/Auth";
import { useRouter } from "next/navigation";
export default function LoginForm() {
  const router = useRouter();

  const handleSubmit = async (data: Login) => {
    try {
      const response = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        router.push("/pages/home");
      } else {
        const err = await response.json();
        console.error("Login failed:", err);
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const fields: Field[] = [
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Enter your email",
      required: true,
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "Enter your password",
      required: true,
    },
  ];

  return (
    <div>
      <Form
        formStyleClass="flex flex-col gap-y-4 max-w-[600px] w-full"
        fieldStyleClass="flex flex-col justify-start items-start gap-y-1"
        fields={fields}
        onsubmit={(data) => handleSubmit(data)}
        submitLabel="Login"
        submitBtnStyleClass="border border-primary p-2 rounded-md bg-primary text-white hover:bg-primary/90 transition cursor-pointer"
      />
    </div>
  );
}
