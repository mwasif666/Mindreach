import { useSearchParams } from "react-router-dom";
import DoctorCardGrid from "../components/doctors/DoctorCardGrid";
import PageLayout from "../components/layout/PageLayout";
import DOCTORS, { getDoctorById } from "../data/doctors";

const PAGE_TITLE = "Book Appointment | MindReach";
const BODY_CLASS = "body-bg";

function BookAppointmentPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const requestedDoctorId = searchParams.get("doctor")?.trim() ?? "";
  const selectedDoctor = requestedDoctorId
    ? getDoctorById(requestedDoctorId)
    : null;

  const handleSelectedDoctorIdChange = (doctorId) => {
    const nextSearchParams = new URLSearchParams(searchParams);

    if (doctorId) {
      nextSearchParams.set("doctor", doctorId);
    } else {
      nextSearchParams.delete("doctor");
    }

    setSearchParams(nextSearchParams, { replace: true });
  };

  return (
    <PageLayout title={PAGE_TITLE} bodyClass={BODY_CLASS}>
      <div>
        <section className="breadcrumb-section position-relative fix doctor-breadcrumb-section">
          <div className="container">
            <div className="bread-content px-3 d-flex flex-wrap gap-3 align-items-center justify-content-md-between justify-content-center">
              <h2 className="black">Book Appointment</h2>
              <ul className="d-flex align-items-center gap-3">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>/</li>
                <li>Book Appointment</li>
              </ul>
            </div>
          </div>
          <img
            src="/assets/img/about/breadcrumnd-shap.png"
            alt=""
            aria-hidden="true"
            className="bread-ele"
          />
        </section>

        <section className="feature-section fix section-padding doctor-feature-list">
          <div className="container">
            <div className="doctor-feature-list__inner">
              <div className="section-title text-center mb-60">
                <span className="cmn-tag p1-bg heading-font">
                  Book Appointment
                </span>
                <h2
                  className="wow fadeInUp black visible-slowly-right"
                  data-wow-delay=".3s"
                >
                  Choose your provider and open the right
                  <br className="d-none d-md-block" />{' '}
                  <span className="position-relative z-1">
                    booking calendar
                    <img
                      src="/assets/img/element/title-badge1.png"
                      alt=""
                      aria-hidden="true"
                      className="title-badge1 d-md-block d-none w-100"
                    />
                  </span>
                </h2>
                <p className="pra pt-3 mb-0">
                  Click any provider below to open that provider&apos;s booking
                  flow directly.
                  {selectedDoctor
                    ? ` ${selectedDoctor.name} is currently selected.`
                    : ""}
                </p>
              </div>

              <DoctorCardGrid
                doctors={DOCTORS}
                interaction="modal"
                selectedDoctorId={selectedDoctor?.id ?? null}
                onSelectedDoctorIdChange={handleSelectedDoctorIdChange}
              />
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}

export default BookAppointmentPage;
