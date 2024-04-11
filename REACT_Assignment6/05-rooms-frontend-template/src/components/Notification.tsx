// Notification.tsx

import { ReactNode } from "react";
import Text from "./Text";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

type Props = {
  children: ReactNode;
};

export default function Notification({ children }: Props) {
  return (
    <div className="text-red-600 mt-1 flex items-center gap-2">
      <ExclamationTriangleIcon className="w-4 h-4" />
      <Text>{children}</Text>
    </div>
  );
}
