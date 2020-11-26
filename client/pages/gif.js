import React from "react";
import GifApp from "../components/gif/GifApp";
import MainLayout from "../components/layout/main/MainLayout";

export default function Gif() {
  return (
    <MainLayout>
      <div className="mx-6">
        <div className="mt-5">
          <h3 className="text-xl font-bold ">GIF Expert</h3>
        </div>
        <GifApp />
      </div>
    </MainLayout>
  );
}
