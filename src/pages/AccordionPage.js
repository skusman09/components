import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: 1,
      label: "About Vue",
      content: "Vue is good Vue is good Vue is good Vue is good",
    },
    {
      id: 2,
      label: "About React",
      content: "React is good React is good React is good",
    },
    {
      id: 3,
      label: "About Angular",
      content: "Angular is good Angular is good Angular is good",
    },
  ];

  return <Accordion items={items} />;
}
export default AccordionPage;
