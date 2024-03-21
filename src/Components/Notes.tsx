interface Props {
  id: number;
  title: string;
  content: string;
}

function Notes({ id, title, content }: Props) {
  return (
    <>
      <div className="note">
        <h1>
          {id} <hr />
          {title}
        </h1>
        <p>{content}</p>
      </div>
    </>
  );
}

export default Notes;
