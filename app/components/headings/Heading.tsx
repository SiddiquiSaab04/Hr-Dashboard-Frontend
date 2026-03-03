"use client";

import { HeadingProps } from "@/app/types/Heading";

export function Heading({ heading, headingStyleClass, description, descriptionStyleClass }: HeadingProps) {
  return (
    <div>
      {heading && <h1 className={headingStyleClass}>{heading}</h1>}
      {description && <p className={descriptionStyleClass}>{description}</p>}
    </div>
  );
}