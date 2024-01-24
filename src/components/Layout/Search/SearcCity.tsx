
import { FC, HTMLAttributes, PropsWithChildren } from "react";

interface SearcCityProps extends HTMLAttributes<HTMLDivElement> {}
type SearcCityComponents = FC<SearcCityProps> & PropsWithChildren;


const SearcCity: SearcCityComponents = ({ children, ...resProps }) => {
  return (
    <div
      {...resProps}
      className={`${resProps.className ? resProps.className : ""}`}
    >
      {children}
    </div>
  );
};


