import { useSelector } from "react-redux";
import "../../css/Home.css";
import ServiceCard from "../cards/ServiceCard";
import SwiperItems from "../SwiperItems";
import ContactUs from "../ContactUs";
import ReviewSection from "../reviews/ReviewSection";
import Reviews from "../reviews/Reviews";
const Home = () => {
  const { pagesByBusinessId = [] } = useSelector((s) => s.pageReducer || {});

  const page = pagesByBusinessId.find((p) => p.slug === "home");
  const section1 = page?.sections?.find((s) => s.order === 1);
  const section2 = page?.sections?.find((s) => s.order === 2);
  const section3 = page?.sections?.find((s) => s.order === 3);
  const serviceTitles = section3?.data?.text?.split(",");
  const section4 = page?.sections?.find((s) => s.order === 4);
  const ourServices = section4?.data?.text?.split(",");
  const section5 = page?.sections?.find((s) => s.order === 5);
  const section5Text = section5?.data?.text?.split(",");
  if (!section1 || !section2 || !section3 || !serviceTitles || !section4 || !ourServices || !section5 || !section5Text) return null;

  return (
    <div dir="rtl">
      {/* HERO SECTION */}
      <div
        className="card bg-light overflow-hidden hero-card position-relative"
      >
        {section1.data?.image?.image && (
          <img
            src={section1.data.image.image}
            alt={section1.title}
            className="card-img w-100 h-100 object-fit-cover hero-img"
          />
        )}

        <div className="card-img-overlay d-flex flex-column justify-content-start">
          <div className="col-6">
            <h1 className="card-title text-white fw-bold hero-text-title">
              {section1.title}
            </h1>
            <p className="card-text text-white fw-bold hero-text-p">
              {section1.data.text}
            </p>
            <a href="contact" className="btn btn-primary d-flex justify-content-center align-items-center home-contact-btn">צור קשר</a>
          </div>
        </div>
      </div>

      {/* SERVICES SECTION */}
      <div className="container my-5">
        <h2 className="fw-bold mb-4 text-black text-center">{section3.title}</h2>
        <div className="d-md-block d-none">
          <SwiperItems items={serviceTitles} renderItems={(item, index) => (
            <ServiceCard key={item} text={item} />
          )} />
        </div>
        <div className="d-md-none d-block d-flex flex-column justify-content-center align-items-center">
          {serviceTitles.map((title, index) => (
            <ServiceCard key={title} text={title} />
          ))}
        </div>
      </div>

      {/* OUR SERVICES SECTION */}
      <div className="container my-5">
        <div className="row">
          <div className="col-12 col-md-6">
            <h2 className="fw-bold mb-4 text-black">{section4.title}</h2>
            <ul>
              {ourServices && ourServices.length > 0 && ourServices.map((service) => (
                <li key={service}>
                  <p className="text-muted" style={{ fontSize: "1.2rem" }}>{service}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-12 col-md-6">
            <img src={section4.data.image?.image} alt={section4.title} className="img-fluid rounded-4 shadow home-our-services-img" />
          </div>
        </div>
      </div>

      {/* SECTION 5*/}
      <div className="container my-5">
        <div className="row">
          {section5.data.image?.image && (
            <div className="col-12 col-md-6 d-none d-md-block">
              <img src={section5.data.image?.image} alt={section5.title} className="img-fluid home-about-img" />
            </div>
          )}
          <div className="col-12 col-md-6">
            <h2 className="fw-bold mb-4 text-black">{section5.title}</h2>
            {section5Text.map((text) => (
              <p key={text} className="text-muted">{text}</p>
            ))}
          </div>
        </div>
      </div>

      {/* About Us SECTION */}
      <div className="container my-5">
        <div className="row">
          <div className="col-12 col-md-6">
            <h2 className="fw-bold mb-4 text-black">{section2.title}</h2>
            <p className="text-muted">{section2.data.text}</p>
            <a href="/about" className="btn btn-primary">למידע נוסף</a>
          </div>
          <div className="col-12 col-md-6 p-3">
            <img src={section2.data.image?.image} alt={section2.title} className="img-fluid rounded-4 home-about-img" />
          </div>
        </div>
      </div>

      {/* Reviews SECTION */}
      <div className="container my-5">
        <ReviewSection />
        <Reviews />
      </div>

      {/* Contact Us SECTION */}
      <div className="contact">
        <div className="row justify-content-center p-4">
          <div className="col-12 col-md-6 col-xl-4 text-white">
            <ContactUs title="לתיאום שיחה וייעוץ ראשוני" />
          </div>
        </div>
      </div>
    </div >
  );
};

export default Home;
