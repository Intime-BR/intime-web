type SuggestionCardContentProps = {
  className?: string;
  image: string;
  name?: string;
  desc?: string;
  status?: string;
  date?: string;
};

const SuggestionCardContent = ({
  className,
  image,
  name,
  desc,
  status,
  date,
}: SuggestionCardContentProps) => {
  return (
    <>
      <div className="div-flex-row">
        <img src={image} alt="" />
        <div className="div-flex-column">
          <p className="name">{name}</p>
          <p className="desc">{desc}</p>
          <div className="div-status-date">
            <div className="div-status">{status}</div>
            <div className="div-date">{date}</div>
          </div>
        </div>
      </div>
    </>
  )
}
export default SuggestionCardContent
