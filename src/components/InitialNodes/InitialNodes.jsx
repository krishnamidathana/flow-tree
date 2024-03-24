import b2c1Image from "../../images/b2c1.jpg";
import b2c2Image from "../../images/b2c2.jpg";
import dealershipImage from "../../images/dealership.jpg";
import externalImage from "../../images/external.jpg";
import hardwareImage from "../../images/hardware.jpg";
import internalImage from "../../images/internal.jpg";
import interviewImage from "../../images/interview.jpg";
import materialImage from "../../images/material.jpg";
import onlineCoustomerImage from "../../images/onlinecoustomer.jpg";
import onlineSalesImage from "../../images/onlinesales.jpg";
import prdImage from "../../images/prd.jpg";
import productionImage from "../../images/production.jpg";
import publicDataImage from "../../images/publicdata.jpg";
import softwareImage from "../../images/software.jpg";
import specsImage from "../../images/specs.jpg";
import healthImage from "../../images/health.jpg";
import researchImage from "../../images/research.jpg";
import planningImage from "../../images/planning.jpg";
import marketingImage from "../../images/marketing.jpg";
import designingImage from "../../images/designing.jpg";
import manufacturingImage from "../../images/manufacturing.jpg";

const initialNodes = [
  {
    id: "Company",
    type: "default",
    position: { x: 20, y: 300 },
    data: { label: "Company" },
    draggable: true,
    style: { backgroundColor: "rgba(152, 251, 152, 0.8)" },
  },
  {
    id: "Research",
    type: "default",
    position: { x: 250, y: 60 },
    data: {
      label: "Research",
      imageUrl: researchImage,
      paragraph: `From in-depth market research to innovative design
         and meticulous manufacturing, our process ensures excellence in every vehicle.`,
    },
    draggable: true,

    style: { backgroundColor: "rgba(237, 167, 120, 0.74)" },
  },

  {
    id: "External",
    type: "default",
    position: { x: 500, y: 40 },
    data: {
      label: "External",
      imageUrl: externalImage,
      paragraph:
        "Discover our external partnerships, driving innovation and collaboration in every aspect.",
    },
    draggable: true,

    style: { backgroundColor: "rgba(237, 167, 120, 0.74)" },
  },
  {
    id: "B2c1",
    type: "default",
    position: { x: 700, y: 140 },
    data: {
      label: "B2C",
      imageUrl: b2c1Image,
      paragraph:
        "Discover our commitment to direct customer engagement through our B2C platform, ensuring personalized experiences.",
    },
    draggable: true,
    style: { backgroundColor: "rgba(237, 167, 120, 0.74)" },
  },
  {
    id: "Online",
    type: "default",
    position: { x: 900, y: 190 },
    data: {
      label: "Online",
      imageUrl: onlineCoustomerImage,
      paragraph:
        "Experience the convenience of online interactions, bringing our showroom to your fingertips.",
    },
    draggable: true,
    style: { backgroundColor: "rgba(237, 167, 120, 0.74)" },
  },
  {
    id: "Interview",
    type: "default",
    position: { x: 900, y: 240 },
    data: {
      label: "Interview",
      imageUrl: interviewImage,
      paragraph:
        "Engage with our team through insightful interviews, shaping our services with your feedback.",
    },
    draggable: true,
    style: { backgroundColor: "rgba(237, 167, 120, 0.74)" },
  },
  {
    id: "Public Data",
    type: "default",
    position: { x: 900, y: 290 },
    data: {
      label: "Public Data",
      imageUrl: publicDataImage,
      paragraph:
        "Harness the power of public data to drive informed decisions and enhance your automotive experience.",
    },
    draggable: true,
    style: { backgroundColor: "rgba(237, 167, 120, 0.74)" },
  },
  {
    id: "Health",
    type: "default",
    position: { x: 900, y: 340 },
    data: {
      label: "Health",
      imageUrl: healthImage,
      paragraph:
        "Prioritize your well-being with our focus on health and safety in every aspect of our operations.",
    },
    draggable: true,
    style: { backgroundColor: "rgba(237, 167, 120, 0.74)" },
  },
  {
    id: "B2c2",
    type: "default",
    position: { x: 700, y: 180 },
    data: {
      label: "B2C",
      imageUrl: b2c2Image,
      paragraph:
        "Experience seamless B2C interactions, where every click brings you closer to your dream car journey.",
    },
    draggable: true,
    style: { backgroundColor: "rgba(237, 167, 120, 0.74)" },
  },
  {
    id: "Internal",
    type: "default",
    position: { x: 500, y: 80 },
    data: {
      label: "Internal",
      imageUrl: internalImage,
      paragraph:
        "Uncover our internal processes, ensuring quality and efficiency in every project endeavor.",
    },
    draggable: true,
    style: {
      backgroundColor: "rgba(237, 167, 120, 0.74)",
    },
  },
  {
    id: "Planning",
    type: "default",
    position: { x: 250, y: 160 },
    data: {
      label: "Planning",
      imageUrl: planningImage,
      paragraph:
        "Strategic planning is crucial, laying the foundation for our innovative and groundbreaking vehicle designs.",
    },
    draggable: true,
    style: { backgroundColor: "rgba(221, 120, 237, 0.74)" },
  },
  {
    id: "Psd",
    type: "default",
    position: { x: 500, y: 140 },
    data: {
      label: "PSD",
      imageUrl: prdImage,
      paragraph:
        "Experience our meticulous PSD development, shaping the blueprint for groundbreaking vehicle designs.",
    },
    draggable: true,
    style: { backgroundColor: "rgba(221, 120, 237, 0.74)" },
  },
  {
    id: "Specs",
    type: "default",
    position: { x: 500, y: 180 },
    data: {
      label: "Specs",
      imageUrl: specsImage,
      paragraph:
        "Explore our detailed specs, defining the performance and features of our exceptional vehicles.",
    },
    draggable: true,
    style: { backgroundColor: "rgba(221, 120, 237, 0.74)" },
  },
  {
    id: "Designing",
    type: "default",
    position: { x: 250, y: 260 },
    data: {
      label: "Designing",
      imageUrl: designingImage,
      paragraph:
        "Immerse yourself in the artistry and precision of our cutting-edge design phase experience.",
    },
    draggable: true,
    style: { backgroundColor: "rgba(237, 223, 120, 0.74)" },
  },
  {
    id: "Hardware",
    type: "default",
    position: { x: 500, y: 240 },
    data: {
      label: "Hardware",
      imageUrl: hardwareImage,
      paragraph:
        "Delve into our cutting-edge hardware, powering the technology that drives our automotive excellence.",
    },
    draggable: true,
    style: { backgroundColor: "rgba(237, 223, 120, 0.74)" },
  },
  {
    id: "Software",
    type: "default",
    position: { x: 500, y: 280 },
    data: {
      label: "Software",
      imageUrl: softwareImage,
      paragraph:
        "Engage with our innovative software solutions, enhancing the driving experience with advanced features.",
    },
    draggable: true,
    style: { backgroundColor: "rgba(237, 223, 120, 0.74)" },
  },
  {
    id: "Manufacturing",
    type: "default",
    position: { x: 250, y: 360 },
    data: {
      label: "Manufacturing",
      imageUrl: manufacturingImage,
      paragraph:
        "Experience the seamless transition from design to manufacturing excellence and witness our commitment to quality.",
    },
    draggable: true,
    style: { backgroundColor: "rgba(241, 121, 130, 0.74)" },
  },
  {
    id: "Material",
    type: "default",
    position: { x: 500, y: 340 },
    data: {
      label: "Material",
      imageUrl: materialImage,
      paragraph:
        "Experience our premium materials, meticulously selected to elevate comfort and durability in every vehicle.",
    },
    draggable: true,
    style: { backgroundColor: "rgba(241, 121, 130, 0.74)" },
  },
  {
    id: "Production",
    type: "default",
    position: { x: 500, y: 380 },
    data: {
      label: "Production",
      imageUrl: productionImage,
      paragraph:
        "Witness the precision of our state-of-the-art production facilities, ensuring quality craftsmanship in every car.",
    },
    draggable: true,
    style: { backgroundColor: "rgba(241, 121, 130, 0.74)" },
  },
  {
    id: "Sales",
    type: "default",
    position: { x: 250, y: 460 },
    data: {
      label: "Sales/Marketing",
      imageUrl: marketingImage,
      paragraph:
        "Explore our dynamic sales strategies, meticulously crafted to meet the unique needs of every customer.",
    },
    draggable: true,
    style: { backgroundColor: "rgba(94, 101, 236, 0.84)" },
  },
  {
    id: "Onlinesales",
    type: "default",
    position: { x: 500, y: 440 },
    data: {
      label: "Online",
      imageUrl: onlineSalesImage,
      paragraph:
        "Embark on a seamless journey with our streamlined online sales process, tailored for convenience.",
    },
    draggable: true,
    style: { backgroundColor: "rgba(94, 101, 236, 0.84)" },
  },
  {
    id: "Dealership",
    type: "default",
    position: { x: 500, y: 480 },
    data: {
      label: "Dealership",
      imageUrl: dealershipImage,
      paragraph:
        "Connect with our trusted dealership network, providing personalized service and support to every customer.",
    },
    draggable: true,
    style: { backgroundColor: "rgba(94, 101, 236, 0.84)" },
  },
];

export default initialNodes;
