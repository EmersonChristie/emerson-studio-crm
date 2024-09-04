'use client';

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  SortingState,
  getSortedRowModel,
  useReactTable
} from '@tanstack/react-table';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';

import { DataTablePagination } from './data-table-pagination';
import { DataTableViewOptions } from './data-table-view-options';

import { Input } from './input';
import { Button } from './button';
import { ScrollArea, ScrollBar } from './scroll-area';
import { useState, useEffect } from 'react';
import Fuse from 'fuse.js';

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  searchKey: string;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  searchKey
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  const fuse = new Fuse(data, {
    keys: columns
      .filter((col) => 'accessorKey' in col)
      .map((col) => (col as any).accessorKey as string),
    threshold: 0.2 // Adjust the threshold as needed
  });

  useEffect(() => {
    if (searchTerm) {
      const result = fuse.search(searchTerm).map(({ item }) => item);
      setFilteredData(result);
    } else {
      setFilteredData(data);
    }
  }, [searchTerm, data]);

  const table = useReactTable({
    data: filteredData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting
    }
  });

  console.log('DataTable component rendered');

  /* this can be used to get the selectedrows
  console.log("value", table.getFilteredSelectedRowModel()); */

  const [selectedRows, setSelectedRows] = useState<TData[]>([]);

  useEffect(() => {
    const updateSelectedRows = () => {
      setSelectedRows(
        table.getFilteredSelectedRowModel().rows.map((row) => row.original)
      );
    };

    // Subscribe to table state changes
    table.setOptions((prev) => ({
      ...prev,
      onStateChange: updateSelectedRows
    }));

    // Initial update
    updateSelectedRows();

    return () => {
      // Cleanup subscription
      table.setOptions((prev) => ({
        ...prev,
        onStateChange: () => {} // Set to a no-op function
      }));
    };
  }, [table.getFilteredSelectedRowModel()]);

  useEffect(() => {
    console.log('Selected rows', selectedRows);
  }, [selectedRows]);

  return (
    <>
      <div className="flex w-full items-center justify-between gap-2">
        <Input
          placeholder={`Search...`}
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          className="flex-grow md:max-w-md"
        />
        <div className="flex-shrink-0">
          <DataTableViewOptions table={table} />
        </div>
      </div>
      <ScrollArea className="h-[calc(80vh-220px)] rounded-md border">
        <Table className="relative">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                  onClick={() => {
                    console.log('Row clicked', row);
                  }}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      {/* PAGINATION */}
      <DataTablePagination table={table} />
    </>
  );
}
