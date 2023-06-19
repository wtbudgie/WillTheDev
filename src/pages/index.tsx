import { NextPage } from "next";
import { FaDiscord, FaGithub, FaMailBulk } from "react-icons/fa";
import Head from "next/head";
import { TailwindCss, Nodejs } from "@styled-icons/boxicons-logos";
import { Nextdotjs, Typescript, Mongodb } from "@styled-icons/simple-icons";
import { useEffect, useState } from "react";
import axios from "axios";

const Home: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [showErrorNotification, setShowErrorNotification] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (showNotification || showErrorNotification) {
      timer = setTimeout(() => {
        setShowNotification(false);
        setShowErrorNotification(false);
      }, 6000);
    }
    return () => clearTimeout(timer);
  }, [showNotification]);

  return (
    <>
      <Head>
        <title>willthedev</title>
        <meta name="description" content="WillTheDev's official website!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col">
        <div className="mx-auto mt-10 max-w-7xl px-6 sm:mt-10 lg:mt-24 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              willthedev
              <span className="blinkText">
                <div className="blinkBlock"> </div>
              </span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Nice to meet you, I'm a programmer who specialises in the fields
              of
              <span className="highlightOrange"> Javascript</span>, and
              <span className="highlightOrange"> Typescript</span>. I'm
              constantly learning
              <span className="highlightAqua"> new innovations</span> and
              <span className="highlightAqua"> coding practices</span>, while
              constantly being open to
              <span className="highlightAqua"> paid commissions</span>.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 sm:grid-cols-2 md:flex lg:gap-x-10">
            <a
              href="https://github.com/wtbudgie"
              className="inline-flex items-center rounded border-b-4 border-blue-700 bg-blue-500 px-4 py-2 font-bold text-white transition hover:border-blue-500 hover:bg-blue-400"
            >
              GitHub 
              <FaGithub />
            </a>
            <a
              href="https://willthedev.com/discord"
              className="inline-flex items-center rounded border-b-4 border-blue-700 bg-blue-500 px-4 py-2 font-bold text-white transition hover:border-blue-500 hover:bg-blue-400"
            >
              Discord 
              <FaDiscord fontSize={"20px"} />
            </a>
            <button
              id="contact-button"
              className={`inline-flex items-center rounded border-b-4 ${
                isOpen
                  ? "border-green-500 bg-green-400"
                  : "border-blue-700 bg-blue-500"
              } px-4 py-2 font-bold text-white transition hover:border-blue-500 hover:bg-blue-400`}
              type="button"
              onClick={() => {
                setIsOpen(true);
              }}
            >
              Contact &nbsp;
              <FaMailBulk fontSize="20px" />
            </button>
          </div>

          <div className="mt-24">
            <div className="space-x-between flex w-screen max-w-screen-xl items-center justify-between pl-4 pr-4">
              <TailwindCss
                className="inline-flex max-h-[96px] max-w-[96px] items-center"
                style={{
                  color: "#FF6B6B",
                }}
              />
              <Nextdotjs
                className="inline-flex max-h-[96px] max-w-[96px] items-center"
                style={{ color: "#6B73FF" }}
              />
              <Nodejs
                className="inline-flex max-h-[96px] max-w-[96px] items-center"
                style={{ color: "#68A063" }}
              />
              <Typescript
                className="inline-flex max-h-[96px] max-w-[96px] items-center"
                style={{ color: "#3178C6" }}
              />
              <Mongodb
                className="inline-flex max-h-[96px] max-w-[96px] items-center"
                style={{ color: "#589636" }}
              />
            </div>
          </div>
          {showNotification && (
            <div
              className="fixed bottom-4 right-4 mb-3 inline-flex items-center rounded-lg bg-green-100 px-6 py-5 text-base text-green-700"
              role="alert"
            >
              <span className="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
              Successfully sent the contact request!
            </div>
          )}
          {showErrorNotification && (
            <div
              className="fixed bottom-4 right-4 mb-3 inline-flex items-center rounded-lg bg-red-500 px-6 py-5 text-base text-white"
              role="alert"
            >
              <span className="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              Too many contact requests have been sent. Try again later.
            </div>
          )}

          <div className="mb-5 mt-28">
            <h2 className="text-5xl font-bold tracking-tight text-white">
              Projects
            </h2>
            <p className="text-1xl tracking-tight text-gray-400">
              past and present
            </p>
          </div>

          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 sm:grid-cols-2">
            <div className="flex justify-center">
              <div
                className="max-w-md overflow-hidden rounded shadow-lg"
                style={{ backgroundColor: "#1f2c47" }}
              >
                <div className="px-6 py-4">
                  <div
                    className="mb-2 text-xl font-bold"
                    style={{ color: "white" }}
                  >
                    Resolv Bot
                  </div>
                  <p className="text-base text-gray-400">
                    Resolv is the world's first staff management Discord bot.
                    Strikes, Breaks, Disciplinaries, Activity management and
                    more!
                  </p>
                </div>
                <div className="px-6 pb-2 pt-4">
                  <span className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                    #javascript
                  </span>
                  <span className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                    #discordjs
                  </span>
                  <span className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                    #nextjs
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div
                className="max-w-md overflow-hidden rounded shadow-lg"
                style={{ backgroundColor: "#1f2c47" }}
              >
                <div className="px-6 py-4">
                  <div
                    className="mb-2 text-xl font-bold"
                    style={{ color: "white" }}
                  >
                    BudgieBot
                  </div>
                  <p className="text-base text-gray-400">
                    A MultiPurpose discord bot that can fulfill all of your
                    server's needs. With User Management, Moderation, and
                    Utility features.
                  </p>
                </div>
                <div className="px-6 pb-2 pt-4">
                  <span className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                    #javascript
                  </span>
                  <span className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                    #discordjs
                  </span>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
        </div>
        <div
          id="authentication-modal"
          tabIndex={-1}
          aria-hidden={!isOpen}
          className={`fixed left-0 right-0 top-0 z-10 ${
            isOpen ? "" : "hidden"
          } md:inset-0place-content-center flex h-[calc(100%-1rem)] max-h-full w-full place-content-center justify-center overflow-y-auto overflow-x-hidden p-20`}
        >
          <div className="relative max-h-full w-full max-w-4xl">
            <div className="relative rounded-lg bg-white shadow dark:bg-gray-700">
              <button
                type="button"
                className="absolute right-2.5 top-3 ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white"
                data-modal-hide="authentication-modal"
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                <svg
                  aria-hidden="true"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <div className="px-6 py-6 lg:px-8">
                <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                  Send a contact message.
                </h3>
                <form
                  className="space-y-6"
                  onSubmit={(event: any) => {
                    event.preventDefault();
                    const formData = new FormData(event.target);
                    const email = formData.get("email");
                    const name = formData.get("name");
                    const subject = formData.get("subject");
                    const content = formData.get("content");

                    axios
                      .post("/api/contact", {
                        email,
                        name,
                        subject,
                        content,
                      })
                      .then((response) => {
                        if (response.status == 429) {
                          setIsOpen(false);
                          setShowErrorNotification(true);
                        } else {
                          setIsOpen(false);
                          setShowNotification(true);
                        }
                      })
                      .catch((error) => {
                        setIsOpen(false);
                        setShowErrorNotification(true);
                      });
                  }}
                >
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                      placeholder="name@company.com"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Will"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      placeholder="Paid commission request."
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Email Content
                    </label>
                    <input
                      type="text"
                      name="content"
                      id="content"
                      placeholder="..."
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Send the request.
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
