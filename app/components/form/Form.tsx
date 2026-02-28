"use client";

import { useState } from "react";
import type { Field, FormProps } from "@/app/types/Form";
import CreatableSelect from "react-select/creatable";
export default function Form({
  fields,
  onsubmit,
  submitLabel = "Submit",
}: FormProps) {
  const [formData, setFormData] = useState({});
  const handleChange = (name: string, value: any) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onsubmit(formData);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        {fields.map((field: Field) => (
          <div key={field.name}>
            <label htmlFor={field.name}>{field.label || field.name}</label>
            {field.type === "select" ? (
              <select
                id={field.name}
                name={field.name}
                required={field.required}
                onChange={(e) => handleChange(field.name, e.target.value)}
              ></select>
            ) : field.type === "textarea" ? (
              <textarea
                id={field.name}
                placeholder={field.placeholder}
                required={field.required}
                onChange={(e) => handleChange(field.name, e.target.value)}
              />
            ) : field.type === "checkbox" ? (
              <input
                type="checkbox"
                id={field.name}
                onChange={(e) =>
                  handleChange(field.name, e.target.checked.toString())
                }
              />
            ) : field.type === "radio" ? (
              <input
                type="radio"
                id={field.name}
                onChange={(e) =>
                  handleChange(field.name, e.target.checked.toString())
                }
              />
            ) : field.type === "number" ? (
              <input
                id={field.name}
                type="number"
                placeholder={field.placeholder}
                required={field.required}
                onChange={(e) => handleChange(field.name, e.target.value)}
              />
            ) : field.type === "email" ? (
              <input
                id={field.name}
                type="email"
                placeholder={field.placeholder}
                required={field.required}
                onChange={(e) => handleChange(field.name, e.target.value)}
              />
            ) : field.type === "password" ? (
              <input
                id={field.name}
                type="password"
                placeholder={field.placeholder}
                required={field.required}
                onChange={(e) => handleChange(field.name, e.target.value)}
              />
            ) : field.type === "creatable-select" ? (
              <CreatableSelect
                id={field.name}
                name={field.name}
                isClearable
                isSearchable
                options={field.options}
                onChange={(option) =>
                  handleChange(field.name, option ? option.value : "")
                }
              />
            ) : (
              <input
                id={field.name}
                type={field.type}
                placeholder={field.placeholder}
                required={field.required}
                onChange={(e) => handleChange(field.name, e.target.value)}
              />
            )}
          </div>
        ))}
      </form>
    </>
  );
}
