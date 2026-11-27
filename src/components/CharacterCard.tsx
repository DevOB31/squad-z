interface CharacterCardProps {
  name: string;
  description: string;
  image: string;
}

export const CharacterCard = ({
  name,
  description,
  image,
}: CharacterCardProps) => {
  return (
    <li>
      {name}
      <p>{description}</p>
      <img src={image} alt={name} />
    </li>
  );
};
