// Bio.jsx
import * as React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

const Bio = () => {
  const [activeSection, setActiveSection] = React.useState(null);

  React.useEffect(() => {
    const handleScroll = () => {
      const aboutMeSection = document.getElementById("about-me-section");
      const educationSection = document.getElementById("education-section");
      const projectsSection = document.getElementById("projects-section");
      const technicalSkillsSection = document.getElementById("technical-skills-section");

      const scrollPosition = window.scrollY + window.innerHeight * 0.5;

      if (aboutMeSection && scrollPosition < aboutMeSection.offsetTop) {
        setActiveSection(null);
      } else if (aboutMeSection && educationSection && scrollPosition >= aboutMeSection.offsetTop && scrollPosition < educationSection.offsetTop) {
        setActiveSection("about-me");
      } else if (educationSection && projectsSection && scrollPosition >= educationSection.offsetTop && scrollPosition < projectsSection.offsetTop) {
        setActiveSection("education");
      } else if (projectsSection && technicalSkillsSection && scrollPosition >= projectsSection.offsetTop && scrollPosition < technicalSkillsSection.offsetTop) {
        setActiveSection("projects");
      } else if (technicalSkillsSection && scrollPosition >= technicalSkillsSection.offsetTop) {
        setActiveSection("technical-skills");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      sx={{
        "&.MuiBox-root": { display: "flex", flexDirection: "column" }
      }}
    >
      <Typography
            id="about-me-section"
            variant="h4"
            sx={{
                fontFamily: "montserrat",
                fontWeight: 600,
                margin: 1,
                color: "black",
                textAlign: "center",
                position: "relative",
                display: "inline-block",
                padding: 2,
                textDecoration: activeSection === "about-me" ? "underline" : "none"
            }}
        >
            <span className="middle-out">About Me</span>
      </Typography>

      <Typography
            variant="h6"
            sx={{
                fontFamily: "playfair display",
                fontWeight: 300,
                margin: (1, 0),
                color: "black",
                textAlign: "center",
            }}
        >
                Hey, I'm Quinn.
      </Typography>

      <Typography
            variant="h6"
            sx={{
                fontFamily: "playfair display",
                fontWeight: 300,
                margin: (1, 0),
                color: "black",
                textAlign: "center",
            }}
        >
                I am an incoming Product Support specialist intern at Garmin for their golf division.
      </Typography>

      <Typography
            variant="h6"
            sx={{
                fontFamily: "playfair display",
                fontWeight: 300,
                margin: (1, 0),
                color: "black",
                textAlign: "center",
            }}
        >
                I am passionate about technology and enjoy learning new things in my free time.
      </Typography>

      <Typography
            id="education-section"
            variant="h4"
            sx={{
                fontFamily: "montserrat",
                fontWeight: 600,
                margin: 1,
                color: "black",
                textAlign: "center",
                position: "relative",
                display: "inline-block",
                padding: 2,
                textDecoration: activeSection === "education" ? "underline" : "none"
            }}
        >
            <span className="middle-out">Education</span>
      </Typography>

      <Typography
            variant="h6"
            sx={{
                fontFamily: "playfair display",
                fontWeight: 300,
                margin: (1, 0),
                color: "black",
                textAlign: "center",
            }}
        >
                I am currently a sophomore at the University of Kansas studying Computer Science.
        </Typography>

      <Typography
            variant="h6"
            sx={{
                fontFamily: "playfair display",
                fontWeight: 300,
                margin: (1, 0),
                color: "black",
                textAlign: "center",
            }}
        >
                I am a member of the KU Association for Computing Machinery Club.
      </Typography>

      <Typography
            variant="h6"
            sx={{
                fontFamily: "playfair display",
                fontWeight: 300,
                margin: (1, 0),
                color: "black",
                textAlign: "center",
            }}
        >
                Expected graduation date: May 2027
      </Typography>

      <Typography
            id="projects-section"
            variant="h4"
            sx={{
                fontFamily: "montserrat",
                fontWeight: 600,
                margin: 1,
                color: "black",
                textAlign: "center",
                position: "relative",
                display: "inline-block",
                padding: 2,
                textDecoration: activeSection === "projects" ? "underline" : "none"
            }}
        >
            <span className="middle-out">Projects</span>
      </Typography>

      <Typography
            variant="h5"
            sx={{
                fontFamily: "playfair display",
                fontWeight: 550,
                color: "black",
                margin: (1, 0),
                textAlign: "center",
            }}
        >
                Real-Time Typing Evaluator
      </Typography>

      <Typography
            variant="h6"
                sx={{
                fontFamily: "playfair display",
                fontWeight: 300,
                margin: (1, 0),
                color: "black",
                textAlign: "center",
            }}
        >
                Engineered a typing test application with adaptive difficulty levels for dynamic user experience.
      </Typography>

      <Typography
            variant="h6"
            sx={{
                fontFamily: "playfair display",
                fontWeight: 300,
                margin: (1, 0),
                color: "black",
                textAlign: "center",
            }}
        >
                Implemented real-time Words Per Minute (WPM) calculation for immediate and accurate feedback.
      </Typography>

      <Typography
            variant="h6"
            sx={{
                fontFamily: "playfair display",
                fontWeight: 300,
                margin: (1, 0),
                color: "black",
                textAlign: "center",
            }}
        >
                Utilized multithreading for optimal responsiveness and smooth user interactions.
      </Typography>

      <Typography
            variant="h5"
            sx={{
                fontFamily: "playfair display",
                fontWeight: 550,
                color: "black",
                margin: (1, 0),
                textAlign: "center",
            }}
        >
                BudgetBro App
      </Typography>

      <Typography
            variant="h6"
            sx={{
                fontFamily: "playfair display",
                fontWeight: 300,
                margin: (1, 0),
                color: "black",
                textAlign: "center",
            }}
        >
                Developed 'Budget Bro' app in Python with tkinter GUI for expense tracking and financial management.
      </Typography>

      <Typography
            variant="h6"
            sx={{
                fontFamily: "playfair display",
                fontWeight: 300,
                margin: (1, 0),
                color: "black",
                textAlign: "center",
            }}
        >
                Incorporated matplotlib for pie chart expense visualization, improving user insight into spending patterns.
      </Typography>

      <Typography
            variant="h6"
            sx={{
                fontFamily: "playfair display",
                fontWeight: 300,
                margin: (1, 0),
                color: "black",
                textAlign: "center",
            }}
        >
                Enabled real-time updates for expense categories and total balance, offering users instant financial feedback.
        </Typography>

        <Typography
            variant="h5"
            sx={{
                fontFamily: "playfair display",
                fontWeight: 550,
                color: "black",
                margin: (1, 0),
                textAlign: "center",
            }}
        >
                Notes App
        </Typography>

        <Typography
            variant="h6"
            sx={{
                fontFamily: "playfair display",
                fontWeight: 300,
                margin: (1, 0),
                color: "black",
                textAlign: "center",
            }}
        >
                Developed a versatile Notes App using Python's Tkinter library for GUI.
        </Typography>

        <Typography
            variant="h6"
            sx={{
                fontFamily: "playfair display",
                fontWeight: 300,
                margin: (1, 0),
                color: "black",
                textAlign: "center",
            }}
        >
                Created a multi-window interface allowing users to enter, display, and categorize notes.
        </Typography>

        <Typography
            variant="h6"
            sx={{
                fontFamily: "playfair display",
                fontWeight: 300,
                margin: (1, 0),
                color: "black",
                textAlign: "center",
            }}
        >
                Incorporated dynamic color-coding for notes, enhancing user experience and organization.
        </Typography>



        <Typography
            id="technical-skills-section"
            variant="h4"
            sx={{
                fontFamily: "montserrat",
                fontWeight: 600,
                margin: 1,
                color: "black",
                textAlign: "center",
                position: "relative",
                display: "inline-block",
                padding: 2,
                textDecoration: activeSection === "technical-skills" ? "underline" : "none"
            }}
        >
        <span className="middle-out">Technical Skills</span>
        </Typography>

        <Typography
            variant="h6"
            sx={{
                fontFamily: "playfair display",
                fontWeight: 300,
                margin: (1, 0),
                color: "black",
                textAlign: "center",
            }}
        >
            <span style={{ fontWeight: 600 }}>Languages:</span> Python, JavaScript, HTML, CSS
        </Typography>

        <Typography
            variant="h6"
            sx={{
                fontFamily: "playfair display",
                fontWeight: 300,
                margin: (1, 0),
                color: "black",
                textAlign: "center",
            }}
        >
            <span style={{ fontWeight: 600 }}>Professional Tools:</span> Visual Studio Code, Github, Git
      </Typography>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </Box>
  );
};

export default Bio;