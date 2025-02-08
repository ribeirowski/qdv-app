import { cn } from "@/lib/utils"
import { Card } from "@/components/ui/card"

interface CustomCardProps {
  variant?: "report" | "action"
  title?: string
  qtdLitro?: number
  qtdVidro?: number
  onClick?: () => void
  className?: string
}

export function CustomCard({ variant = "action", title, qtdLitro, qtdVidro, onClick, className }: CustomCardProps) {
  return (
    <Card
      className={cn(
        "text-center items-center w-full transition-all duration-200 bg-teal-800 text-white hover:bg-teal-700 cursor-pointer",
        variant === "report" ? "p-6" : "p-4",
        className,
      )}
      onClick={onClick}
    >
      {variant === "report" ? (
        <div className="space-y-2">
          <h3 className="text-lg font-medium">{title}</h3>
          {qtdLitro && (
            <p className="text-4xl font-bold text-secondary">
              {qtdLitro.toLocaleString("pt-BR", { minimumFractionDigits: 1, maximumFractionDigits: 1 })}L
            </p>
          )}
          {qtdVidro && (
            <p className="text-sm ">
              <span className="font-bold">{qtdVidro}</span> vidros de vegetal
            </p>
          )}
        </div>
      ) : (
        <div className="text-center text-lg font-medium">{title}</div>
      )}
    </Card>
  )
}