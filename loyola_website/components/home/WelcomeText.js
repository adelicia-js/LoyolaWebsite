import React from "react";
import { Oswald, Inter } from "next/font/google";

const OswaldBold = Oswald({ weight: "700", subsets: ["latin"] });
const inter = Inter({ weight: "500", subsets: ["latin"] });
const WelcomeText = () => {
  return (
    <div className=" text-justify text-black lg:px-48 px-8 py-8 font-medium text-lg leading-relaxed bg-slate-300 ">
      <h1
        className={`text-center text-5xl font-bold pb-5 text-navbar-theme ${OswaldBold.className}`}
      >
        WELCOME TO LOYOLA COLLEGE, BENGALURU, INDIA
      </h1>
      <p className={`${inter.className} text-justify pt-2 pb-4 font-semibold`}>
        In the campus of Mount St Joseph, the first educational institution was
        Loyola School in 1982 for the economically poor students of the
        neighbourhood. In 1989 Loyola Primary and Higher Primary school were
        established. In 1992 another institution that was added was Loyola
        Industrial Training Institute, where poor students are given training in
        fitter trade, motor mechanic, driving, electrical maintenance, carpentry
        etc.Hundreds of students have been given training to make a living
        through these trades and have excelled in society. In 2008 Loyola High
        School was upgraded to Loyola Composite Pre-University College. Today
        the Pre-University College has a strength of 600 students with Science,
        Commerce and Arts streams.
      </p>
      <p className={`${inter.className} text-justify py-4 font-semibold`}>
        After several years of discernments and discussions the Jesuits of
        Karnataka Jesuit Province finally decided to start a degree College in
        the name of their Founder, St Ignatius Loyola. The Loyola Degree College
        started functioning from the academic year 2017-18 with B. Com and BA
        (Journalism,Communicative Englishand Psychology) courses. The College is
        affiliated to Bangalore University. The College is a unit of BANGLORE
        JESUIT EDUCATIONAL SOCIETY, Jesuit Nivas, Museum Road, Bengaluru-560025.
        The Campus has a spacious building, a large playground with facilities
        for cricket, basketball, volley ball and other sports and games.
      </p>
    </div>
  );
};

export default WelcomeText;
