interface Props {
  url: string;
  importDate: string;
}

export function Card({ url }: Props) {
  return (
    <div>
      <img src={url} />
      <p></p>
    </div>
  );
}
