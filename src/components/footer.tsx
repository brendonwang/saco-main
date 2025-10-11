import Link from "next/link";

import { Button } from "~/components/ui/button";

export const Footer = () => {
  return (
    <footer className="border-t border-neutral-200 bg-white px-6 py-6 text-sm text-neutral-500">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between">
        <span>© 2025 SACO. All rights reserved.</span>
        <Button
          asChild
          variant="ghost"
          size="sm"
          className="hidden text-neutral-400 hover:text-neutral-600 sm:inline-flex"
        >
          <Link href="mailto:info@saco.org">info@saco.org</Link>
        </Button>
      </div>
    </footer>
  );
};
