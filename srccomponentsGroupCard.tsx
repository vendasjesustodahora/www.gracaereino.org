type Props = { title: string };

export default function GroupCard({ title }: Props) {
  return (
    <div className="bg-white shadow rounded-xl p-6 text-center">
      <h3 className="font-semibold text-xl text-primary">{title}</h3>
    </div>
  );
}
