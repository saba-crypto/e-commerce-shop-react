import "./PageLinks.css";
export function PageLinks() {
  return (
    <>
      <section className="end-of-site">
        <div className="horizontal-flex">
          <div className="vertical-flex">
            <p className="page-link">Help</p>
            <p className="page-link">Return</p>
            <p className="page-link">FAQ</p>
          </div>
          <div className="vertical-flex">
            <p className="page-link">About us</p>
            <p className="page-link">QNA</p>
            <p className="page-link">DNS</p>
          </div>
          <div className="vertical-flex">
            <p className="page-link">Company</p>
            <p className="page-link">Products</p>
            <p className="page-link">Seller</p>
          </div>
        </div>
        <div className="copyright-flex">
          <p className="copyright-sign">OS Game Store None Rights Reserved ©</p>
        </div>
      </section>
    </>
  );
}
