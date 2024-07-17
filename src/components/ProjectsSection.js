import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Hangman",
    description:
      "A Hangman game done in C++.",
    getImageSrc: () => require("../images/photo1.jpg"),
    url: "https://github.com/amrwaleedhelmy/Hangman",
  },
  {
    title: "MyFavoritePlants iOS App",
    description:
      "An iOS app for plant lovers developed with SwiftUI.",
    getImageSrc: () => require("../images/photo2.jpg"),
    url: "https://github.com/amrwaleedhelmy/MyFavoritePlantsiOS",
  },
  {
    title: "ML for Diabetes Prediction",
    description:
      "A ML Project about Comparing Machine Learning Algorithms Performance with CDC Questionnaire in Predicting Diabetes using Python & MATLAB.",
    getImageSrc: () => require("../images/photo3.jpg"),
    url: "https://github.com/amrwaleedhelmy/MLDiabetesPrediction",
  },
  {
    title: "Guess Game",
    description:
      "A mathematics game made with JavaFX.",
    getImageSrc: () => require("../images/photo4.jpg"),
    url: "https://github.com/amrwaleedhelmy/GuessGame",
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            url={project.url}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
