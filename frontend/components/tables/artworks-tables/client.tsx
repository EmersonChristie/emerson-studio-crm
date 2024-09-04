'use client';
import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/ui/data-table';
import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import { User } from '@/constants/data';
import { Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { columns } from './columns';
import { Artwork } from '@shared/types';
import useSWR from 'swr';
import { swrConfig, fetcher } from '@/lib/apiClient';

export const ArtworksClient = () => {
  const router = useRouter();
  const { data, error } = useSWR('/artworks', fetcher, swrConfig);

  const artworks = data;

  if (error) {
    console.error('Error fetching artworks:', error);
    if (error.statusCode === 401) {
      router.push('/'); // Redirect to the login page
    }
    return <div>Error: {error.message}</div>;
  }

  if (!artworks) return <div>Loading...</div>;

  return (
    <>
      <div className="flex items-start justify-between">
        <Heading
          title={`Artworks (${artworks.length})`}
          description="Manage Artworks"
        />
        <Button
          className="text-xs md:text-sm"
          onClick={() => router.push(`/dashboard/artwork/new`)}
        >
          <Plus className="mr-2 h-4 w-4" /> Add New
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="title" columns={columns} data={artworks} />
    </>
  );
};
