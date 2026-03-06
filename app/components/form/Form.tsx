"use client";

import { useForm, Controller } from "react-hook-form";
import type { Field, FormProps } from "@/app/types/Form";
import CreatableSelect from "react-select/creatable";
import Button from "../button/Button";

export default function Form({
  formStyleClass = "",
  onsubmit,
  submitLabel = "",
  submitBtnStyleClass = "",
  fields,
  fieldStyleClass
}: FormProps) {
  const { control, handleSubmit } = useForm();
  const onSubmit = (data: any) => {
    onsubmit(data);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={formStyleClass}>
        {fields.map((field: Field) => (
          <div key={field.name} className={fieldStyleClass}>
            <label htmlFor={field.name}>{field.label || field.name}</label>
            <Controller
              name={field.name}
              control={control}
              rules={{ required: field.required }}
              render={({ field: ControllerField }) => {
                switch (field.type) {
                  case "select":
                    return (
                      <CreatableSelect
                        id={field.name}
                        {...ControllerField}
                        isClearable
                        isSearchable
                        options={field.options}
                      />
                    );
                  case "textarea":
                    return (
                      <textarea
                        id={field.name}
                        placeholder={field.placeholder}
                        className="w-full p-2 border rounded focus:outline-primary"
                        {...ControllerField}
                      />
                    );
                  case "checkbox":
                    return (
                      <input
                        type="checkbox"
                        id={field.name}
                        className="w-full p-2 border rounded focus:outline-primary"
                        {...ControllerField}
                      />
                    );
                  case "radio":
                    return (
                      <input
                        type="radio"
                        id={field.name}
                        className="w-full p-2 border rounded focus:outline-primary"
                        {...ControllerField}
                      />
                    );
                  case "number":
                    return (
                      <input
                        type="number"
                        placeholder={field.placeholder}
                        {...ControllerField}
                      />
                    );
                  case "text":
                  case "creatable-select":
                  case "email":
                    return (
                      <input
                        id={field.name}
                        type="email"
                        placeholder={field.placeholder}
                        className="w-full p-2 border rounded focus:outline-primary"
                        {...ControllerField}
                      />
                    );
                  case "password":
                    return (
                      <input
                        id={field.name}
                        type="password"
                        placeholder={field.placeholder}
                        className="w-full p-2 border rounded focus:outline-primary"
                        {...ControllerField}
                      />
                    );
                  default:
                    return (
                      <input
                        id={field.name}
                        type={field.type}
                        placeholder={field.placeholder}
                        className="w-full p-2 border rounded focus:outline-primary"
                        {...ControllerField}
                      />
                    );
                }
              }}
            />
          </div>
        ))}
        <Button  label={submitLabel} styleClass={submitBtnStyleClass} />
      </form>
    </>
  );
}
