"use client";
import { jost } from "../../../app/layout";
import Sponsors from "@/components/sponsorspics";
import Navbar from "@/components/Navbar";

export default function SponsorsPage() {
  return (
    <div className={`${jost.className} flex-1 text-white `}>
      <Navbar></Navbar>
      <Sponsors />
    </div>
  );
}
