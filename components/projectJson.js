// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import React from "react";

const ComixMatchCaption = (
  <>
    <div className={"caption"}>
      <strong>Tech pool: </strong> flask, pandas, selenium, html, and css
    </div>
    <br />
    Using the powers of selenium and flask, I created a website that contains
    the information of over seven thousand books from goodreads' shelves.
    <br />
    <br />
    This data can be sorted by total reviews, average reviews, random, and other
    fun things. Goodreads doesn't let its users sort its data by these metrics,
    but I really wanted to find more comic books to read, so this seemed like
    the natural conclusion. Learning that everyone loves Calvin and Hobbes was a
    delightful bonus.
  </>
);

const UrsaMinorsCaption = (
  <>
    <div className={"caption"}>
      <strong>Thanks to:</strong> react, flask, and the google sheets api
    </div>
    <br />
    After staring at our old weebly site for so long, I obtained the blessing of
    our presidents and developed a new website for my acapella group.
    <br />
    <br />
    The site has a react front-end and a flask back-end for extra shenanigans,
    like the contact form. I have finished designing the site, but am giving it
    extra time for the members to fill out a google form with their bios
    {"\u2014"}but when they do, the information on the site will automatically
    update via the google sheets api. For runtime sake, I'll probably later
    remove this feature, but for now it's fun.
  </>
);

const CarpeCaption = (
  <>
    <div className={"caption"}>
      <strong>Thanks to:</strong> react and the world of npm
    </div>
    <br />
    Carpe is a productivity suite I built out as a pick-me-up during quarantine.
    <br />
    <br />I started with my idea for Elapsify, which starts a stopwatch every
    time a task is entered. I hoped to ramp up a bit of my stress and
    productivity (and it worked!). Then I built out Homework Tracker and Message
    Center as my own special ways of listing those to-dos. Through this personal
    project, I learned react. Quite fantastic, this library.
  </>
);

const ShellCaption = (
  <>
    <div className={"caption"}>
      <strong>Tech crew:</strong> c, gdb, and the linux man-pages
    </div>
    <br />I remember when I first saw the characters "cd" I was so confused
    {"\u2014"}but that made building this c-based shell clone even more freeing.
    <br />
    <br />
    Over the course of this project, I learned to implement the wonders of
    foreground and background processes, input and output redirection, and of
    course, command execution. It only takes one "cd" to change everything.
  </>
);

const GetBluenoCaption = (
  <>
    <div className={"caption"}>
      <strong>Using: </strong> html, css, javascript
    </div>
    <br />
    Here lies a 2048 clone that uses brunonian bears rather than numbers. I
    don't have much to say here, except that everyone I show this game to plays
    it for more than 20 minutes.
  </>
);

const SearchCaption = (
  <>
    <div className={"caption"}>
      <strong>Introducing:</strong> scala, xml, and sbt
    </div>
    <br />
    When life gives you a big XML wikis, I guess you slap a little bit of TF-IDF
    on it and call it a search engine.
    <br />
    <br />
    Using scala and the pagerank algorithm, I implemented a search engine that
    takes the pages and pages of information in given XML wikis and presents it
    in the format pictured above. In the process, I focused on time-complexity,
    space complexity, and of course, (soul) searching.
  </>
);

const TimbreCaption = (
  <>
    <div className={"caption"}>
      <strong>With great thanks to:</strong> java spring boot, docker, go,
      figma, react (next.js), mysql
    </div>
    <br />
    As is the old adage, what helps music producers the most is often, well,
    music.
    <br />
    <br />
    While working with my (wonderful) team of 4, I created the frontend for our
    timbre music website, in all of its upload, download, login, save, and edit
    glory. I also coded our user authentication system, set up our sql table
    structure, and did a bit of devops with the 9 docker containers I spread
    over our two docker-compose filesservers.
  </>
);

const KathyChattyCaption = (
  <>
    <div className={"caption"}>
      <strong>In cahoots with:</strong> flask, postgresql, react (next.js), and
      disqus
    </div>
    <br />
    I talk a lot. Which doesn't mean much but it did make me want to make a
    blog's blog, a content management system.
    <br />
    <br />
    Draft.js was the real mvp for being such a great framework to build a rich
    text editor off of. Before this project, I hadn't done a lot of work
    involving prefetching data, but next.js really sold me on that. And of
    course, flask and postgresql are always wonderful, and they challenge and teach me a bit
    about deployment every time.
    <br />
  </>
);

const projectsJson = [
  {
    name: "Timbre",
    git: "",
    deploy: "https://timbremusic.tk/",
    images: [
      "/images/Timbre-1.png",
      "/images/Timbre-2.png",
      "/images/Timbre-3.png",
    ],
    imageCaptions: [
      "Front page of Timbre Music website",
      "Discover page for Timbre Music",
      "Accounts page for Timbre",
    ],
    caption: TimbreCaption,
  },
  {
    name: "Kathy Chatty",
    git: "",
    deploy: "https://blog.ashley-chang.me",
    images: [
      "/images/Kathy-Chatty-1.png",
      "/images/Kathy-Chatty-2.png",
      "/images/Kathy-Chatty-3.png",
    ],
    imageCaptions: [
      "Home Page for Kathy Chatty Blog",
      "Admin Page for Kathy Chatty",
      "Demo Post for Kathy Chatty",
    ],
    caption: KathyChattyCaption,
  },
  {
    name: "Shell",
    git: "",
    deploy: "",
    images: [
      "/images/Shell-1.png",
      "/images/Shell-2.png",
      "/images/Shell-3.png",
    ],
    imageCaptions: [
      "Screen shot of shell clone that executed the banner command as well as foreground and background" +
        "signal handling commands",
      "shell clone with input and output redirection involving usr/bin/calendar",
      "shell clone executing figlet and banner commands",
    ],
    caption: ShellCaption,
  },
  {
    name: "Comix Match",
    git: "https://github.com/spswatron/comix-match",
    deploy: "https://comix-match.ashley-chang.me/",
    images: [
      "/images/Comix-Match-1.png",
      "/images/Comix-Match-2.png",
      "/images/Comix-Match-3.png",
    ],
    imageCaptions: [
      "Comix Match homepage with comic books sorted from highest " +
        "average rating to lowest",
      "Comix Match with comics sorted by random",
      "Chix match, " +
        "which is just Comix Match for chicklit, with books sorted by total reviews",
    ],
    caption: ComixMatchCaption,
  },
  {
    name: "Ursa Minors Website",
    git: "",
    deploy: "https://ursa-minors.ashley-chang.me",
    imageCaptions: [
      "Ursa Minors acapella group website landing page with photo of the group",
      "Member Info page for current Ursa Minors",
      "contact form for website",
    ],
    images: [
      "/images/Ursa-Minors-1.png",
      "/images/Ursa-Minors-2.png",
      "/images/Ursa-Minors-3.png",
    ],
    caption: UrsaMinorsCaption,
  },
  {
    name: "Carpe",
    git: "https://github.com/spswatron/carpe",
    deploy: "https://carpe.ashley-chang.me/",
    images: [
      "/images/Carpe-1.png",
      "/images/Carpe-2.png",
      "/images/Carpe-3.png",
    ],
    imageCaptions: [
      "Carpe website with calendar that tasks can be inputted into and taken out of",
      "Page with" + "rich text editor for to-do list messages",
      "Elapsify to-do list that starts a stopwatch for every task entered",
    ],
    caption: CarpeCaption,
  },
  // {
  //   name: "Search",
  //   git: "",
  //   deploy: "",
  //   images: [
  //     "/images/Search-1.png",
  //     "/images/Search-2.png",
  //     "/images/Search-3.png",
  //   ],
  //   imageCaptions: [
  //     "Results of search results for 'rock,' which are Stage, Nirvana, Granite, " +
  //       "Mountaineering, Kyanite, Men at Work, Jamming, Paleogne, and the Grateful Dead",
  //     "Results for for 'chocolate,' which are Pan flute, Malvales, Matzo, Merlot, Mandy Patinkin," +
  //       "Cuisine of the Midwestern United States, History of the Faroe Islands, Milk, Pennsylvania, and Lavender",
  //     "Results for 'california' search and a bit of the 'texas' search",
  //   ],
  //   caption: SearchCaption,
  // },
  // {
  //   name: "GetBlueno",
  //   git: "https://github.com/spswatron/get-blueno",
  //   deploy: "https://get-blueno.ashley-chang.me/",
  //   images: [
  //     "/images/Get-Blueno-1.png",
  //     "/images/Get-Blueno-2.png",
  //     "/images/Get-Blueno-3.png",
  //   ],
  //   imageCaptions: [
  //     "Picture of Brown University bears and president in 2048 clone game",
  //     "Game Over message with" + "even more bears in the margins of the site",
  //     "Success message for game that says 'You Brought Blueno Back!",
  //   ],
  //   caption: GetBluenoCaption,
  // },
];

export default projectsJson;
