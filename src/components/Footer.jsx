import { useSelector } from "react-redux";
import NavLinkButton from "./buttons/NavLinkButton";

const Footer = () => {
  const { business } = useSelector((state) => state.businessReducer);
  const { pagesByBusinessId } = useSelector((s) => s.pageReducer);
  if (!business) return <div>No business found</div>

  return (
    <div className="bg-dark text-white" dir="rtl">
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3">
          <div className="col-12 col-md-4 p-4">
            <h5 className="text-white">קישורים</h5>
            <NavLinkButton text={pagesByBusinessId.find((p) => p.slug === "home")?.pageName} to="/" className="text-white text-decoration-none " /><br />
            <NavLinkButton text={pagesByBusinessId.find((p) => p.slug === "about")?.pageName} to="/about" className="text-white text-decoration-none " /><br />
            <NavLinkButton text={pagesByBusinessId.find((p) => p.slug === "services")?.pageName} to="/services" className="text-white text-decoration-none " /><br />
            <NavLinkButton text="צור קשר" to="/contact" className="text-white text-decoration-none " /><br />
          </div>
          <div className="col-12 col-md-4 p-4">
            <h5 className="text-white">זכויות יוצרים</h5>
            <NavLinkButton text="תנאי שימוש" to="/terms-and-conditions" className="text-white text-decoration-none " /><br />
            <NavLinkButton text="מדיניות פרטיות" to="/privacy-policy" className="text-white text-decoration-none " /><br />
          </div>
          <div className="col-12 col-md-4 p-4">
            <h5 className="text-white">{business.businessName}</h5>
            <p className="text-white">{`כתובת: ${business.businessAddress}`}</p>
            <p className="text-white">{`טלפון: ${business.businessPhone}`}</p>
            <p className="text-white">{`דואר אלקטרוני: ${business.businessEmail}`}</p>
          </div>
        </div>
        <div className="text-center">
          <p className="text-white mb-0" style={{ fontSize: "0.95em" }}>
            © {new Date().getFullYear()}  רו"ח {business.businessName} כל הזכויות שמורות.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer