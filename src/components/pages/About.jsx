import { useSelector } from "react-redux";
import ContactUs from "../ContactUs";

const About = () => {
  const { pagesByBusinessId, loading, error } = useSelector((state) => state.pageReducer);
  const page = pagesByBusinessId.find((p) => p.slug === "about");
  const section1 = page.sections.find((s) => s.order === 1);
  const section2 = page.sections.find((s) => s.order === 2);
  if (loading)
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: 200 }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );

  if (error) return <div className="alert alert-danger my-3 text-center">שגיאה: {error}</div>;
  if (!page) return <div className="alert alert-warning my-3 text-center">הדף לא נמצא</div>;

  return (
    <div className="container py-5" dir="rtl">
      <h1 className="fw-bold mb-4 text-black">{page.pageName}</h1>
      <div className="d-flex justify-content-between align-items-start gap-4">
        <div className="col-12 col-md-6">
          <h5 className="fw-bold mb-4 text-black">{section1.title}</h5>
          <p className="text-muted">{section1.data.text}</p>
          <h5 className="fw-bold mb-4 text-black">{section2.title}</h5>
          <ul>
            {section2.data.text.split(",").map((line, index) => (
              <li key={index} className="text-muted" style={{ fontSize: "1.2rem" }}>{line}</li>
            ))}
          </ul>
        </div>
        <div className="col-12 col-md-6 d-none d-md-block">
          <img src={section1.data.image?.image} alt={section1.title} className="img-fluid rounded-4 shadow"/>
        </div>
      </div>
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 shadow-lg p-3 mb-5 bg-body rounded" style={{ backgroundColor: "#f8f9fa" }}>
            <ContactUs/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About