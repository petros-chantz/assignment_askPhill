import { Info } from "./Info";
import { Newsletter } from "./Newsletter";
import { Social } from "./Social";

export const Footer = () => {
  return (
    <div className="flex flex-col bg-beige">
      <Newsletter />
      <Info />
      <Social />
    </div>
  );
};
