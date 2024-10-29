export default function ListText({
  textArray,
  hrefShow,
}: {
  textArray: { text: string; href?: string }[];
  hrefShow?: boolean;
}) {
  return (
    <ul className="list-disc ml-5 text-lg">
      {textArray.map((text) => (
        <>
          {!hrefShow ? (
            <li>{text.text}</li>
          ) : (
            <li>
              <a className="hover:text-black text-sky-600" href={text.href}>
                {text.text}
              </a>
            </li>
          )}
        </>
      ))}
    </ul>
  );
}
