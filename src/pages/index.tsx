import { NextPage } from "next";
import { FaDiscord, FaGithub } from "react-icons/fa";
import Head from "next/head";
import { TailwindCss, Nodejs } from "@styled-icons/boxicons-logos";
import { Nextdotjs, Typescript, Mongodb } from "@styled-icons/simple-icons";

const Home: NextPage = () => {
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
      </main>
    </>
  );
};

export default Home;
