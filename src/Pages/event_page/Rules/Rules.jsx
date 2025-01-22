
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
                "Duration: 15 minutes",
                "Mechanics:",
                "Team members will swap roles every 3 minutes:"
      ],
      round2: [
                " Duration: 20 minutes",
                "Team will be given 3 programming problems to solve",
                "Each problem has specific constraints:."
      ],
      round3: [
                "Duration: 20 minutes",
                "Teams will solve 2 correlated problems based on a complex algorithm.",
                "Synchronization and teamwork will be essential to successfully complete this round."
      ],
    },
    {
      name: "Cyber Trial",
      generalRules: [
                    "•	Each team consists of 2-3 members",
                    "•	The competition will have 3 rounds",
                    "•	All the 3 rounds will be timer based."
      ],
      round1: [
                    "•	It will be a picture description round.",
                    "•	Participants will present their ideas orally within the time limit. "
      ],
      round2: [
                    "•	This is a CTF Round.",
                    "•	Participants must find hidden flags within the given time limit."
      ],
      round3: [
                    "•	It will be a Decrypt the Reward round.",
                    "•	Decrypt the message hidden by identifying the encryption technique within the given time limit."
      ]
    },
    {
      name: "GRILL & SKILL",
      generalRules: [
                  "•	•	Each team consists of 2-3 members",
                  "•	The event will consist of 3 rounds.",
                  "•	All the 3 rounds will be timer based."
      ],
      round1: [
                "•	The round consists of 15 MCQs.",
                "•	Questions cover Aptitude and Logical Reasoning.",
                "•	Participants have 20 minutes to complete the round."
      ],
      round2: [
                "•	Solve 2 coding questions using any programming language.",
                "•	Devices will be provided at the event.",
                "•	Solutions must pass all test cases within 20 minutes"
      ],
      round3: [
                "•	Includes logical, technical puzzles, and scenario-based questions.",
                "•	Evaluated on problem-solving, clarity, and confidence.",
                "•	Feedback will be given for improvement "
      ],
    },
    {
      name: "BRAIN A HOLIC",
      generalRules: [
                  "•	Each team consists of 2-3 members.",
                  "There will be 3 rounds in total.",
                  "All rounds will be timer-based."
      ],
      round1 :[
                  "Type: Rapid-Fire Round",
                  "Questions will be a based on movies",
                  "Each question will be displayed for 10 seconds"
      ],
      round2 :[
                   "Type: Crossword Puzzle.",
                   "Paper and pen will be provided"
      ],
      round3 :[
                    "Type: Multiple Choice Questions (MCQs).",
                    "Questions will be based on general technical knowledge",
                    "Time to answer each question will be 15 seconds"
      ]
    },
    {
      name: "ONE SHOT",
      generalRules: [
                    "1.	Individual participation only; group participation is not allowed.",
                    "2. All submissions must be in the form of reels.",
                    "3.	All footage must be captured within the campus.",
                    "4.	Participants must bring their own equipment, such as DSLR, mobile phones, or any props as per convenience.",
                    "5.	Reels must not exceed 1 minute in duration.",
                    "6.	All captured moments should adhere to appropriate standards and align with event decorum.",
                    "7.	Original work is mandatory, and plagiarism in any form is strictly prohibited.",
                    "8.	Any editing platform can be used as per your convenience, but AI video-making applications are strictly prohibited."
      ]
    },
    {
      name: "BRAND O PALOOZA",
      generalRules: [
                    "1. Individual participation or group participation is allowed.",
                    "2. Groups should consist of 2-3 members.",
                    "3. Individuals will be given 2 minutes for their presentation.",
                    "4. Groups will be given 3 minutes for their presentation (time may change)",
                    "5. The topic for the presentation will be given on the spot.",
                    "6. Judging criteria will be based on creativity, feasibility, clarity, and marketing approach.",
                    "7. Prizes will be awarded to participants or teams who demonstrate the best marketing strategies and proper presentation skills."
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
      
    },
    {
      name: "PAPERENZA",
      generalRules: [
                    "• An initial Preparation time of 30 min for teams to prepare themselves for the event",
                    "• Round 1: A concise 3-minute presentation followed by a 3-minute Q&A session.",
                    "• Round 2: A detailed 5-minute presentation followed by a 3-minute Q&A session for selected finalists.",
                    "• After each presentation, the audience can vote for their favorite presenter via a polling system (using mobile apps or a website).",
                    "• The results will contribute a small percentage to the final score, encouraging presenters to engage with the audience effectively."
      ],
    },
    {
      name: "FRANKENSTEIN",
      generalRules: [
                      " Each team should consist of 3 members.  There will be 3 rounds",
                      " All 3 rounds will happen simultaneously",
                      " One member from the team will participate in each round."
      ],
      round1 :[
                      " This is an UI designing round.",
                      " Participants must design a web page based on the giventopicinFigma/Canva and provide the link to their design.", 
                      " The time duration will be 45 min.",
                      " The total score for this round will be"
      ],
      round2: [
                      " It will be a decoding round.", 
                      " 10-20 Encrypted sentences/messages must be decryptedusingthe hints given.", 
                      " The time duration will be 45 mins.", 
                      " Paper and Pen will be provided"
      ],
      round3: [
                      " It will be a debugging round.", 
                      " There will be 4 programs based on Data Structures andAlgorithms to be debugged.", 
                      " The time duration will be 45 mins."
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
      ]
    },
    {
      name: "CODE MANIA",
      generalRules: [
                      "1. Participation: The event is open to individual participants only.",
                      "2. Platform: All rounds will be conducted on the Hacker rank platform.",
                      "3. Coding Environment: Participants must use the integrated coding environment provided by Hacker rank. The use of local IDEs is strictly prohibited.",
                      "4. Scoring: Judging is based on accuracy, efficiency, and creativity, as per round-specific criteria.",
                      "5. Restrictions: No internet browsing for solutions or external help is allowed during the event.",
                      "6. Time Management: Participants must adhere to the time limits of each round."
      ],
      round1: [
                      "A 15-minute round that tests participants' theoretical knowledge of programming concepts, logical reasoning, and debugging.",
                      "• Type: Multiple-choice questions (MCQs) or small code snippet analysis.",
                      "• Focus: Programming basics, logical puzzles, and error identification.",
                      "• Outcome: Top 50% of participants progress to Round 2."
      ],
      round2: [
                      "A 60-minute round designed to evaluate participants' coding and problem-solving abilities.",
                      "•type: Solve two coding problems",
                      "o One easy problem (basic implementation).",
                      "o One medium problem (involving data structures or algorithms).",
                      "• Outcome: Top 5-10 participants progress to Round 3."
      ],
      round3: [
                      "A 30-minute round where participants tackle a single, challenging problem or real-world scenario to showcase their creativity and coding expertise.",
                      "• Type:",
                      "o Advanced algorithmic problem.",
                      "o Real-world simulation or open-ended task.",
                      "• Focus: Judged on accuracy, efficiency, and innovation."    
      ]
    },
    {
      name: "TECH TRIVIA",
      generalRules: [
                        "• EACH TEAM SHOULD CONSIST OF 2 MEMBERS.",
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
                        "•	A BOWL WILL CONTAIN MANY PIECES OF PAPER, EACH FOLDED AND INSCRIBED WITH A TECH TERM",
                        "•	ONE PARTICIPANT FROM A TEAM WILL BE ALLOWED TO PICK ONE AND CAN TAKE UPTO ONE MINUTE TO THINK OF 4 TO 5 CLUE WORDS RELATED TO THE TERM.",
                        "•	THE OTHER TEAM MEMBER WILL THEN BE GIVEN ONE MINUTE TO IDENTIFY THE CORRECT TERM USING THOSE CLUE WORDS.",
                        "•	IF HE/SHE FAILS TO FIND THE CORRECT TERM, CLUE WORDS WILL BE PASSED TO OTHER TEAMS AND IF ANOTHER TEAM SUCCESSFULLY IDENTIFIES THE TERM, BONUS POINTS WILL BE PROVIDED."
      ]
    },
    {
        name: "Digital Blue print",
        generalRules: [
            "The event is a fast-paced design challenge where participants must create a unique design within a limited time based on a surprise theme revealed at the start. It’s a test of creativity, originality, and design skills, allowing participants to showcase their artistic talent using their preferred design software."
        ],
        round1: [
            "1.	Participation is strictly individual; collaboration or group work is not allowed.",
            "2.	The theme will be revealed at the start of the event.",
            "3.	Participants have 1 hour to design.",
            "4.	Participants must bring their laptops with the required software installed.",
            "5.	Any design software can be used (e.g., Photoshop, Canva, Figma).",
            "6.	Only one design can be submitted in JPEG/PNG format (maximum 5MB).",
            "7.	Only original work created during the event will be accepted.",
            "8.	AI-generated references are strictly prohibited.",
            "9.	Pre-made Canva templates are not allowed.",
            "10.	Late submissions will lead to disqualification."
        ]
    },
    {
        name: "Web development workshop",
        generalRules: [
            "Gain hands-on experience with modern web technologies, focusing on frontend and backend integration, performance optimization, and deployment strategies. Explore best practices for building scalable and responsive web applications."
        ]
    },
    {
        name: "Networking and Cybersecurity",
        generalRules: [
            "Understand the fundamentals of network architecture, protocols, and security measures. Learn how to protect systems from cyber threats through practical demonstrations of encryption, firewalls, and penetration testing."
        ]
    },
    {
        name: "Video editing workshop",
        generalRules: [
            "Master the art of precise video editing with frame-by-frame techniques. Learn how to enhance storytelling by applying effects, transitions, and color corrections to create professional-quality videos."
        ]
    },
    {
        name: "Linux workshop",
        generalRules: [
            "Explore the power of Linux with hands-on exercises covering system administration, shell scripting, and open-source tools. Understand how to leverage Linux for development, security, and automation tasks."
        ]
    },
    {
        name: "BGMI",
        generalRules: [
            "1. The team captain must register with a unique team name, consisting of four members, with no substitutes allowed.",
            "2. The event will be conducted in offline mode",
            "3. Interaction among players and any hacking activities will result in the immediate disqualification of the team",
            "4. The tournament administrator will make decisions based on regional latency"
        ]
    },
    {
        name: "free fire",
        generalRules: [
            "1. Players can only use smartphones to play the game",
            "2. The use of PC's, consoles , laptops, triggers or any other non-handheld devices is strictly prohibited",
            "3. Using panels or engaging in hacking will lead to team disqualification",
            "4. All players accounts must have a minimum level of 20 at the time of registration to be eligible",
            "5. Once groups are created , no new players will be added to any group",
            "6. The match format will be decided based on the registeres teams, either as a battle royale for more teams or clash squad for fewer teams"
        ]
    },
    {
        name: "valorant",
        generalRules: [
            "1. Team captain must register with a unique name",
            "2. Team size: 5 members and no substitutes",
            "3. Event is conducted in online mode",
            "4. Interaction amongother team players and hacking would ,lead to immediate disqualification of the team",
            "5. Map tool: Bind, Haven, Split, Ascent, Icebox, Breeze,Lotus, Pearl",
            "6. Tournament admin will make a decision based upon regional latency"
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
        {filteredEvent ? <Event event={event1} /> : <p>Rules will be Updated shortly!!!</p>}

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
