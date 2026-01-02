import { Link } from "react-router-dom";

const ServiceCard = ({ text }) => {
  return (

    <div className="col-10 col-md-4 col-lg-3 p-2">
      <Link to={`services`} className="text-decoration-none">
        <div className="card bg-light p-4 shadow-lg h-100">
          <div className="card-body text-center">
            <h5 className="card-title">{text}</h5>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ServiceCard