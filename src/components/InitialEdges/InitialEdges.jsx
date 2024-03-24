const initialEdges = [
  {
    id: "Company-Research",
    source: "Company",
    target: "Research",
    type: "step",
  },
  {
    id: "Research-External",
    source: "Research",
    target: "External",
    type: "step",
  },
  {
    id: "External-B2c1",
    source: "External",
    target: "B2c1",
    type: "step",
  },
  {
    id: "B2c1-Online",
    source: "B2c1",
    target: "Online",
    type: "step",
  },
  {
    id: "B2c1-Interview",
    source: "B2c1",
    target: "Interview",
    type: "step",
  },
  {
    id: "B2c1-Public Data",
    source: "B2c1",
    target: "Public Data",
    type: "step",
  },
  {
    id: "B2c1-Health",
    source: "B2c1",
    target: "Health",
    type: "step",
  },
  {
    id: "External-B2c2",
    source: "External",
    target: "B2c2",
    type: "step",
  },
  {
    id: "Research-Internal",
    source: "Research",
    target: "Internal",
    type: "step",
  },

  {
    id: "Company-Planning",
    source: "Company",
    target: "Planning",
    type: "step",
  },
  {
    id: "Planning-Psd",
    source: "Planning",
    target: "Psd",
    type: "step",
  },
  {
    id: "Planning-Specs",
    source: "Planning",
    target: "Specs",
    type: "step",
  },
  {
    id: "Company-Designing",
    source: "Company",
    target: "Designing",
    type: "step",
  },
  {
    id: "Designing-Hardware",
    source: "Designing",
    target: "Hardware",
    type: "step",
  },
  {
    id: "Designing-Software",
    source: "Designing",
    target: "Software",
    type: "step",
  },
  {
    id: "Company-Manufacturing",
    source: "Company",
    target: "Manufacturing",
    type: "step",
  },
  {
    id: "Manufacturing-Material",
    source: "Manufacturing",
    target: "Material",
    type: "step",
  },
  {
    id: "Manufacturing-Production",
    source: "Manufacturing",
    target: "Production",
    type: "step",
  },

  { id: "Company-Sales", source: "Company", target: "Sales", type: "step" },
  {
    id: "Sales-Onlinesales",
    source: "Sales",
    target: "Onlinesales",
    type: "step",
  },
  {
    id: "Sales-Dealership",
    source: "Sales",
    target: "Dealership",
    type: "step",
  },
];

export default initialEdges;
