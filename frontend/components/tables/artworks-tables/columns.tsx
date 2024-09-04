'use client';
import { ColumnDef } from '@tanstack/react-table';
import { CellAction } from './cell-action';
import { Artwork } from '@shared/types';
import { Checkbox } from '@/components/ui/checkbox';

export const columns: ColumnDef<Artwork>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: 'title',
    header: 'TITLE'
  },
  {
    accessorKey: 'year',
    header: 'YEAR'
  },
  {
    accessorKey: 'artist',
    header: 'ARTIST'
  },
  {
    accessorKey: 'price',
    header: 'PRICE'
  },
  {
    accessorKey: 'status',
    header: 'STATUS'
  },
  {
    id: 'actions',
    cell: ({ row }) => <CellAction data={row.original} />
  }
];
