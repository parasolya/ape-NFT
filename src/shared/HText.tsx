type Props = {
  children: React.ReactNode;
}

export const HText = ({ children }: Props) => {
  return (
    <h1 className="basis-3/5 text-3xl font-montserrat font-bold">{children}</h1>
  )
}