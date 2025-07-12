import { Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SocialMediaLinks() {
  return (
    <div className="flex items-center justify-center gap-4">
      <Button
        variant="outline"
        size="sm"
        className="hover:bg-blue-50 hover:border-blue-200"
        asChild
      >
        <a
          href="https://www.facebook.com/people/Lotta-p%C3%A5-%C3%A5sen/100045411761881/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2"
        >
          <Facebook className="h-4 w-4 text-blue-600" />
          Facebook
        </a>
      </Button>
      <Button
        variant="outline"
        size="sm"
        className="hover:bg-pink-50 hover:border-pink-200"
        asChild
      >
        <a
          href="https://www.instagram.com/lottapaasen/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2"
        >
          <Instagram className="h-4 w-4 text-pink-600" />
          Instagram
        </a>
      </Button>
    </div>
  );
}