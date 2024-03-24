"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import UserAvatar from "./UserAvatar";
import { Session } from "next-auth";
import { Button } from "./ui/button";
import { signIn, signOut } from "next-auth/react";

const UserButton = ({ session }: { session: Session | null }) => {
  if (!session)
    return (
      <Button variant={"outline"} onClick={() => signIn()}>
        signIn
      </Button>
    );
  return (
    session && (
      <DropdownMenu>
        <DropdownMenuTrigger className="outline-none">
          <UserAvatar name={session?.user?.name} image={session?.user?.image} />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>{session?.user?.name}</DropdownMenuItem>
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={() => signOut()}
          >
            Signout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  );
};

export default UserButton;
