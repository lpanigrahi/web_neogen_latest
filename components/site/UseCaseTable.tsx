import { cn } from "@/lib/utils";

interface UseCase {
  useCase: string;
  sponsor: string;
  outcome: string;
}

interface UseCaseTableProps {
  useCases: UseCase[];
  className?: string;
}

export function UseCaseTable({ useCases, className }: UseCaseTableProps) {
  return (
    <div className={cn("rounded-xl border border-border-soft overflow-hidden", className)}>
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border-soft bg-bg-elev-1">
            <th className="text-left px-4 py-3 text-text-muted font-medium text-xs uppercase tracking-[0.12em]">Use Case</th>
            <th className="text-left px-4 py-3 text-text-muted font-medium text-xs uppercase tracking-[0.12em]">CXO Sponsor</th>
            <th className="text-left px-4 py-3 text-text-muted font-medium text-xs uppercase tracking-[0.12em]">Outcome</th>
          </tr>
        </thead>
        <tbody>
          {useCases.map((row, i) => (
            <tr key={i} className="border-b border-border-soft last:border-0 hover:bg-bg-elev-1 transition-colors">
              <td className="px-4 py-3 text-text-primary font-medium">{row.useCase}</td>
              <td className="px-4 py-3 text-text-secondary">{row.sponsor}</td>
              <td className="px-4 py-3 text-aurora-1">{row.outcome}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
