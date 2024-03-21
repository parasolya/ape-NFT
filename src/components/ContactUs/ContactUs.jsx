import css from "../ContactUs/ContactUs.module.css";
import { useForm } from "react-hook-form";
import { useState } from "react";
import addSharp from "../../assets/add-sharp.svg";

// Purple flame, Guess, Elance, Beaming blush

const ContactUs = () => {
  const {
    register,
    trigger,
    formState: { errors },
    reset,
  } = useForm();

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    setLoading(true);
    const isValid = await trigger();

    if (isValid) {
      setShowSuccessMessage(true);
      setLoading(true);
    } else {
      e.preventDefault();
    }
  };

  return (
    <section className={css.section}>
      <h1 className={css.title}>Are you in?</h1>
      <div className={css.wrapper}>
      <div className={css.textBoxLeft}>
            <img className={css.textLeftImg} src={addSharp} alt="icon cross"/>
           <p className={css.textLeft}>Join the YACHT APE community to be one of the first to receive our limited edition NFT</p>
            
            </div>
        <form
          // target="_blank"
          onSubmit={onSubmit}
          action="https://formsubmit.co/ola.shevchuk@gmail.com"
          method="POST"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_subject"
            value="Ape-NFT-New submission!"
          />
          <input
            type="hidden"
            name="_next"
            value="http://localhost:5173/ape-NFT"
          />
<input
    type="text"
    name="discordUsername"
    placeholder="Discord username"
    {...register("discordUsername", {
        required: true,
        maxLength: 30, // наприклад
        pattern: /^[a-zA-Z0-9_]*$/ // припустимий шаблон для імен або ідентифікаторів у системі Discord
    })}
/>
{errors.discordUsername && (
    <p className={css.text} style={{ visibility: 'visible' }}>
        {errors.discordUsername.type === "required" && "This field is required."}
        {errors.discordUsername.type === "maxLength" && "Max length is 30 characters."}
        {errors.discordUsername.type === "pattern" && "Wrong discord username format."}
    </p>
)}
          <input
            type="text"
            name="name"
            placeholder="Name"
            {...register("name", {
              required: true,
              maxLength: 100,
            })}
          />
          {errors.name && (
            <p className={css.text} style={{ visibility: "visible" }}>
              {errors.name.type === "required" && "This field is required."}
              {errors.name.type === "maxLength" && "Wrong discord"}
            </p>
          )}
          {!errors.name && (
            <p className={css.text} style={{ visibility: "hidden" }}>
              This field is required.
            </p>
          )}
          <input
            type="text"
            name="email"
            placeholder="E-mail"
            {...register("email", {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            })}
          />
          {errors.email && (
            <p className={css.text} style={{ visibility: "visible" }}>
              {errors.email.type === "required" && "This field is required."}
              {errors.email.type === "pattern" && "Wrong address"}
            </p>
          )}
          {!errors.email && (
            <p className={css.text} style={{ visibility: "hidden" }}>
              This field is required.
            </p>
          )}

          <button className={css.btnSubmit} type="submit">
            MINT
          </button>
        </form>
        {showSuccessMessage && (
          <div>
            <div>
              <p>You have successfully submitted the form</p>
              <div>{loading ? <div className={css.spinner}></div> : ""}</div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactUs;
