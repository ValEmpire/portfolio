import React from "react";
import { useForm } from "react-hook-form";
import { sendMail } from "../firebase/sendMail";
import { useAlert } from "react-alert";

const Contact = () => {
  const alert = useAlert();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data, e) => {
    data.date = Date.now();

    sendMail(data, (err, success) => {
      if (success) {
        alert.success(
          "Thank you for your message. I will contact you back as soon as I can. Have a good day!"
        );

        reset();

        return;
      }

      console.log(err);

      alert.error("Something went wrong!");

      return;
    });
  };

  return (
    <>
      <form className="contactform" onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="form-group">
              <input
                {...register("name", { required: true })}
                type="text"
                name="name"
                placeholder="YOUR NAME"
              />
              {errors.name && errors.name.type === "required" && (
                <span className="invalid-feedback">Name is required</span>
              )}
            </div>
          </div>
          {/* End .col */}

          <div className="col-12 col-md-6">
            <div className="form-group">
              <input
                {...register(
                  "email",
                  {
                    required: "Email is Required",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Entered value does not match email format",
                    },
                  },
                  { required: true }
                )}
                type="email"
                name="email"
                placeholder="YOUR EMAIL"
              />
              {errors.email && (
                <span className="invalid-feedback">{errors.email.message}</span>
              )}
            </div>
          </div>
          {/* End .col */}

          <div className="col-12 col-md-12">
            <div className="form-group">
              <input
                {...register("subject", { required: true })}
                type="text"
                name="subject"
                placeholder="YOUR SUBJECT"
              />
              {errors.subject && (
                <span className="invalid-feedback">Message is required.</span>
              )}
            </div>
          </div>
          {/* End .col */}

          <div className="col-12">
            <div className="form-group">
              <textarea
                {...register("message", { required: true })}
                name="message"
                placeholder="YOUR MESSAGE"
              ></textarea>
              {errors.message && (
                <span className="invalid-feedback">Message is required.</span>
              )}
            </div>
          </div>
          {/* End .col */}

          <div className="col-12">
            <button type="submit" className="button">
              <span className="button-text">Send Message</span>
              <span className="button-icon fa fa-send"></span>
            </button>
          </div>
          {/* End .col */}
        </div>
      </form>

      {/* End contact */}
    </>
  );
};

export default Contact;
