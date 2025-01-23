
import React, { useState } from "react";
// import "font-awesome/css/font-awesome.min.css";
import "./hello.css";

const Event = ({ event }) => {
  const renderDetails = (details) =>
    details && details.length > 0 ? (
      <ul>
        {details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
    ) : (
      <p>No details available.</p>
    );

    return (
      <div className="neon-container">
        <h1>{event.title}</h1>
    
        <div className="details-container">
          <h2>General Rules:</h2>
          {renderDetails(event.generalRules)}
        </div>
    
        {event.round1 && (
          <div className="details-container">
            <h2>Round 1:</h2>
            {renderDetails(event.round1)}
          </div>
        )}
    
        {event.round2 && (
          <div className="details-container">
            <h2>Round 2:</h2>
            {renderDetails(event.round2)}
          </div>
        )}
    
        {event.round3 && (
          <div className="details-container">
            <h2>Round 3:</h2>
            {renderDetails(event.round3)}
          </div>
        )}
        {event.coordinators &&(
          <div className="details-container">
            <h2>Event Co-ordinators</h2>
            {renderDetails(event.coordinators)}
           </div> 
        )}

        {/* {event.teamMembers && (
        <div className="details-container">
          <h2>Team Members:</h2>
          {event.teamMembers && event.teamMembers.length > 0 ? (
            <ul>
              {event.teamMembers.map((member, index) => (
                <li key={index}>
                  <strong>{member.name}</strong> - {member.role}
                </li>
              ))}
            </ul>
          ) : (
            <p>No team members listed.</p>
          )}
        </div>
        )}

        {event.venue && (
          <div className="details-container">
            <h2>Venue Details:</h2>
            <p>{event.venue}</p>
          </div>
        )}
    
        {event.highlights && (
          <div className="details-container">
            <h2>Event Highlights:</h2>
            {renderDetails(event.highlights)}
          </div>
        )} */}
      </div>
    );
    
};

function Rules({title,showPopup,handleRules}) {
  // Popup state
  const events = [
    {
      name: "CODERS CHEMISTRY",
      generalRules: ["Each team consists of 2 members",
                     "The competition will have 3 rounds",
                     "Programming languages allowed: Java, C, C++, and Python.",
                          
      ],
      round1: [
                "●	Duration: 15 minutes",
                "●	Mechanics:",
                "●	Team members will swap roles every 3 minutes:"
      ],
      round2: [
                "●	 Duration: 20 minutes",
                "●	3 problems would be given for 5 minutes each",
                "●	-2 points for each wrong attempt"
      ],
      round3: [
                "●	Duration: 20 minutes",
                "●	Teams will solve 2 correlated problems based on a complex algorithm.",
                "●	Synchronization and teamwork will be essential to successfully complete this round."
      ],
      coordinators:[
        "M.sowmiya-8015442451",
"Sharan yaswant -8903295484"
      ]
    },
    {
      name: "DEVELOPER'S NIGHTMARE",
      generalRules: [
                    "●	Individual participants",
                    "●	Consists of 2 rounds",
                    "●	Timings: 1hr"
      ],
      round1: [
                    "●	The source code of a website will be given.",
                    "●	Debug the errors and compile the script to run properly without any mistakes.",
                    "●	Time Duration: 25mins"
      ],
      round2: [
                    "●	The participants must test the given website and find logical errors or any potential breaking points. (Manual Testing or Testing scripts if needed)",
                    "●	These errors must be reported within the given time.",
                    "●	The participants with the most errors reported first, wins.",
                    "●	Time Duration: 25mins"
      ],
      coordinators:[
       " Vishwa prasanth-7871202909",
"Rakesh R-86818 84559"
      ]
      
    },
    {
      name: "PAPERENZA",
      generalRules: [
                    "• Theme : The Convergence of Technology and Society",
                    "• An initial Preparation time of 30 min for teams to prepare themselves for the event",
                    "• Round 1: A concise 3-minute presentation followed by a 3-minute Q&A session.",
                    "• Round 2: A detailed 5-minute presentation followed by a 3-minute Q&A session for selected finalists.",
                    "• After each presentation, the audience can vote for their favorite presenter via a polling system (using mobile apps or a website).",
                    "• The results will contribute a small percentage to the final score, encouraging presenters to engage with the audience effectively."
      ],
      coordinators:[
        "Srinithi- 76038 07975",
"Raviganesh -91507 67054"
      ]
    },
    {
      name: "FRANKENSTEIN",
      generalRules: [
                      "●	There will be 3 rounds",
                      "●	All 3 rounds will happen simultaneously",
                      "●	One member from the team will participate in each round."
      ],
      round1 :[
                      "●	This is an UI designing round.",
                      "●	Participants must design a web page based on the giventopicinFigma/Canva and provide the link to their design.", 
                      "●	The time duration will be 45 min.",
      ],
      round2: [
                      "●	It will be a decoding round.", 
                      "●	10-20 Encrypted sentences/messages must be decryptedusingthe hints given.", 
                      "●	The time duration will be 45 mins.", 
                      "●	Paper and Pen will be provided"
      ],
      round3: [
                      "●	It will be a debugging round.", 
                      "●	There will be 4 programs based on Data Structures andAlgorithms to be debugged.", 
                      "●	The time duration will be 45 mins."
      ],
      coordinators:[
        "Harshithaa RG - 6379059924",
"Greata Jansi Rani  P- 9840250127"
      ]
    },
    {
      name: "TECHNO RHYTHM",
      generalRules: [
                      "•	Each participant competes individually.",
                      "•	There will be 3 rounds in total.",
                      "•	Participants must not seek help or communicate with others during the competition.",
                      "•	Allowed programming languages are Java, C, C++, and Python.",
                      "•	No malpractice is allowed; any violation will result in disqualification.",
                      "•	Rough paper will be provided to participants for calculations and notes."
      ],
      round1: [
                      "•	Participants must identify the songs by connecting the images in the correct sequence.",
                      "•	After identifying the songs, participants must solve coding problems, with points awarded based on the number of correct answers in both image guessing and coding.",
                      "•	The total time for this round is 20 minutes."
      ],
      round2: [
                      "•	Participants will listen to three reversed songs and identify the song title and primary artist/band.",
                      "•	After the song identification, participants must solve set of programming problems.",
                      "•	To qualify for the next round, participants must meet the required thresholds in both song identification and programming within a total time of 20 minutes."
      ],
      round3: [
                      "•	Participants will answer three lyrics questions by identifying songs based on images representing parts of the songs converted English lyrics.",
                      "•	After identifying the songs, participants must solve set of programming problems, with points awarded based on the number of correct answers in both song guessing and coding.",
                      "•	The total time for this round is 20 minutes."
      ],
      coordinators:[
       " Poojaharini K [6383503203]",
"Yuvansri D [8072039244]"
      ]
    },
    {
      name: "CODE MANIA",
      generalRules: [
                      "●	Participation: The event is open to individual participants only.",
                      "●	Platform: All rounds will be conducted on the Hacker rank platform.",
                      "●	Coding Environment: Participants must use the integrated coding environment provided by Hacker rank. The use of local IDEs is strictly prohibited.",
                      "●	Scoring: Judging is based on accuracy, efficiency, and creativity, as per round-specific criteria.",
                      "●	Restrictions: No internet browsing for solutions or external help is allowed during the event.",
                      "●	Time Management: Participants must adhere to the time limits of each round."
      ],
      round1: [
                      "●	A 20-minute round that tests participants' theoretical knowledge of programming concepts, logical reasoning, and debugging.",
                      "●	Type: Multiple-choice questions (MCQs) or small code snippet analysis.",
                      "●  Focus: Programming basics, logical puzzles, and error identification.",
                      "●	Outcome: Top 50% of participants progress to Round 2."
      ],
      round2: [
                      "●	A 40-minute round designed to evaluate participants' coding and problem-solving abilities.",
                      "●	type: Solve two coding problems",
                      "●	One easy problem (basic implementation).",
                      "●	One medium problem (involving data structures or algorithms).",
                      "●	Outcome: Top 5-10 participants progress to Round 3."
      ],
      round3: [
                      "●	A 40-minute round where participants tackle a single, challenging problem or real-world scenario to showcase their creativity and coding expertise.",
                      "●	Type:",
                      "●	Advanced algorithmic problem.",
                      "●	Real-world simulation or open-ended task.",
                      "●	Focus: Judged on accuracy, efficiency, and innovation."    
      ],
      coordinators:[
        "Ilakkiya - 9342649717",
        "Sri ram - 91 63831 43386"
      ]
    },
    {
      name: "TECH TRIVIA",
      generalRules: [
                        "• EACH TEAM SHOULD CONSIST OF 2 PLAYERS.",
                        "• THERE WILL BE 3 ROUNDS.",
                        "• ALL THE 3 ROUNDS WILL BE TIMER BASED"
      ],
      round1: [
                        "• IT WILL BE A MCQ ROUND.",
                        "• QUESTIONS WILL BE BASED ON PYTHON, C, C++, JAVA.",
                        "• THE TIME DURATION FOR EACH QUESTION WILL BE 20 SECONDS."
      ],
      round2: [
                        "•	CONNECTION PICS AND CLUES WILL BE DISPLAYED THROUGH PROJECTOR.",
                        "•	QUESTIONS WILL BE BASED ON ALGORITHMS AND TECHNICAL TERMS.",
                        "•	PARTICIPANTS SHOULD ANSWER THROUGH THE CROSSWORD PATTERN WHICH IS PROVIDED IN A PAPER."
      ],
      round3: [
                        "•	One member from a team will randomly pick a piece of paper and will have up to one minute to come up with 4 to 5 clue words related to the term.",
                        "•	The other team member will then have one minute to guess the correct term using the given clues.",
                        "•	If the term is not correctly identified within the time limit, the turn ends, and no points are awarded.",
      ],
      coordinators:[
        "Subitha S - (6381878958)",
"HarinipriyadarshiniG - (8939603937)"
      ]

    },
    {
        name: "Digital Blue print",
        generalRules: [
            "The event is a fast-paced design challenge where participants must create a unique design within a limited time based on a surprise theme revealed at the start. It’s a test of creativity, originality, and design skills, allowing participants to showcase their artistic talent using their preferred design software."
        ],
        round1: [
            "●		Participation is strictly individual; collaboration or group work is not allowed.",
            "●		The theme will be revealed at the start of the event.",
            "●		Participants have 1 hour to design.",
            "●		Participants must bring their laptops with the required software installed.",
            "●		Any design software can be used (e.g., Photoshop, Canva, Figma).",
            "●		Only one design can be submitted in JPEG/PNG format (maximum 5MB).",
            "●		Only original work created during the event will be accepted.",
            "●		AI-generated references are strictly prohibited.",
            "●		Pre-made Canva templates are not allowed.",
            "●	  Late submissions will lead to disqualification."
        ]
    },
    {
        name: "Web development workshop",
        generalRules: [
            "●	Gain hands-on experience with modern web technologies, focusing on frontend and backend integration, performance optimization, and deployment strategies. Explore best practices for building scalable and responsive web applications."
        ],
        coordinators:[

        ]
    },
    {
        name: "Networking and Cybersecurity",
        generalRules: [
            "●	Understand the fundamentals of network architecture, protocols, and security measures. Learn how to protect systems from cyber threats through practical demonstrations of encryption, firewalls, and penetration testing."
        ],
        coordinators:[
          "Jawagal Srinath"
        ]
    },
    {
        name: "Video editing workshop",
        generalRules: [
            "●	Master the art of precise video editing with frame-by-frame techniques. Learn how to enhance storytelling by applying effects, transitions, and color corrections to create professional-quality videos."
        ],
        coordinators:[
          "Vikram"
        ]
    },
    {
        name: "Linux workshop",
        generalRules: [
            "●	Explore the power of Linux with hands-on exercises covering system administration, shell scripting, and open-source tools. Understand how to leverage Linux for development, security, and automation tasks."
        ],
        coordinators:[
          "Devisri"
        ]
    },
    {
        name: "BGMI",
        generalRules: [
            "●	The team captain must register with a unique team name, consisting of four members, with no substitutes allowed.",
            "●	The event will be conducted in offline mode",
            "●	Interaction among players and any hacking activities will result in the immediate disqualification of the team",
            "●	The tournament administrator will make decisions based on regional latency"
        ],
        coordinators:[
          "Karthikeyan V - 7010672268",
"V.S. Kanna - 9677044486"
        ]
    },
    {
        name: "free fire",
        generalRules: [
            "●	Players can only use smartphones to play the game",
            "●	The use of PC's, consoles , laptops, triggers or any other non-handheld devices is strictly prohibited",
            "●	Using panels or engaging in hacking will lead to team disqualification",
            "●	All players accounts must have a minimum level of 20 at the time of registration to be eligible",
            "●	Once groups are created , no new players will be added to any group",
            "●	The match format will be decided based on the registeres teams, either as a battle royale for more teams or clash squad for fewer teams"
        ],
        coordinators:[
          "SARANR - 9344588695",
"VARUNKRISHNA - 936188636"
        ]
    },
    {
        name: "valorant",
        generalRules: [
            "●	Team captain must register with a unique name",
            "●	Team size: 5 members and no substitutes",
            "●	Event is conducted in online mode",
            "●	Interaction amongother team players and hacking would ,lead to immediate disqualification of the team",
            "●	Map tool: Bind, Haven, Split, Ascent, Icebox, Breeze,Lotus, Pearl",
            "●	Tournament admin will make a decision based upon regional latency"
        ],
        coordinators:[
          "Gautam K R - 8807476568",
"V.S. Kanna - 9677044486"
        ]
    },
    {
      name: "ONE SHOT",
      description: "This is an event where the objective is to capture the best moments of the symposium, like exciting events, guest talks, or people having fun. You can take pictures, shoot short videos. Show everyone what made the day special in your own creative way by making a reel lasting under one minute. At the end of the event, the best ones will win prizes.",
      generalRules: [
                    "●	Individual participation only; group participation is not allowed.",
                    "●	All submissions must be in the form of reels.",
                    "●	All footage must be captured within the campus.",
                    "●	Participants must bring their own equipment, such as DSLR, mobile phones, or any props as per convenience.",
                    "●	Reels must not exceed 1 minute in duration.",
                    "●	All captured moments should adhere to appropriate standards and align with event decorum.",
                    "●	Original work is mandatory, and plagiarism in any form is strictly prohibited.",
                    "●	Any editing platform can be used as per your convenience, but AI video-making applications are strictly prohibited."
      ],
      coordinators: [
                    "•	Aarthi - +91 7338775537",
                    "•	Avinash Venkatraman- +91 9043694205",
                    "•	Gokul V- +91 8248316522"
      ]
    },
    {
      name: "Cyber Trial",
      description: "Cyber Trail is an exciting and intellectually stimulating event designed to challenge participants in critical thinking, cybersecurity, and problem-solving. This three-round competition will test your ability to analyze, decode, and uncover hidden clues under time constraints.",
      generalRules: [
        "●	Each team consists of 2-3 members",
        "●	The competition will have 3 rounds",
        "●	All the 3 rounds will be timer based.",
      ],
      round1: [
        "●	It will be a picture description round.",
        "●	Participants will present their ideas orally within the time limit.",
      ],
      round2: [
        "●	This is a CTF Round.",
        "●	Participants must find hidden flags within the given time limit.",
      ],
      round3: [
        "●	It will be a Decrypt the Reward round.",
        "●	Decrypt the message hidden by identifying the encryption technique within the given time limit.",
      ],
      coordinators: [
        "•	Prasath -+91 6381430314",
        "•	Sahul Hameed N- +91 9442453107",
        "•	Sandra Maria Princy - +91 7845860167"
      ]
    },
    {
      name: "GRILL & SKILL",
      description: "The Grill & Skill event is a fun and challenging competition designed to test your aptitude, coding skills, and personal strengths. With three exciting rounds, it offers a great opportunity to showcase your talents and improve through expert feedback",
      generalRules: [ 
                  "●	Each team consists of 2-3 members",
                  "●	The event will consist of 3 rounds.",
                  "●	All the 3 rounds will be timer based."
      ],
      round1: [
                "●	The round consists of 15 MCQs.",
                "●	Questions cover Aptitude and Logical Reasoning.",
                "●	Participants have 20 minutes to complete the round."
      ],
      round2: [
                "●	Solve 2 coding questions using any programming language.",
                "●	Devices will be provided at the event.",
                "●	Solutions must pass all test cases within 20 minutes"
      ],
      round3: [
                "●	Includes logical, technical puzzles, and scenario-based questions.",
                "●	Evaluated on problem-solving, clarity, and confidence.",
                "●	Feedback will be given for improvement "
      ],
      coordinators: [
                "U.K.Dhetchana- +91 8754483562",
                "Hariharan C- +91 7845725713",
                "Dhivakar- +91 6380372872"
      ]
    },
    {
      name: "BRAND O PALOOZA",
      Description:"This event is designed to challenge participants to showcase their presentation and marketing skills. Each team or individual will be given a topic on the spot, and the goal is to deliver an effective presentation that demonstrates creativity, feasibility, clarity, and marketing strategies.",
      generalRules: [
                    "●	Individual participation or group participation is allowed.",
                    "●	Groups should consist of 2-3 members.",
                    "●	Individuals will be given 2 minutes for their presentation.",
                    "●	Groups will be given 3 minutes for their presentation (time may change)",
                    "●	The topic for the presentation will be given on the spot.",
                    "●	Judging criteria will be based on creativity, feasibility, clarity, and marketing approach.",
                    "●	Prizes will be awarded to participants or teams who demonstrate the best marketing strategies and proper presentation skills."
      ],
      coordinators:[
        "Evelyn Beatrice - +91 9500191848",
        "Priyadharshini  - +91 8807791065",
        "Yohalakshmi- +91 7845844529"
      ]
    },{
      name: "BRAIN A HOLIC",
      Description:"Brainaholic is a thrilling and interactive competition designed to challenge participants' knowledge, problem-solving abilities, and teamwork through a series of engaging and diverse rounds. Combining elements of movie trivia and tech-based questions, this event offers a perfect blend of fun and intellect, making it an exciting experience for all participants.",
      generalRules: [
        "•	This event will feature questions based on movies, general knowledge (GK), technology and other exciting fun topics.",
                  "●	Each team consists of 2-3 members.",
                  "●	There will be 3 rounds in total.",
                  "●	All rounds will be timer-based."
      ],
      round1 :[
                  "●	Rapid-fire questions will be asked, and the team that answers first within the given time will earn a point."
      ],
      round2 :[
                   "●	 Crossword Puzzle.",
                   "●	Paper and pen will be provided"
      ],
      round3 :[
                    "●	Type: Multiple Choice Questions (MCQs).",
                    "●	Questions will be based on general technical knowledge",
                    "●	Time to answer each question will be 15 seconds"
      ],
      coordinators:[
        "Roshika P - +91 8667518384 ",
        "Nivendhan- +91 8248561253",
        "Monica- +91 6374977828"
      ],
    },
    {
      name: "digital Blue print",
      description:"The event is a fast-paced design challenge where participants must create a unique design within a limited time based on a surprise theme revealed at the start. It’s a test of creativity, originality, and design skills, allowing participants to showcase their artistic talent using their preferred design software.",
      
      generalRules: [
          "●	Participation is strictly individual; collaboration or group work is not allowed.",
          "●	The theme will be revealed at the start of the event.",
          "●	Participants have 1 hour to design.",
          "●	Participants must bring their laptops with the required software installed.",
          "●	Any design software can be used (e.g., Photoshop, Canva, Figma).",
          "●	Only one design can be submitted in JPEG/PNG format (maximum 5MB).",
          "●	Only original work created during the event will be accepted.",
          "●	AI-generated references are strictly prohibited.",
          "●	Pre-made Canva templates are not allowed.",
          "●	Late submissions will lead to disqualification."
      ],
      judgingCriteria:[
        "Creativity: 30%",
        "Design Aesthetics: 30%",
        "Design Aesthetics: 30%"
      ],coordinators:[
        "Harshitha K - +91 9840165112",
        "Srivatsan R - +91 7395972827",
        "Hari Mahith M - +91 9043894881"
      ]
  }
  ];

  const path = title;
//   console.log(path)
  const filteredEvent = events.find(
    (event) => event?.name?.toLowerCase() ===  (path?.toLowerCase() || '').trim()
  );
  const event1 = filteredEvent;

  return (
    <div className="rules">
  {/* <div className="back-and-title">
    <i className="fa fa-arrow-left back-icon fa-2x"></i>
  </div> */}

  {/* Title always stays on top */}
  {/* <div className="titleSponcer">
    <h1 data-text="TITLESPONCER">EVENT DETAILS</h1>
  </div> */}

  {/* <div className="button-container">
    <button className="neon-button" onClick={handleRules(showPopup)}>
      Info
    </button>
  </div> */}

  {/* Apply blur to background */}
  {/* {showPopup && <div className="blur-background"></div>} */}

  {/* Popup */}
  {showPopup && (
    <div className="popup-overlay">
      <div className="popup">
        <i className="fa fa-times close-icon" ></i>
        {filteredEvent ? <><Event event={event1} /></> : <p>Rules will be Updated shortly!!!</p>}

        {/* Click Me button inside the container */}
        <div className="button-container click-me-button">
          <button className="btn" onClick={()=>{handleRules()}}>Close</button>
        </div>
      </div>
    </div>
  )}
</div>
  )
}

export default Rules;
