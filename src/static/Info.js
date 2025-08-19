import baseball from '../assets/img/baseball.png';
import chimpchat from '../assets/img/chimpchat.png';
import alarmrat from '../assets/img/alarm-rat.png';
import lights from '../assets/img/lights.png';
import testing from '../assets/img/testing.png';

export const personalDescription = "Hi, I'm Sophia Ruduke. I just received my Bachelor of Science with Specialization in Computing Science. I am a software developer based in Edmonton, Alberta, but I'm willing to move around! I am passionate about DevOps and enjoy building automated solutions with interactive user interfaces for industry pipelines and processes. My enthusiasm for artificial intelligence drives me to leverage AI for anomaly detection and system control in various industries. I am always eager to learn new technologies and continuously improve my skills."

export const skillsDescription = "I have developed a robust skill set through my education and professional experience. My strengths lie in problem-solving, system design, and full-stack development. I have hands-on experience with automation tools like Ansible and Docker, as well as proficiency in Java and Python for software development. My work as a systems integrator has enhanced my abilities in version control, database management, and DevOps practices. I am dedicated to continuous learning and applying my knowledge to create efficient and innovative solutions."

export const projects = [
        {id: 1,
        title: 'Baseball App',
        image: baseball,
        description: 'This app was built as a project in Ignition to showcase how SCADA software can be used beyond industry. It is heavily influenced by Game Changer, as it features a live game feed, realtime game scoring, player stats and management, and a game schedule. The app is also integrated with an OBS overlay to display a scoreboard on streams, powered by the realtime game scoring. The motivation to build this app was to provide an easier place for family and friends to view baseball games, since this allows for games to be streamed on available platforms such as Youtube. As well, it provides a platform for coaches to manage their teams, players, and games while keeping families in the loop.',
        technologies: ['Ignition', 'MariaDB', 'SQL', 'Docker', 'Jython', 'OBS'],
        modalImages: [baseball]},

        {id: 2,
        title: 'Alarm Rationalization',
        image: alarmrat,
        description: "Alarm rationalization is the process of reviewing and optimizing alarms in an industrial system to ensure each alarm is necessary, prioritized, and actionable, thereby reducing operator overload and improving overall safety and efficiency. I reworked a Java module for Ignition and built an Ignition Perspective Project to assist in the alarm rationalization process and adhere to the ISA 18.2 and IEC62682 directives. It has automatic SQL database deployment to manage alarm history and version control. It ensures that only authorized engineers or administrators can make changes, with unauthorized modifications being easily detected. The tool integrates with Excel using Apache POI to generate custom-built sheets based on the alarm philosophy, enabling the templating of the alarm configuration process and significantly reducing manual entry time. The tool also allows customization and modularization of a company's alarm philosophy while monitoring and optimizing alarm performance with developed KPIs.",
        technologies: ['Ignition', 'SQL', 'Docker', 'Excel', 'Jython'],
        modalImages: [alarmrat]},

        {id: 3,
        title: 'ChimpChat',
        image: chimpchat,
        description: 'Developed a centralized social media server where users can like, comment, and share posts with friends, and interact with users on other platforms through an API. I fully implemented the REST API, using Swagger for documentation, and served as the primary frontend and backend designer. Leading a team of five, I employed agile practices and code reviews, coordinating frequently and delegating tasks. I also implemented a multi-threaded caching system to enhance response times and reduce network congestion, configured and hosted development and production Postgres databases on a local Linux server, and managed the deployment of the production server.',
        technologies: ['Django', 'HTML/CSS/JavaScript', 'Postgres', 'AJAX', 'Swagger'],
        modalImages: [chimpchat]},

        {id: 4,
        title: 'Automated Testing Suite',
        image: testing,
        description: 'An IoT smart home application built in Java, TartanHome, provides automated control over heating/cooling, humidity, lights, locks, and alarms. To address the lack of a test suite, my partner and I implemented a CI/CD pipeline using GitHub Actions and various code quality tools. The CI pipeline included building the Java application with Gradle, conducting static analysis with Error Prone, PMD, and SpotBugs, and running unit and integration tests with JUnit5 and Mockito. It also generated mutation test reports with Pitest, code coverage reports with Jacoco, technical debt reports with SonarQube, and performed system tests with Pytest. The CD pipeline, triggered only if the CI pipeline passes without errors, builds and publishes a Docker image to the local registry, which the production server pulls to host the latest changes.',
        technologies: ["GitHub Actions", "Docker", "Cybera Rapid Access Cloud", "SonarQube", "JUnit5", "Mockito", "Jacoco", "Pitest", "PMD", "SpotBugs", "Error Prone", "PyTest"],
        modalImages: [testing]},

        {id: 5,
        title: 'Arduino LED Light Controller',
        image: lights,
        description: 'Developed a remote-controlled LED strip system using an Arduino Uno WiFi, enabling control via a web application on any device connected to the local network. The hardware design included logic MOSFETs and resistors for each color channel to ensure efficient operation. The software featured a REST API on the Arduino for controlling the LED strip, allowing functions like turning lights on/off, changing colors, and adjusting modes through the web app. Key features included remote control for enhanced convenience and an alarm integration that mimics a sunrise effect, gradually increasing light intensity before the set alarm time for a gentle wake-up experience.',
        technologies: ["Arduino programming", "REST API development", "React"],
        modalImages: [lights]}
    ]