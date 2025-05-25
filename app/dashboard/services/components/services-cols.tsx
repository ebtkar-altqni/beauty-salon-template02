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
import NotFoundTable from "@/components/not-found-table";
import Image from "next/image";
import Link from "next/link";
import { Service } from "@/generated/prisma";

const ServicesCols: ColumnDef<Service>[] = [
  {
    accessorKey: "الملصق الإعلاني",
    header: "الملصق الإعلاني",
    cell: ({ row }) => {
      const image = row.original?.poster;
      return image ? (
        <div className="overflow-hidden rounded-md h-12 w-12 aspect-square">
          <Image
            src={image}
            alt={`${row.original.title}-image`}
            width={100}
            height={100}
            className="w-full h-full object-cover"
          />
        </div>
      ) : (
        <NotFoundTable />
      );
    },
  },
  {
    accessorKey: "الاسم",
    header: "الاسم",
    cell: ({ row }) => <div>{row.original?.title ?? "لايوجد"}</div>,
  },
  {
    accessorKey: "معلومات بسيطة",
    header: "معلومات بسيطة",
    cell: ({ row }) => <div>{row.original?.info ?? "لايوجد"}</div>,
  },
  {
    id: "actions",
    header: "الأحداث",
    enableHiding: false,
    cell: ({ row }) => {
      const service = row.original;
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
              <Link href={`/dashboard/services/edit/${service.id}`}>تحديث</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export default ServicesCols;
