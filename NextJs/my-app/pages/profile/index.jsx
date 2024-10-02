import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const index = () => {
  const router = useRouter();

  return (
    <div>
      this is profile home
      <br />
      Go to <Link href={"/profile/ram"}>Ram</Link> 's profile.
      <span onClick={() => router.back()}>Back</span>
      <span onClick={() => router.forward()}>Forward</span>
      <span onClick={() => router.push("/")}>Home</span>
    </div>
  );
};

export default index;
