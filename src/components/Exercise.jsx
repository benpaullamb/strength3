import Card from './Card';

export default function Exercise({ name, weight, className, ...props }) {
  return (
    <Card {...props} className={`${className} flex justify-between items-center`}>
      <span className="text-xl">{name}</span>
      <span className="text-xl font-bold">{weight}kg</span>
    </Card>
  );
}
