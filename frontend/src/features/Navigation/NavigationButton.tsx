import { ArrowDownIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import { NavLink, To } from "react-router-dom";

interface Props {
  children?: React.ReactNode;
  title: string;
  to: To;
  subitems?: string[];
}

const NavigationButton: React.FC<Props> = ({
  children,
  title,
  to,
  subitems,
}) => (
  <>
    {subitems ? (
      <Button size="sm" as={NavLink} to={to} rightIcon={<ArrowDownIcon />}>
        {title}
      </Button>
    ) : (
      <Button size="sm" as={NavLink} to={to}>
        {title}
      </Button>
    )}
  </>
);

export default NavigationButton;