import { useEffect, useState } from 'react'
import { FaRegStar, FaStar } from 'react-icons/fa'
import { FiBriefcase, FiMessageCircle, FiThumbsUp } from 'react-icons/fi'
import CalendlyInlineModal from '../integrations/CalendlyInlineModal'
import AppImage from '../ui/AppImage'

const MOBILE_BREAKPOINT = 768
const MOBILE_VISIBLE_COUNT = 4

function isMobileViewport() {
  if (typeof window === 'undefined') {
    return false
  }

  return window.innerWidth < MOBILE_BREAKPOINT
}

function renderStars(rating) {
  const filledStars = Math.floor(rating)

  return Array.from({ length: 5 }, (_, index) => (
    index < filledStars ? (
      <FaStar key={`star-${index}`} aria-hidden="true" />
    ) : (
      <FaRegStar key={`star-${index}`} aria-hidden="true" />
    )
  ))
}

function DoctorCardGrid({
  doctors,
  showSeeMoreOnMobile = true,
  interaction = 'navigate',
  selectedDoctorId,
  onSelectedDoctorIdChange,
}) {
  const [isMobile, setIsMobile] = useState(isMobileViewport)
  const [isExpanded, setIsExpanded] = useState(false)
  const [internalSelectedDoctorId, setInternalSelectedDoctorId] = useState(null)

  useEffect(() => {
    const handleResize = () => {
      const nextIsMobile = isMobileViewport()
      setIsMobile(nextIsMobile)

      if (!nextIsMobile) {
        setIsExpanded(false)
      }
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const canToggleSeeMore = showSeeMoreOnMobile && isMobile && doctors.length > MOBILE_VISIBLE_COUNT
  const visibleDoctors = canToggleSeeMore && !isExpanded
    ? doctors.slice(0, MOBILE_VISIBLE_COUNT)
    : doctors
  const isModalInteraction = interaction === 'modal'
  const usesControlledSelection = typeof selectedDoctorId !== 'undefined'
  const activeDoctorId = isModalInteraction
    ? (usesControlledSelection ? selectedDoctorId ?? null : internalSelectedDoctorId)
    : null
  const activeDoctor = activeDoctorId
    ? doctors.find((doctor) => doctor.id === activeDoctorId) ?? null
    : null

  const updateSelectedDoctorId = (doctorId) => {
    if (isModalInteraction && !usesControlledSelection) {
      setInternalSelectedDoctorId(doctorId)
    }

    onSelectedDoctorIdChange?.(doctorId)
  }

  const handleDoctorActivate = (doctor) => {
    if (!isModalInteraction) {
      return
    }

    updateSelectedDoctorId(doctor.id)
  }

  return (
    <div className="mindreach-doctor-grid-shell">
      {isModalInteraction ? (
        <CalendlyInlineModal
          key={activeDoctor?.id ?? 'closed-booking-modal'}
          open={Boolean(activeDoctor)}
          onClose={() => updateSelectedDoctorId(null)}
          doctorName={activeDoctor?.name}
        />
      ) : null}

      <div className="row g-4 mindreach-doctor-grid">
        {visibleDoctors.map((doctor, index) => (
          <div
            key={doctor.id}
            className="col-12 col-md-6 col-lg-6 col-xl-6 d-flex wow fadeInUp"
            data-wow-delay={`${0.3 + (index * 0.1)}s`}
          >
            <article className="mindreach-doctor-card w-100">
              {isModalInteraction ? (
                <button
                  type="button"
                  className="mindreach-doctor-card__media mindreach-doctor-card__media-button"
                  onClick={() => handleDoctorActivate(doctor)}
                  aria-label={`Book appointment with ${doctor.name}`}
                >
                  <AppImage
                    src={doctor.image}
                    alt={doctor.imageAlt}
                    wrapperClassName="app-image--fill"
                    className={doctor.imageClassName}
                  />
                </button>
              ) : (
                <a
                  href={doctor.bookingHref}
                  className="mindreach-doctor-card__media"
                  aria-label={`Book appointment with ${doctor.name}`}
                >
                  <AppImage
                    src={doctor.image}
                    alt={doctor.imageAlt}
                    wrapperClassName="app-image--fill"
                    className={doctor.imageClassName}
                  />
                </a>
              )}

              <div className="mindreach-doctor-card__body">
                <div className="mindreach-doctor-card__content">
                  <div className="mindreach-doctor-card__header">
                    <span className="mindreach-doctor-card__credential">{doctor.credential ?? doctor.education}</span>
                    <h3 className="mindreach-doctor-card__name">
                      {isModalInteraction ? (
                        <button
                          type="button"
                          className="mindreach-doctor-card__name-button"
                          onClick={() => handleDoctorActivate(doctor)}
                        >
                          {doctor.name}
                        </button>
                      ) : (
                        <a href={doctor.bookingHref}>{doctor.name}</a>
                      )}
                    </h3>
                    <p className="mindreach-doctor-card__role">{doctor.role}</p>
                  </div>

                  <div className="mindreach-doctor-card__rating" aria-label={`Rating ${doctor.rating ?? 4.8} out of 5`}>
                    <span className="mindreach-doctor-card__stars">{renderStars(doctor.rating ?? 4.8)}</span>
                    <strong className="mindreach-doctor-card__rating-value">({(doctor.rating ?? 4.8).toFixed(1)})</strong>
                  </div>
                </div>

                <div className="mindreach-doctor-card__aside">
                  <ul
                    className="mindreach-doctor-card__meta"
                    aria-label={`${doctor.name} profile highlights`}
                  >
                    <li>
                      <FiThumbsUp aria-hidden="true" />
                      <span>{doctor.approvalRate ?? '98%'}</span>
                    </li>
                    <li>
                      <FiMessageCircle aria-hidden="true" />
                      <span>{doctor.feedbackCount ?? 35} Feedback</span>
                    </li>
                    <li>
                      <FiBriefcase aria-hidden="true" />
                      <span>{doctor.experienceValue}</span>
                    </li>
                  </ul>

                  <div className="mindreach-doctor-card__footer">
                    {isModalInteraction ? (
                      <button
                        type="button"
                        onClick={() => handleDoctorActivate(doctor)}
                        className="common-btn box-style p2-bg text-nowrap d-inline-flex justify-content-center align-items-center gap-2 fs18 fw-semibold white overflow-hidden rounded100 mindreach-doctor-card__button"
                      >
                        Book Appointment
                        <img src="/assets/img/icon/arrow-right-white.png" alt="" aria-hidden="true" />
                      </button>
                    ) : (
                      <a
                        href={doctor.bookingHref}
                        className="common-btn box-style p2-bg text-nowrap d-inline-flex justify-content-center align-items-center gap-2 fs18 fw-semibold white overflow-hidden rounded100 mindreach-doctor-card__button"
                      >
                        Book Appointment
                        <img src="/assets/img/icon/arrow-right-white.png" alt="" aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          </div>
        ))}
      </div>

      {canToggleSeeMore ? (
        <div className="mindreach-doctor-grid__footer">
          <button
            type="button"
            className="common-btn box-style first-box d-inline-flex justify-content-center align-items-center gap-2 fs18 fw-semibold black overflow-hidden rounded100"
            onClick={() => setIsExpanded((currentValue) => !currentValue)}
          >
            <span>{isExpanded ? 'Show Less' : 'See More'}</span>
            <img src="/assets/img/icon/arrow-right-black.png" alt="" aria-hidden="true" />
          </button>
        </div>
      ) : null}
    </div>
  )
}

export default DoctorCardGrid
