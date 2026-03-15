import "react-icons";

declare module "react-icons/lib" {
  export interface IconBaseProps extends React.SVGAttributes<SVGElement> {
    children?: React.ReactNode;
    size?: string | number;
    color?: string;
    title?: string;
  }
  export type IconType = (props: IconBaseProps) => React.JSX.Element;
}

declare module "react-icons" {
  export interface IconBaseProps extends React.SVGAttributes<SVGElement> {
    children?: React.ReactNode;
    size?: string | number;
    color?: string;
    title?: string;
  }
  export type IconType = (props: IconBaseProps) => React.JSX.Element;
}

declare module "react-icons/fi" {
  import { IconType } from "react-icons";
  export const FiGithub: IconType;
  export const FiLinkedin: IconType;
  export const FiMail: IconType;
  export const FiHeart: IconType;
  export const FiDownload: IconType;
  export const FiArrowDown: IconType;
  export const FiMenu: IconType;
  export const FiX: IconType;
  export const FiSun: IconType;
  export const FiMoon: IconType;
  export const FiMapPin: IconType;
  export const FiPhone: IconType;
  export const FiChevronDown: IconType;
  export const FiChevronUp: IconType;
  export const FiSend: IconType;
  export const FiCheck: IconType;
  export const FiAlertCircle: IconType;
}
