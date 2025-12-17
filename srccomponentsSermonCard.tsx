type Props = { videoId: string };

export default function SermonCard({ videoId }: Props) {
  return (
    <iframe
      className="w-full aspect-video rounded-xl"
      src={`https://www.youtube.com/embed/${videoId}`}
      allowFullScreen
    />
  );
}
