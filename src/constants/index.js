import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  aicte,
  veristream,
  senseisearch,
  neuronchat,
  threejs,
  
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Machine Learning & Deep Learning",
    icon: web,
  },
  {
    title: "Full-Stack Development",
    icon: backend,
  },
  {
    title: "Generative AI & LLMs",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Cloud Virtual Internship",
    company_name: "AICTE",
    iconUrl: aicte,
    iconBg: "#E6DEDD",
    date: "Oct 2024 - Dec 2024",
    points: [
      "Completed AWS Academy Cloud Foundations and Cloud Architecting courses.",
      "Covered essential cloud computing concepts, AWS core services, and architecture design.",
      "Successfully passed exam to receive Cloud Virtual Internship certificate.",
    ],
  },

];


const projects = [
  {
    name: "VeriStream",
    description:
      "An AI-powered content verification tool that leverages NLP, machine learning, and knowledge graphs to analyze and validate information. It integrates Google's Fact-Checking API, Wikipedia API, and Sentence Transformers to ensure credibility, with a Next.js dashboard for visualization.",
    tags: [
      {
        name: "Google Fact-Check API",
        color: "blue-text-gradient",
      },
      {
        name: "Wikipedia API",
        color: "green-text-gradient",
      },
      {
        name: "Knowledge Graph",
        color: "pink-text-gradient",
      },
      {
        name: "Sentence Transformers",
        color: "yellow-text-gradient",
      },
      {
        name: "Scikit-learn",
        color: "purple-text-gradient",
      },
      {
        name: "NLTK",
        color: "red-text-gradient",
      },
      {
        name: "Next.js",
        color: "orange-text-gradient",
      },
    ],
    image: veristream,
    source_code_link: "https://github.com/Roshansingh9/Veristream",
  },
  {
    name: "Sensei Search",
    description:
      "A multimodal AI-powered search engine that enables users to query datasets using text, images, and voice. Built with IBM Granite models and RAG, it enhances search accuracy by integrating LLMs with external knowledge sources. It leverages IBM Watsonx.ai for intelligent responses and Neo4j for knowledge graph-based fact-checking. Designed for businesses, Sensei Search enables faster decision-making and smart information retrieval across diverse domains. The project is deployed as both a web and mobile application using Streamlit.",
    tags: [
      {
        name: "IBM Granite",
        color: "blue-text-gradient",
      },
      {
        name: "Retrieval-Augmented Generation (RAG)",
        color: "green-text-gradient",
      },
      {
        name: "Neo4j",
        color: "pink-text-gradient",
      },
      {
        name: "IBM Watsonx.ai",
        color: "yellow-text-gradient",
      },
      {
        name: "Multimodal AI",
        color: "purple-text-gradient",
      },
      {
        name: "Streamlit",
        color: "red-text-gradient",
      },
    ],
    image: senseisearch,
    source_code_link:
      "https://senseiibmgit-sy6ltck2d5gbmxl89bx9jy.streamlit.app/",
  },
  {
    name: "NeuronChat",
    description:
      "A cutting-edge AI chatbot powered by DeepSeek and Dolphin models, designed for intelligent, contextual, and dynamic conversations. NeuronChat offers multimodal interaction, supporting text and voice inputs while leveraging advanced NLP techniques. It integrates Retrieval-Augmented Generation (RAG) for more accurate responses and provides real-time, user-friendly communication via a Streamlit-based web interface.",
    tags: [
      {
        name: "DeepSeek",
        color: "blue-text-gradient",
      },
      {
        name: "Dolphin",
        color: "green-text-gradient",
      },
      {
        name: "Retrieval-Augmented Generation (RAG)",
        color: "pink-text-gradient",
      },
      {
        name: "LLM",
        color: "yellow-text-gradient",
      },
      {
        name: "Streamlit",
        color: "red-text-gradient",
      },
      {
        name: "Multimodal AI",
        color: "purple-text-gradient",
      },
    ],
    image: neuronchat,
    source_code_link: "https://github.com/Roshansingh9/NeuronChat-",
  },
];

export { services, technologies, experiences, projects };
