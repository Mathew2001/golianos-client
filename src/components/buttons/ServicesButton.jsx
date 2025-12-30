import NavLinkButton from "./NavLinkButton";
import { useSelector } from "react-redux";
const ServicesButton = ({ onClick }) => {
  const { pagesByBusinessId } = useSelector((s) => s.pageReducer);
  const page = pagesByBusinessId.find((p) => p.slug === "services");
  if (!page) return null;
  return <NavLinkButton text={page.pageName} to="/services" onClick={onClick} />
}

export default ServicesButton