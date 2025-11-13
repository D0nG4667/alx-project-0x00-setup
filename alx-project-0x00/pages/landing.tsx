import Button from "@/components/Button";
import Card from "@/components/Card";

const Landing: React.FC = () => {
  return (
    <div>
      <h1 className="text-xl font-extralight">Landing Page</h1>
      <Card />
      <Card />
      <Card />

      <div className="flex flex-wrap gap-4 justify-center">
        <Button title="Small Button" styles="text-sm px-3 py-1 rounded-sm" />
        <Button title="Medium Button" styles="text-base px-4 py-2 rounded-md" />
        <Button title="Large Button" styles="text-lg px-6 py-3 rounded-full" />
      </div>
    </div>
  );
};

export default Landing;
