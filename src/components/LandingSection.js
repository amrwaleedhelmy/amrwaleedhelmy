import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Heading, Text } from "@chakra-ui/react";

const greeting = "Hello, I am Amr!";
const bio1 = "An enthusiastic Computer Engineer whose main goal is to apply all I learnt in college in my work and to prove that I can fit in this career.";
const bio2 = "I am skilled in computer programming, mathematics, circuit analysis, and I have a background in computer and electrical engineering.";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
    >
    <span role="img" aria-label="hello" style={{ marginLeft: '10px', fontSize: '24px' }}>👋</span>
    <Heading>{greeting}</Heading>
    <Text>{bio1}</Text>
    <Text>{bio2}</Text>
  </FullScreenSection>
);

export default LandingSection;
