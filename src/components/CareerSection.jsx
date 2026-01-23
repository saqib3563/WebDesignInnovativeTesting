"use client";
import { instrument_sans } from "@/app/(web)/assets/fonts/custom";

const terminalData = [
  {
    title: "bash",
    lines: [
      { type: "cmd", text: "$ Development" },
      { text: "Be part of our engineering team that designs, builds, and automates secure IT environments. Whether you’re working on cloud, Active Directory, AI, or automation, you’ll help deliver solutions trusted by thousands of clients. We offer remote work options, modern toolsets, and a collaborative team where your skills grow with every project." },
      { type: "cmd", text: "$" },
    ],
  },
  {
    title: "bash",
    lines: [
      { type: "cmd", text: "$ Infrastructure" },
      { text: "Keep business systems running smoothly as part of our infrastructure and support team. From endpoint management to help desk operations, you’ll play a vital role in daily IT performance. Enjoy flexible work hours, hybrid/remote setup, ongoing training, and a team-first environment that values your contributions." },
      { type: "cmd", text: "$" },
    ],
  },
  {
    title: "bash",
    lines: [
      { type: "cmd", text: "$ Consulting" },
      { text: "If you’re a recruiter, consultant, or client strategist, this is where you drive growth and partnerships. You’ll connect clients with expert solutions and talent while enjoying performance-based rewards, work-from-anywhere flexibility, and a strong internal support structure to help you succeed." },
      { type: "cmd", text: "$" },
    ],
  },
];


const CareerSection = () => {
  return (
    <section className="padd-y padd-x career-sec">
      <div className="container-fluid">
        <h2 className="primary-font mb-3 text-center">
          Your Next Role Starts Here
        </h2>

        <div className="row mt-5">
          {terminalData.map((terminal, index) => (
            <div className="col-md-4" key={index}>
              <aside className="terminal-box">
                <div className="terminal-header">
                  <div className="terminal-dots">
                    <span className="dot red"></span>
                    <span className="dot yellow"></span>
                    <span className="dot green"></span>
                  </div>
                  <p className="terminal-title">{terminal.title}</p>
                </div>

                <div className="terminal-body">
                  {terminal.lines.map((line, i) => (
                    <p key={i} className={line.type}>
                      {line.text}
                    </p>
                  ))}
                </div>
              </aside>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerSection;
