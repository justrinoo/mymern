import React from "react";
import Button from "elements/Button";
import IconText from "./IconText";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col">
            <IconText />
            <p className="brand-tagline">
              {" "}
              We kaboom your beauty holiday instanly and memorable
            </p>
          </div>
          <div className="col-2 mr-5">
            <h6 className="mt-2">For Beginners</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/register">
                  New Account
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/properties">
                  Start a booking room
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/use-payments">
                  Use Payments
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-2 mr-5">
            <h6 className="mt-2">Explore Us</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/careers">
                  Our Careers
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/privacy">
                  Privacy
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/terms">
                  Terms & Conditions
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-4">
            <h6 className="mt-2">Connect Us</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button
                  type="link"
                  href="mailto:rinosatyaputra.@staycation.id"
                  isExternal
                >
                  support@staycation.id
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="tel:+6221574653">
                  021 - 547 - 653
                </Button>
              </li>
              <li className="list-group-item">
                <span>Staycation, Tambora, Jakarta barat</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col text-center copyrights">
            Copyright 2020, All Rights Reserved, Staycation
          </div>
        </div>
      </div>
    </footer>
  );
}
