"use client";
import LoginForm from "@/app/components/form/LoginForm";
import { Heading } from "@/app/components/headings/Heading";
import Template from "@/app/components/layout/template/Template";
export default function loginPage() {
  return (
    <Template styleClass="h-dvh w-full bg-blue-200 flex justify-center items-center">
      <div className="login-container rounded-xl px-4 py-10 w-100 bg-white shadow-lg text-center">
        <Heading
          heading="Login to the HR Dashboard"
          headingStyleClass="text-2xl font-bold"
          descriptionStyleClass="text-gray-600 text-sm font-light"
          description="Please enter your credentials to access the system."
        />
       <div className="p-5">
         <LoginForm />
       </div>
      </div>
    </Template>
  );
}
