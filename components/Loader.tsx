export default function Loader({ show }) {
  return show ? <div className="lds-ripple"><div></div><div></div></div> : null;
}
