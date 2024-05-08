import copyright from "../../assets/icons/copyright.svg";
import footerStyles from "./footer.module.css";

export default function Footer() {
  return (
    <div className={footerStyles.footerContainer}>
      <img
        src={copyright}
        alt="copyright-icon"
        className={footerStyles.copyrightIcon}
      ></img>
      <p className={footerStyles.copyright}>Talup 2023. All rights reserved</p>
      <p className={footerStyles.terms}>Terms & Conditions</p>
      <p className={footerStyles.privacy}>Privacy Policy</p>
    </div>
  );
}
