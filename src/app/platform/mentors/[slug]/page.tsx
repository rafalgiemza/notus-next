import React from "react";

// components

import CardMakeContact from "@/components/Cards/CardMakeContact.js";
import CardProfile from "@/components/Cards/CardProfile.js";

export default function SettingsPage() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">
          <CardMakeContact />
        </div>
        <div className="w-full lg:w-4/12 px-4">
          <CardProfile />
        </div>
      </div>
    </>
  );
}
