import ListAlbums from "../components/ListAlbums";

export default function Home() {
  return (
    <div className="pt-28 md:pl-72 p-8">
      <ListAlbums title="Spotify Playlists" />
      <ListAlbums title="New Releases" />
      <ListAlbums title="Charts" />
      <ListAlbums title="Recently Played" />
      <ListAlbums title="Daily Mix 1" />
    </div>
  );
}
