import React from "react";
import { COLORS } from "../../constants/colors";
import "./SectionDivider.scss";

interface DividerProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  height?: number;
  color?: string;
}

const SectionDivider: React.FC<DividerProps> = ({
  height = 1,
  color = COLORS.grey,
  ...props
}) => {
  return (
    <div>
      <hr
        className={`divider ${props.className}`}
        style={{ height, color: color }}
      />
    </div>
  );
};

export default SectionDivider;
