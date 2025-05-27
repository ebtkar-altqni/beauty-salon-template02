import { AppointmentStatus } from "@/generated/prisma";

export function parseAppointmentStatusAr(status: AppointmentStatus): string {
  switch (status) {
    case AppointmentStatus.PENDING:
      return "قيد الانتظار";
    case AppointmentStatus.CONFIRMED:
      return "مؤكد";
    case AppointmentStatus.CANCELLED:
      return "ملغي";
    case AppointmentStatus.COMPLETED:
      return "مكتمل";
    default:
      return "غير معروف";
  }
}
