import React from "react";

function Resume() {
  return (
    <div>
      <div className="text-center">
        <a
          href="/assets/pdf/Brooke Paglia Resume.pdf"
          target="_blank"
          className="hover:underline text-lg">
          Download my resume
        </a>
      </div>
      <div className="my-4">
        <h2 className="text-xl font-extrabold text-center">Summary</h2>
        <p>
          Full stack web developer with extensive experience in Information
          Technology and a lifetime dedication to learning, growing, and
          improving. Effective at troubleshooting and problem-solving. Looking
          for new challenges and opportunities to grow and hone skills.
        </p>
      </div>
      <div className="my-4">
        <h2 className="text-xl font-extrabold text-center">Technical Skills</h2>
        <p>
          <span>Frontend:</span> HTML5, CSS, TailwindCSS, Bootstrap, Javascript,
          jQuery, AJAX
        </p>
        <p>
          <span>Backend:</span> MySQL, MongoDB, Express, ReactJS, Node,
          Handlebars, Firebase
        </p>
      </div>
      <div className="my-4">
        <h2 className="text-xl font-extrabold text-center">Experience </h2>
        <div className="py-2">
          <div className="w-full relative">
            Orlando Health <span className="absolute right-0">Orlando, FL</span>
          </div>
          <div className="relative">
            <span className="italic">Solutions Developer</span>
            <span className="absolute right-0">October 2019</span>
          </div>
          <ul className="list-disc ml-4">
            <li>
              Present Key project resource for providing developer, integration,
              and related services on projects
            </li>
            <li>
              Design, implement, and maintain logical task automation for
              incoming and outbound data
            </li>
            <li>
              Logically comprehend technical and/or functional manuals and
              instructions
            </li>
            <li>
              Research, build, and deploys software and software integrations
              through APIs with minimal supervision
            </li>
            <li>
              Creates and maintains software documentation throughout the
              lifecycle of supported applications and integrations
            </li>
          </ul>
        </div>
        <div className="py-2">
          <div className="w-full relative">
            <span className="italic">Systems Administrator</span>
            <span className="absolute right-0">March 2014 - October 2019</span>
          </div>
          <ul className="list-disc ml-4">
            <li>
              Key project resource for providing developer, integration, and
              related services on projects Provided end user training and
              support for non-clinical hospital staff
            </li>
            <li>
              Supported team and end users with complex issue research and
              resolution
            </li>
          </ul>
        </div>
        <div className="py-2">
          <div className="w-full relative">
            <span className="italic">Technical Specialist</span>
            <span className="absolute right-0">April 2012 - March 2014</span>
          </div>
          <ul className="list-disc ml-4">
            <li>
              Coordinated helpdesk and ticketing system, providing PC and Mac
              support via phone, email, RDP, and in-person visits
            </li>
          </ul>
        </div>
      </div>
      <div className="my-4">
        <h2 className="font-extrabold text-xl text-center">Education </h2>
        <p>
          University of Central Florida: Full Stack Web Development Certificate,
          Orlando, FL
          <br />
          <span className="italic">Expected Graduation: June 2022 </span>
        </p>
        <p>
          Valencia College, Orlando, FL
          <br />
          <span className="italic">
            Completed 39 credits towards AS in Digital Media Technology
          </span>
        </p>
      </div>
    </div>
  );
}

export default Resume;
