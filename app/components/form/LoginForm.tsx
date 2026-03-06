"use client";
import { Field } from "@/app/types/Form";
import Form from "./Form";
export default function LoginForm(){

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
            onsubmit={(data) => {
                console.log("Form submitted with data:", data);
            }}
            submitLabel="Login"
            submitBtnStyleClass="border border-primary p-2 rounded-md bg-primary text-white hover:bg-primary/90 transition cursor-pointer"
        />
        </div>
    )

}