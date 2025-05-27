"use client";
import * as React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { Appointment } from "@/generated/prisma";
import { DeleteAppointmentForm } from "./forms";
import { parseAppointmentStatusAr } from "@/lib/parsers";
// import { DeleteAppointmentForm } from "./forms";

const AppointmentsCols: ColumnDef<Appointment>[] = [
  {
    accessorKey: "name",
    header: "اسم العميل",
    cell: ({ row }) => <div>{row.original?.name ?? "لايوجد"}</div>,
  },
  {
    accessorKey: "phone",
    header: "رقم الهاتف",
    cell: ({ row }) => <div>{row.original?.phone ?? "لايوجد"}</div>,
  },
  {
    accessorKey: "date",
    header: "تاريخ الموعد",
    cell: ({ row }) =>
      row.original?.date
        ? new Date(row.original.date).toLocaleString()
        : "لايوجد",
  },
  {
    accessorKey: "notes",
    header: "ملاحظات",
    cell: ({ row }) => <div>{row.original?.notes ?? "لايوجد"}</div>,
  },
  {
    accessorKey: "status",
    header: "الحالة",
    cell: ({ row }) => (
      <div>
        {parseAppointmentStatusAr(row.original?.status) ?? "قيد الانتظار"}
      </div>
    ),
  },
  {
    id: "actions",
    header: "الأحداث",
    enableHiding: false,
    cell: ({ row }) => {
      const appointment = row.original;
      return (
        <DropdownMenu dir="rtl">
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">افتح الأحداث</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>الأحداث</DropdownMenuLabel>
            <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
              <Link href={`/dashboard/appiontments/edit/${appointment.id}`}>
                تحديث الموعد
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
              <DeleteAppointmentForm id={appointment.id} />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export default AppointmentsCols;
