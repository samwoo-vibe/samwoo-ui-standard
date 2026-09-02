import type { InputHTMLAttributes } from "react";

type FieldProps = InputHTMLAttributes<HTMLInputElement> & {
  hint?: string;
  label: string;
};

export function Field({ hint, id, label, ...props }: FieldProps) {
  const fieldId = id ?? `field-${label.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <label className="field" htmlFor={fieldId}>
      <span>{label}</span>
      {hint ? <small>{hint}</small> : null}
      <input id={fieldId} {...props} />
    </label>
  );
}
