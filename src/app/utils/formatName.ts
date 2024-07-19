export default function formatName(name: string) {
  const changedName = name?.split(' ');
  const capitalized = changedName.map(
    (name) => name.charAt(0).toUpperCase() + name.slice(1)
  );
  if (capitalized.length > 2) {
    capitalized.slice(0, 2);
  }

  return capitalized.join(' ');
}
