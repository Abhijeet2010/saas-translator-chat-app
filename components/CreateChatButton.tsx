"use client";

import { MessageSquareIcon } from "lucide-react";
import { Button } from "./ui/button";

const CreateChatButton = () => {
  return (
    <Button variant={"ghost"}>
      <MessageSquareIcon />
    </Button>
  );
};

export default CreateChatButton;
