import "../css/styles.css";
export default function ContactsCard(props) {
  return (
    <div className="ContactsCard">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <h5 className="pos">{props.pos}</h5>
        <img className="dp" src={props.img} alt={props.alt} />
      </div>

      <div className="bottom">
        <p className="info">{props.email}</p>
        <p className="info">{props.mob}</p>
        <p className="info">{props.addr}</p>
      </div>
    </div>
  );
}
