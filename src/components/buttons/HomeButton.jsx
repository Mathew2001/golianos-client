import NavLinkButton from "./NavLinkButton"
import { useSelector } from "react-redux";

const HomeButton = ({ onClick }) => {
  const { pagesByBusinessId } = useSelector((s) => s.pageReducer);
  const page = pagesByBusinessId.find((p) => p.slug === "home");
  if (!page) return null;
  return <NavLinkButton text={page.pageName} to="/" onClick={onClick} />
}

export default HomeButton