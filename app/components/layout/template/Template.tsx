
export default function Template({ children , styleClass }: { children?: React.ReactNode , styleClass?:string}) {
  return <div className={`p-6 ${styleClass} `}>{children}</div>;
}
