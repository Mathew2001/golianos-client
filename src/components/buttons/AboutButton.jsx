import NavLinkButton from "./NavLinkButton"
import { useSelector } from "react-redux";

const AboutButton = ({ onClick }) => {
  const { pagesByBusinessId } = useSelector((s) => s.pageReducer);
  const page = pagesByBusinessId.find((p) => p.slug === "about");
  if (!page) return null;
  return <NavLinkButton text={page.pageName} to="/about" onClick={onClick} />
}

export default AboutButton