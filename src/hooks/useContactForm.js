import { useEffect, useRef, useState } from "react";

export const CONTACT_FORM_ACTION =
  "https://api.rootsbmd.com/public/SaveContactForm";
export const CONTACT_FORM_EMAIL_TO = "ahsan@rootsbmd.com";

function useContactForm(options = {}) {
  const {
    buildSubject,
    successMessage = "Form submitted successfully.",
    errorMessage = "Submission failed. Please try again.",
    getErrorMessage,
    onSuccess,
    onError,
  } = options;

  const formRef = useRef(null);
  const toastTimeoutRef = useRef(null);
  const [toastMessage, setToastMessage] = useState("");
  const [toastTone, setToastTone] = useState("success");
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(
    () => () => {
      if (toastTimeoutRef.current) {
        window.clearTimeout(toastTimeoutRef.current);
      }
    },
    [],
  );

  const showToast = (message, tone = "success") => {
    if (toastTimeoutRef.current) {
      window.clearTimeout(toastTimeoutRef.current);
    }

    setToastMessage(message);
    setToastTone(tone);
    setIsToastVisible(true);

    toastTimeoutRef.current = window.setTimeout(() => {
      setIsToastVisible(false);
    }, 4000);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formRef.current || isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    try {
      const formData = new FormData(formRef.current);
      const nextSubject =
        typeof buildSubject === "function"
          ? buildSubject(formData)
          : "MindReach appointment request";

      formData.set("email_to", CONTACT_FORM_EMAIL_TO);
      formData.set("subject", nextSubject);

      const response = await fetch(CONTACT_FORM_ACTION, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      const responsePayload = await response.json().catch(() => null);

      if (!response.ok || responsePayload?.status === false) {
        const submissionError = new Error(
          responsePayload?.message || "Request failed",
        );
        submissionError.response = response;
        submissionError.responsePayload = responsePayload;
        throw submissionError;
      }

      const values = Object.fromEntries(formData.entries());

      formRef.current.reset();
      showToast(successMessage, "success");
      onSuccess?.({ response: responsePayload, values });
    } catch (error) {
      const nextErrorMessage =
        typeof getErrorMessage === "function"
          ? getErrorMessage(error)
          : errorMessage;

      showToast(nextErrorMessage, "error");
      onError?.(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formRef,
    handleSubmit,
    isSubmitting,
    toastMessage,
    toastTone,
    isToastVisible,
  };
}

export default useContactForm;
