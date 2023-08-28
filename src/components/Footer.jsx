import React from "react";
import telephone from "../assets/telephone.svg";
import email from "../assets/email.svg";
import social from "../assets/social.png";

const FooterLinkList = ({ title, links }) => (
  <div className="width-20">
    <div className="footer-section">
      <h6 className="icon-color text-uppercase font-weight-700">{title}</h6>
      <ul className="list-unstyled font-small grey-color">
        {links.map((link, index) => (
          <li key={index}>
            <a alt="link" href={link}>
              {link}
            </a>
          </li>
        ))}
      </ul>
      {title === "Locations" ? (
        <a
          href="/locations"
          className="btn btn-primary btn-map-search footer--btn"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="16"
            viewBox="0 0 12 16"
            fill="none"
          >
            <path
              d="M6.00006 0.5C2.69181 0.5 6.10835e-05 3.19175 6.10835e-05 6.49625C-0.0216889 11.33 5.77206 15.338 6.00006 15.5C6.00006 15.5 12.0218 11.33 12.0001 6.5C12.0001 3.19175 9.30831 0.5 6.00006 0.5ZM6.00006 9.5C4.34256 9.5 3.00006 8.1575 3.00006 6.5C3.00006 4.8425 4.34256 3.5 6.00006 3.5C7.65756 3.5 9.00006 4.8425 9.00006 6.5C9.00006 8.1575 7.65756 9.5 6.00006 9.5Z"
              fill="white"
            ></path>
          </svg>{" "}
          Map Search
        </a>
      ) : (
        ""
      )}
    </div>
  </div>
);

const Footer = () => {
  const footerSections = [
    {
      title: "Buy & Sell",
      links: [
        "Sell",
        "Browse Home",
        "Cash Offer",
        "Buy",
        "New Construction",
        "Pricing",
        "Down Payment",
      ],
    },
    {
      title: "Investment",
      links: ["Co Investment", "Partnership Buying"],
    },
    {
      title: "Company",
      links: [
        "About",
        "Contact Us",
        "Carrers",
        "Vendors",
        "Privacy Policy",
        "Terms & Conditions",
      ],
    },
    {
      title: "Learn",
      links: ["Seller FAQs", "Buyer FAQs", "Blogs", "Morgage Calculator"],
    },
    {
      title: "Locations",
      links: [
        "Greater Toronto Area",
        "Region of Peel",
        "Region of Humilton",
        "Region of Waterloo",
        "View All Locations",
      ],
    },
  ];

  return (
    <div className="footer">
      <div className="container">
        <div className="row mb-3">
          {footerSections.map((section, index) => (
            <FooterLinkList
              key={index}
              title={section.title}
              links={section.links}
            />
          ))}
        </div>
        <div className="footer-contact">
          <h6 className="icon-color">Contact Us</h6>
          <div className="social mb-2">
            <img src={social} alt="Social Icons" />
          </div>
          <div className="footer--menu">
            <div className="footer--social">
              <img src={telephone} alt="Telephone Icon" />
              <span className="font-small pd-l-5">905-567-0200</span>
            </div>
            <div className="footer--social">
              <img src={email} alt="Email Icon" />
              <span className="font-small">info@redbuyers.com</span>
            </div>
            <span className="font-footer font-clr">
              © 2021 redbuyers.com. All rights reserved.
            </span>
            <p className="font-small mb-2">
              RedBuyers Realty. Brokerage, is fully registered under the Real
              Estate and Business brokerage, Act, 2002 of Ontario.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
