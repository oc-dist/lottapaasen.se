import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { ReactNode } from "react";

interface FeatureCardProps {
  title: string;
  description?: string;
  image?: string;
  icon?: ReactNode;
  children?: ReactNode;
  className?: string;
}

export default function FeatureCard({
  title,
  description,
  image,
  icon,
  children,
  className
}: FeatureCardProps) {
  return (
    <Card className={`group hover:shadow-lg transition-all duration-300 border-border/50 ${className || ""}`}>
      <CardContent className="p-6">
        {image && (
          <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        
        {icon && (
          <div className="mb-4 text-primary">
            {icon}
          </div>
        )}
        
        <h3 className="text-xl font-semibold text-foreground mb-2 font-serif">
          {title}
        </h3>
        
        {description && (
          <p className="text-muted-foreground leading-relaxed mb-4">
            {description}
          </p>
        )}
        
        {children}
      </CardContent>
    </Card>
  );
}