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
        <Button title="Small Button" styles="rounded-sm" />
        <Button title="Medium Button" styles="rounded-md" />
        <Button title="Large Button" styles="rounded-full" />
      </div>
    </div>
  );
};

export default Landing;
