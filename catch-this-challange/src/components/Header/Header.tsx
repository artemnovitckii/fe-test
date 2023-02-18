import React from "react";
import "./Header.scss";

interface HeaderProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title, ...props }) => {
  return (
    <header>
      <h1 {...props} className={`header ${props.className}`}>
        <div className="logo">{title}</div>
      </h1>
    </header>
  );
};

export default Header;
