

const ServiceSection = ({ section }) => {
  return (

    <div className="container my-5" dir={section.order % 2 === 1 ? "rtl" : "ltr"} >
      <div className="row">
        <div className="col-12 col-md-6" dir="rtl">
          <h2>{section.title}</h2>
          <p>{section.data.text}</p>
        </div>
        <div className="col-12 col-md-6">
          <img src={section.data.image?.image} alt={section.title} className="img-fluid rounded-4 shadow" />
        </div>
      </div>
    </div>
  )
}

export default ServiceSection