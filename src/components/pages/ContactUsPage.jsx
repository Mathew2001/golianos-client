import ContactUs from "../ContactUs"
import { useSelector } from "react-redux";
const ContactUsPage = () => {
  const { business } = useSelector((state) => state.businessReducer);
  if (!business) return <div>No business found</div>
  return (
    <div className="container py-5" dir="rtl">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 shadow-lg p-3 mb-5 bg-body rounded-4" style={{ backgroundColor: "#f8f9fa" }}>
          <div className="text-center">
            <p className="fw-bold mb-4 text-black" style={{ fontSize: "2rem" }}>נשמח לעמוד לרשותכם בכל צורה שתרצו:</p>
            <p className="text-muted">{`${business.businessAddress} | ${business.businessPhone} | ${business.businessEmail}`}</p>
            <p className="text-muted" style={{ fontSize: "1.2rem" }}>או</p>
          </div>
          <ContactUs title="הטופס הזה" />
        </div>
      </div>
    </div>
  )
}

export default ContactUsPage