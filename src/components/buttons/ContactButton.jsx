import NavLinkButton from "./NavLinkButton"

const ContactButton = ({ onClick }) => {
  return <NavLinkButton text="צור קשר" to="/contact" onClick={onClick} />
}

export default ContactButton