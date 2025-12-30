import ServiceSection from "../cards/ServiceSection";
import { useSelector } from "react-redux";

const Services = () => {
  const { pagesByBusinessId = [] } = useSelector((s) => s.pageReducer || {});
  const page = pagesByBusinessId.find((p) => p.slug === "services");
  const sections = page?.sections;
  if (!sections) return null;
  return (
    <div dir="rtl">
      {sections.map((section) => (
        <ServiceSection key={section.id} section={section} />
      ))}
    </div>
  )
}

export default Services