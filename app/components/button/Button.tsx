
import { ButtonProps } from "@/app/types/Button";

export default function Button({ label, styleClass ,icons }: ButtonProps) {
  return <button className={styleClass}>
    {
      icons ? <div className={`flex justify-between items-center gap-2 `}>
        {icons}
        {label}
      </div>
      : (
         <div>
          {label}
        </div>
      )
      
    }
  </button>;
}
