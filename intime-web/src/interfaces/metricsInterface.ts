export interface MetricsInterface {
  subject?: string;
  availableClasses?: number;
  presences?: number;
  absences?: number;
  pendences?: number;
  percent?: number;
  status?: "success" | "active" | "exception" | "normal"
}

