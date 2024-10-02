export default function InfoList({ image, title, content }) {
  return (
    <li>
      <img src={image} alt="..." />
      <div className="text-content">
        <h5>{title}</h5>
        <p>{content}</p>
      </div>
    </li>
  );
}
