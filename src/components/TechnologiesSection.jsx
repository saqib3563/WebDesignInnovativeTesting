"use client";
import { useState, useEffect } from "react";
// import Image from "next/image";
import gsap from "gsap";
// import dummyImage from "@/app/(web)/assets/images/flag-img-1.svg";
import Lottie from "lottie-react";
import Android from "@/app/(web)/assets/lottie/Android.json";
import Bitcoin from "@/app/(web)/assets/lottie/Bitcoin.json";
import CSS from "@/app/(web)/assets/lottie/CSS.json";
import DynamoDB from "@/app/(web)/assets/lottie/DynamoDB.json";
import Etherium from "@/app/(web)/assets/lottie/Etherium.json";
import FireBase from "@/app/(web)/assets/lottie/Fire-base.json";
import Flutter from "@/app/(web)/assets/lottie/Flutter.json";
import HTML from "@/app/(web)/assets/lottie/HTML.json";
import Ionic from "@/app/(web)/assets/lottie/Ionic.json";
import IOSAnimation from "@/app/(web)/assets/lottie/IOS.json";
import Java from "@/app/(web)/assets/lottie/Java.json";
import JS from "@/app/(web)/assets/lottie/JS.json";
import Kotlin from "@/app/(web)/assets/lottie/Kotlin.json";
import LiteCoin from "@/app/(web)/assets/lottie/LiteCoin.json";
import MongoDB from "@/app/(web)/assets/lottie/MongoDB.json";
import MySQL from "@/app/(web)/assets/lottie/MySQL.json";
import MySSQL from "@/app/(web)/assets/lottie/MySSQL.json";
import Node from "@/app/(web)/assets/lottie/Node.json";
import Objective from "@/app/(web)/assets/lottie/Objective.json";
import Php from "@/app/(web)/assets/lottie/Php.json";
import Phython from "@/app/(web)/assets/lottie/Python.json";
import React from "@/app/(web)/assets/lottie/React.json";
import ReactNative from "@/app/(web)/assets/lottie/ReactNative.json";
import Redis from "@/app/(web)/assets/lottie/Redis.json";
import Solidity from "@/app/(web)/assets/lottie/Solidity.json";
import SQL from "@/app/(web)/assets/lottie/SQL.json";
import Stellar from "@/app/(web)/assets/lottie/Stellar.json";
import Swift from "@/app/(web)/assets/lottie/Swift.json";
import xrp from "@/app/(web)/assets/lottie/xrp.json";
import hero_bg_latest from "@/app/(web)/assets/images/Hero-latest.png";
import ScrollRevealHandler from "./ScrollRevealHandler";
import { useGSAP } from "@/hooks/useGSAP";

const TechnologiesSection = () => {
  const [activeTab, setActiveTab] = useState(1);

  useGSAP(() => {
    gsap.fromTo(
      ".tab-conlist ul",
      { opacity: 0, y: 12 },
      {
        opacity: 1,
        y: 0,
        duration: 1.35,
        ease: "power2.out",
      },
    );
  }, [activeTab]);

  return (
    <section
      className="tecno-sec"
      style={{
        backgroundImage: `url(${hero_bg_latest.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <ScrollRevealHandler />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="primary-font mb-3 text-center text-black">
              Technologies
              <br />
              We Expert
            </h2>

            {/* ===== TABS ===== */}
            <div className="tech-we-ex-menu-tabs">
              <ul>
                {[1, 2, 3, 4, 5].map((num, i) => (
                  <li key={num}>
                    <button
                      className={activeTab === num ? "active" : ""}
                      onClick={() => setActiveTab(num)}
                    >
                      {
                        [
                          "Mobile",
                          "Full Stack Development",
                          "Database",
                          "Backend",
                          "Blockchain",
                        ][i]
                      }
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* ===== CONTENT ===== */}
            <div className="tab-conlist">
              {activeTab === 1 && (
                <ul className="tab-conlist-1">
                  <li>
                    {" "}
                    <div className="tablottie">
                      <Lottie
                        animationData={IOSAnimation}
                        loop={true}
                        autoplay={true}
                      />
                      <h4>IOS</h4>
                    </div>
                  </li>
                  <li>
                    {" "}
                    <div className="tablottie">
                      <Lottie
                        animationData={Android}
                        loop={true}
                        autoplay={true}
                      />
                      <h4>Android</h4>
                    </div>
                  </li>
                  <li>
                    {" "}
                    <div className="tablottie">
                      <Lottie
                        animationData={Ionic}
                        loop={true}
                        autoplay={true}
                      />
                      <h4>Iconic</h4>
                    </div>
                  </li>
                  <li>
                    {" "}
                    <div className="tablottie">
                      <Lottie
                        animationData={Kotlin}
                        loop={true}
                        autoplay={true}
                      />
                      <h4>Kotlin</h4>
                    </div>
                  </li>
                  <li>
                    {" "}
                    <div className="tablottie">
                      <Lottie
                        animationData={Flutter}
                        loop={true}
                        autoplay={true}
                      />
                      <h4>Flutter</h4>
                    </div>
                  </li>
                  <li>
                    {" "}
                    <div className="tablottie">
                      <Lottie
                        animationData={Objective}
                        loop={true}
                        autoplay={true}
                      />
                      <h4>Objective</h4>
                    </div>
                  </li>
                  <li>
                    {" "}
                    <div className="tablottie">
                      <Lottie
                        animationData={Swift}
                        loop={true}
                        autoplay={true}
                      />
                      <h4>Swift</h4>
                    </div>
                  </li>
                  <li>
                    {" "}
                    <div className="tablottie">
                      <Lottie
                        animationData={ReactNative}
                        loop={true}
                        autoplay={true}
                      />
                      <h4>React Native</h4>
                    </div>
                  </li>
                </ul>
              )}

              {activeTab === 2 && (
                <ul className="tab-conlist-2">
                  <li>
                    {" "}
                    <div className="tablottie">
                      <Lottie
                        animationData={Phython}
                        loop={true}
                        autoplay={true}
                      />
                      <h4>Python</h4>
                    </div>
                  </li>
                  <li>
                    {" "}
                    <div className="tablottie">
                      <Lottie animationData={JS} loop={true} autoplay={true} />
                      <h4>JavaScript</h4>
                    </div>
                  </li>
                  <li>
                    {" "}
                    <div className="tablottie">
                      <Lottie
                        animationData={HTML}
                        loop={true}
                        autoplay={true}
                      />
                      <h4>HTML</h4>
                    </div>
                  </li>
                  <li>
                    {" "}
                    <div className="tablottie">
                      <Lottie animationData={SQL} loop={true} autoplay={true} />
                      <h4>SQL</h4>
                    </div>
                  </li>
                  <li>
                    {" "}
                    <div className="tablottie">
                      <Lottie animationData={CSS} loop={true} autoplay={true} />
                      <h4>CSS</h4>
                    </div>
                  </li>
                  <li>
                    {" "}
                    <div className="tablottie">
                      <Lottie
                        animationData={React}
                        loop={true}
                        autoplay={true}
                      />
                      <h4>React</h4>
                    </div>
                  </li>
                  <li>
                    {" "}
                    <div className="tablottie">
                      <Lottie
                        animationData={Java}
                        loop={true}
                        autoplay={true}
                      />
                      <h4>JAVA</h4>
                    </div>
                  </li>
                </ul>
              )}

              {activeTab === 3 && (
                <ul className="tab-conlist-3">
                  <li>
                    {" "}
                    <div className="tablottie">
                      <Lottie
                        className="lottie-purple"
                        animationData={MongoDB}
                        loop={true}
                        autoplay={true}
                      />
                      <h4>Mongo db</h4>
                    </div>
                  </li>
                  <li>
                    {" "}
                    <div className="tablottie">
                      <Lottie
                        animationData={MySQL}
                        loop={true}
                        autoplay={true}
                      />
                      <h4>Mysql</h4>
                    </div>
                  </li>
                  <li>
                    {" "}
                    <div className="tablottie">
                      <Lottie
                        animationData={MySSQL}
                        loop={true}
                        autoplay={true}
                      />
                      <h4>Mssql</h4>
                    </div>
                  </li>
                  <li>
                    {" "}
                    <div className="tablottie">
                      <Lottie
                        animationData={FireBase}
                        loop={true}
                        autoplay={true}
                      />
                      <h4>Firebase</h4>
                    </div>
                  </li>
                  <li>
                    {" "}
                    <div className="tablottie">
                      <Lottie
                        animationData={DynamoDB}
                        loop={true}
                        autoplay={true}
                      />
                      <h4>Dynamodb</h4>
                    </div>
                  </li>
                  <li>
                    {" "}
                    <div className="tablottie">
                      <Lottie
                        animationData={Redis}
                        loop={true}
                        autoplay={true}
                      />
                      <h4>Redis</h4>
                    </div>
                  </li>
                </ul>
              )}

              {activeTab === 4 && (
                <ul className="tab-conlist-4">
                  <li>
                    {" "}
                    <div className="tablottie">
                      <Lottie animationData={Php} loop={true} autoplay={true} />
                      <h4>Php</h4>
                    </div>
                  </li>
                  <li>
                    {" "}
                    <div className="tablottie">
                      <Lottie
                        animationData={Java}
                        loop={true}
                        autoplay={true}
                      />
                      <h4>JAVA</h4>
                    </div>
                  </li>
                  <li>
                    {" "}
                    <div className="tablottie">
                      <Lottie
                        className="lottie-purple"
                        animationData={Node}
                        loop={true}
                        autoplay={true}
                      />
                      <h4>Node.js</h4>
                    </div>
                  </li>
                </ul>
              )}

              {activeTab === 5 && (
                <ul className="tab-conlist-5">
                  <li>
                    {" "}
                    <div className="tablottie">
                      <Lottie
                        animationData={Etherium}
                        loop={true}
                        autoplay={true}
                      />
                      <h4>Ethereum</h4>
                    </div>
                  </li>
                  <li>
                    {" "}
                    <div className="tablottie">
                      <Lottie
                        animationData={Solidity}
                        loop={true}
                        autoplay={true}
                      />
                      <h4>Solidity</h4>
                    </div>
                  </li>
                  <li>
                    {" "}
                    <div className="tablottie">
                      <Lottie
                        animationData={Bitcoin}
                        loop={true}
                        autoplay={true}
                      />
                      <h4>Bitcoin</h4>
                    </div>
                  </li>
                  <li>
                    {" "}
                    <div className="tablottie">
                      <Lottie
                        animationData={Stellar}
                        loop={true}
                        autoplay={true}
                      />
                      <h4>Stellar</h4>
                    </div>
                  </li>
                  <li>
                    {" "}
                    <div className="tablottie">
                      <Lottie
                        className="lottie-purple"
                        animationData={Node}
                        loop={true}
                        autoplay={true}
                      />
                      <h4>Node</h4>
                    </div>
                  </li>
                  <li>
                    {" "}
                    <div className="tablottie">
                      <Lottie animationData={xrp} loop={true} autoplay={true} />
                      <h4>XRP</h4>
                    </div>
                  </li>
                  <li>
                    {" "}
                    <div className="tablottie">
                      <Lottie
                        animationData={LiteCoin}
                        loop={true}
                        autoplay={true}
                      />
                      <h4>Litecoin</h4>
                    </div>
                  </li>
                  <li>
                    {" "}
                    <div className="tablottie">
                      <Lottie
                        animationData={Bitcoin}
                        loop={true}
                        autoplay={true}
                      />
                      <h4>Bitcoin Cash</h4>
                    </div>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
