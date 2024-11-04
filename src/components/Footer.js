import React from "react";

function Footer() {
  return (
    <div className="row  align-items-center justify-content-center">
      <div className="information2  col-12  col-lg-10">
        <div className="d-lg-flex col-12 justify-content-start my-2">
          <p className="information2 mytext ms-2  text-start">
            {" "}
            More ways to shop: <a href="#">Find an Apple Store</a> or{" "}
            <a href="#">other retailer</a> near you.
            <br className="d-block d-md-none d-lg-none" />
            or call 1-800-MY-APPLE
          </p>
        </div>
        <hr className="d-lg-block ms-md-2 mx-auto d-md-block d-none" />
      </div>
      <div className="row d-lg-flex d-md-flex col-lg-10 col-md-12">
        <div class="information col-lg-9 col-md-6 order-2 order-md-1   d-lg-flex">
          <div class="information  mb-0 justify-content-between w-100">
            <p class="information d-flex mytxt">
              Copyright &copy; 2024 Apple Inc. All rights reserved.
            </p>
          </div>
            <ul className="d-flex flex-wrap  mt-0 col-lg-7 col-md-12 list-unstyled">
            {["Privacy Policy", "Terms of Use", "Sales and Refunds", "Legal", "Site Map"].map((item, index) => (
              <li key={index} className="listitem ">
                <a href="#" className="text-dark mytxt">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-lg-3 col-12 order-1 order-md-2 col-md-5">
          <p class="information text-lg-end text-dark text-md-end text-start mb-2 mytxt">
            United States
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;


