import Link from "next/Link";
import React from "react";
import Card from "./Card";

const ListAlbums = (props) => {
  const { title } = props;
  return (
    <div className="mb-8">
      <div className="flex items center justify-between mb-8">
        <Link
          href="#"
          className="text-2xl font-bold text-white hover:underline"
        >
          {title}
        </Link>
        <Link
          href="#"
          className="uppercase text-sm font-bold tracking-[3px] hover:underline"
        >
          See All
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default ListAlbums;
