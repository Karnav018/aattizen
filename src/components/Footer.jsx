import { Link } from "react-router-dom";
import Icon from "./Icon.jsx";
import { company } from "../data/site.js";
import { services } from "../data/services.js";

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-lowest border-t border-outline-variant mt-2xl">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-xl px-gutter py-2xl max-w-container-max mx-auto">
        <div>
          <div className="flex items-center gap-sm mb-md">
            <img src="/images/aattizen.png" alt="Aattizen" className="h-9 w-auto" />
          </div>
          <p className="text-on-surface-variant text-label-md max-w-xs">
            {company.description}
          </p>
        </div>

        <div>
          <h4 className="text-label-md font-bold mb-md uppercase tracking-wider">
            Solutions
          </h4>
          <div className="flex flex-col gap-sm">
            {services.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="text-label-md text-on-surface-variant hover:text-primary transition-colors"
              >
                {s.title}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-label-md font-bold mb-md uppercase tracking-wider">
            Company
          </h4>
          <div className="flex flex-col gap-sm">
            <Link
              to="/about"
              className="text-label-md text-on-surface-variant hover:text-primary"
            >
              About Us
            </Link>
            <Link
              to="/clients"
              className="text-label-md text-on-surface-variant hover:text-primary"
            >
              Our Clients
            </Link>
            <Link
              to="/support"
              className="text-label-md text-on-surface-variant hover:text-primary"
            >
              Support
            </Link>
            <Link
              to="/contact"
              className="text-label-md text-on-surface-variant hover:text-primary"
            >
              Contact
            </Link>
          </div>
        </div>

        <div>
          <h4 className="text-label-md font-bold mb-md uppercase tracking-wider">
            Headquarters
          </h4>
          <p className="text-on-surface-variant text-label-md leading-relaxed">
            {company.address.line1}
            <br />
            {company.address.line2}
            <br />
            {company.address.line3}
          </p>
          <div className="mt-md flex flex-col gap-xs">
            <a
              href={`tel:${company.phones.primary.replace(/\s/g, "")}`}
              className="text-label-md text-primary flex items-center gap-sm"
            >
              <Icon name="call" className="!text-base" /> {company.phones.primary}
            </a>
            <a
              href={`mailto:${company.emails.sales}`}
              className="text-label-md text-primary flex items-center gap-sm"
            >
              <Icon name="mail" className="!text-base" /> {company.emails.sales}
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-outline-variant py-lg px-gutter max-w-container-max mx-auto flex flex-col md:flex-row justify-between gap-md items-center">
        <p className="text-label-md text-on-surface-variant opacity-80">
          © {new Date().getFullYear()} {company.name}. All rights reserved.
        </p>
        <div className="flex gap-md text-secondary opacity-60">
          <Icon name="public" />
          <Icon name="shield" />
          <Icon name="monitoring" />
        </div>
      </div>
    </footer>
  );
}
