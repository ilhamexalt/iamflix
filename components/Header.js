/* eslint-disable jsx-a11y/alt-text */
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
import HeaderItem from "./HeaderItem";

export default function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem Title="HOME" Icon={HomeIcon} />
        <HeaderItem Title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderItem Title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeaderItem Title="COLLECTIONS" Icon={CollectionIcon} />
        <HeaderItem Title="SEARCH" Icon={SearchIcon} />
        <HeaderItem Title="ACCCOUNT" Icon={UserIcon} />
      </div>
      {/* <Image
        src=""
        width={200}
        height={100}
        className="object-contain"
      /> */}

      <h2 className="antialiased font-body font-black text-3xl text-indigo-500">
        Iamflix
      </h2>
    </header>
  );
}
