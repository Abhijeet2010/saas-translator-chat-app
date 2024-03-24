import React from "react";
import Logo from "@/components/Logo";
import DarkModeToggle from "./DarkmodeToggle";
import UserButton from "./UserButton";
import { getServerSession } from "next-auth";
import { authOptions } from "@/authOptions";
import Link from "next/link";
import { MessageSquareIcon } from "lucide-react";
import CreateChatButton from "./CreateChatButton";

const Header = async () => {
  const session = await getServerSession(authOptions);

  return (
    <header className="sticky top-0 bg-white dark:bg-gray-900 z-50">
      <nav className="flex flex-col sm:flex-row items-center p-5 pl-2 bg-white dark:bg-gray-900 max-w-7xl mx-auto ">
        <Logo />

        <div className="flex-1 flex items-center justify-end space-x-4">
          {/* Language Select */}

          {/* session && ... */}
          {session ? (
            <>
              <Link href={"/chat"} prefetch={false}>
                <MessageSquareIcon className="text-black dark:text-white" />
              </Link>
              <CreateChatButton />
            </>
          ) : (
            <>
              <Link href={"/pricing"}>pricing</Link>
            </>
          )}

          <DarkModeToggle />
          <UserButton session={session} />
        </div>
      </nav>

      {/* upgrade Banner */}
    </header>
  );
};

export default Header;
