"use client";

import { ButtonProps } from "@/app/types/Button";

export default function Button({ label, styleClass }: ButtonProps) {
  return <button className={styleClass}>{label}</button>;
}
