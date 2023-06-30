"use client";

import Link from "next/link";

interface BreadcumbsProps {
  levelOne: string;
  levelTwo?: string;
  url?: string;
}

const Breadcumbs: React.FC<BreadcumbsProps> = ({ levelOne, levelTwo, url }) => {
  return (
    <div className="bg-gradient-to-tr from-biru to-[#6d1e70]">
      <div className="flex flex-col gap-4 max-w-[1200px] mx-auto md:pb-20 pb-20 md:pt-40 pt-28 md:px-8 lg:px-16 px-4">
        <h1 className="text-white font-extrabold md:text-3xl text-2xl uppercase">
          {levelTwo ? levelTwo : levelOne}
        </h1>
        <ul className="text-xs font-semibold text-white flex gap-2">
          <li className="text-oren">
            <Link href={"/"}>HOME</Link>
          </li>
          {levelOne && (
            <>
              <li>|</li>
              <li className="uppercase">
                {levelTwo ? (
                  <Link href={`/${url}`} className="text-oren font-bold">
                    {levelOne}
                  </Link>
                ) : (
                  levelOne
                )}
              </li>
            </>
          )}
          {levelTwo && (
            <>
              <li>|</li>
              <li className="uppercase">{levelTwo}</li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Breadcumbs;
