import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Icons } from "@/components/icons";
import { Session } from "next-auth";

interface UserAvatarProps {
  user: Pick<Session["user"], "name" | "image">;
}

export function UserAvatar({ user }: UserAvatarProps) {
  return (
    <Avatar>
      <AvatarImage src={user.image || ""} alt="Profile picture" />
      <AvatarFallback>
        {user.name ? (
          user.name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .toUpperCase()
        ) : (
          <Icons.user className="h-4 w-4" />
        )}
      </AvatarFallback>
    </Avatar>
  );
}
