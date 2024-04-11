import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold mb-4">Arrr! Not Found, Me Hearties!</h2>
      <p className="text-lg mb-4">
        Shiver me timbers! We couldn't find the treasure ye be seekin'.
      </p>
      <Link href="/">
        Hoist the Jolly Roger and return to all available cabins.
      </Link>
    </div>
  );
}
