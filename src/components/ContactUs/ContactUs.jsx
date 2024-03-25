import css from "./ContactUs.module.css";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import addSharp from "../../assets/add-sharp.svg";
import discordIcon from "../../assets/discord-icon.svg";
import metaMaskIcon from "../../assets/metaMask-icon-color.svg";
import { motion } from "framer-motion";

const validDiscord = true;

const ContactUs = ({ setSelectedPage }) => {
  const {
    register,
    trigger,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [isDiscordUsernameFilled, setIsDiscordUsernameFilled] = useState(false);
  const [isWalletAddressFilled, setIsWalletAddressFilled] = useState(false);

  useEffect(() => {
    if (watch("discordUsername") !== "") {
      setIsDiscordUsernameFilled(true);
    } else {
      setIsDiscordUsernameFilled(false);
    }
    if (watch("walletAddress") !== "") {
      setIsWalletAddressFilled(true);
    } else {
      setIsWalletAddressFilled(false);
    }
  }, [watch("discordUsername"), watch("walletAddress")]);

  const onSubmit = async (e) => {
    e.preventDefault();
    const isValid = await trigger();
    if (isValid) {
      setIsSubmitSuccess(true);
      setTimeout(() => {
        setShowSuccessMessage(true);
        reset();
      }, 1000);
    }
  };

  return (
    <section id="mint" className={css.section}>
      <motion.div
        onViewportEnter={() => setSelectedPage("mint")}
      >
        <h1 className={css.title}>Are you in?</h1>
        <div className={css.wrapper}>
          <div className={css.textBoxLeft}>
            <img className={css.textLeftImg} src={addSharp} alt="icon cross" />
            <p className={css.textLeft}>
              Join the YACHT APE community to be one of the first to receive our
              limited edition NFT
            </p>
          </div>
          <form
            className={css.form}
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

            <div className={css.inputWrapper}>
              <div className={css.iconWrapper}>
                <img
                  className={css.iconDiscord}
                  src={discordIcon}
                  alt="discords logo"
                />
              </div>
              <input
                className={`${css.input} ${
                  errors.discordUsername ? css.error : ""
                } ${isDiscordUsernameFilled ? css.filled : ""}`}
                type="text"
                name="discordUsername"
                placeholder="@username"
                {...register("discordUsername", {
                  required: true,
                  maxLength: 30,
                  pattern: /^@?[a-zA-Z0-9_.]*$/,
                })}
              />
              {errors.discordUsername && (
                <p className={css.text} style={{ visibility: "visible" }}>
                  {errors.discordUsername.type === "required" &&
                    "This field is required."}
                  {errors.discordUsername.type === "maxLength" &&
                    "Max length is 30 characters."}
                  {errors.discordUsername.type === "pattern" && "Wrong discord"}
                </p>
              )}
            </div>

            <div className={css.inputWrapper}>
              <div className={css.iconWrapper}>
                <img
                  className={css.iconImg}
                  src={metaMaskIcon}
                  alt="logomark Blue"
                />
              </div>
              <input
                className={`${css.input} ${
                  errors.walletAddress ? css.error : ""
                } ${isWalletAddressFilled ? css.filled : ""}`}
                type="text"
                name="walletAddress"
                placeholder="Wallet address"
                {...register("walletAddress", {
                  required: true,
                  pattern: /^[a-zA-Z0-9]+$/,
                })}
              />
              {errors.walletAddress && (
                <p className={css.text} style={{ visibility: "visible" }}>
                  {errors.walletAddress.type === "required" &&
                    "This field is required."}
                  {errors.walletAddress.type === "pattern" && "Wrong address"}
                </p>
              )}
            </div>

            <button
              className={css.btnSubmit}
              type="submit"
            >
              {
                isSubmitSuccess ? "MINTED" : "MINT"
              }
            </button>
          </form>

          {showSuccessMessage && (
            <div className={css.popUp}>
              <div className={`${css.containerItem} ${css.addColor}`}>
                <p className={css.upperElement}>
                  Successfull! <br />
                  You are in!
                </p>
                <btn
                  className={css.popUpBtn}
                  onClick={() => {
                    setShowSuccessMessage(false);
                    setIsSubmitSuccess(false);
                  }}
                >
                  ok
                </btn>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
