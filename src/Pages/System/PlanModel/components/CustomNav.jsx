
import { Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import { NavItem } from "./NavItem";

export const CustomNav = ({ title, path, items }) => {
  return (
    <CustomAccordion>
      <Link to={path}>
        <CustomAccordionHeader title={title} />
      </Link>

      <CustomAccordionBody>
        {items.map(({ title, onClick }, index) => (
          <NavItem title={title} onClick={onClick} key={index} />
        ))}
      </CustomAccordionBody>
    </CustomAccordion>
  );
};

const CustomAccordion = ({ children }) => {
  return (
    <Accordion defaultActiveKey={null}>
      <Accordion.Item eventKey="0" className={`custom-accordion-item`}>
        {children}
      </Accordion.Item>
    </Accordion>
  );
};

const CustomAccordionHeader = ({ title }) => {
  return (
    <Accordion.Header>
      {title}
      <MdKeyboardArrowDown size={20} />
    </Accordion.Header>
  );
};
const CustomAccordionBody = ({ children }) => {
  return (
    <Accordion.Body className="my-2">
      <div className="tabs  d-flex justify-content-center align-items-center flex-column">
        {children}
      </div>
    </Accordion.Body>
  );
};
