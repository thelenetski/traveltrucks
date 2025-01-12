import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import css from "./CamperPageForm.module.css";

const CamperPageForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [selectedDate, setSelectedDate] = useState(null);

  const onSubmit = (data) => {
    /*Тут має бути діспатч з відправкою на сервер*/
    console.log("Form Data: ", { ...data, date: selectedDate });
    alert("Form submitted successfully!");
  };

  return (
    <div className={css.formContainer}>
      <h2>Book your campervan now</h2>
      <p>Stay connected! We are always ready to help you.</p>
      <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
        {/* Name Input */}
        <div className={css.formGroup}>
          <input
            type="text"
            placeholder="Name*"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <p className={css.errorMessage}>{errors.name.message}</p>
          )}
        </div>

        {/* Email Input */}
        <div className={css.formGroup}>
          <input
            type="email"
            placeholder="Email*"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <p className={css.errorMessage}>{errors.email.message}</p>
          )}
        </div>

        {/* Booking Date Input */}
        <div className={css.formGroup}>
          <DatePicker
            id="booking-date"
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="MMMM d, yyyy"
            placeholderText="Booking date*"
            className={css.datePicker}
            calendarClassName={css.dateCalendar}
          />
        </div>
        {/* Comment Input */}
        <div className={css.formGroup}>
          <textarea
            style={{ height: "118px" }}
            placeholder="Comment"
            {...register("comment")}
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className={css.submitButton}>
          Send
        </button>
      </form>
    </div>
  );
};

export default CamperPageForm;
