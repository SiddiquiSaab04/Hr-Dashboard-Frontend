export type Field = {
    name: string;
    label?: string;
    type: 'text' | 'number' | 'email' | 'password' | 'select' | 'textarea' | 'checkbox' | 'radio' | 'creatable-select';
    placeholder?: string;
    required?: boolean;
    options?: { label: string; value: string }[];
}

export type FormProps = {
    fields: Field[];
    onsubmit:(data: any) => void;
    submitLabel?: string;
    fieldStyleClass?: string;
    formStyleClass?: string;
}
