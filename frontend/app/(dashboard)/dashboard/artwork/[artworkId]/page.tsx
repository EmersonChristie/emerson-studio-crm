import BreadCrumb from '@/components/breadcrumb';
import { ArtworkForm } from '@/components/forms/artwork-form';
import { ScrollArea } from '@/components/ui/scroll-area';
import React from 'react';

export default function Page() {
  const breadcrumbItems = [
    { title: 'Artwork', link: '/dashboard/artwork' },
    { title: 'Create', link: '/dashboard/artwork/create' }
  ];
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-5">
        <BreadCrumb items={breadcrumbItems} />
        {/* TODO: fetch categories from backend */}
        <ArtworkForm
          categories={[
            { _id: 'abstract', name: 'abstract' },
            { _id: 'seascape', name: 'seascape' },
            { _id: 'landscape', name: 'landscape' },
            { _id: 'minimalist', name: 'minimalist' }
          ]}
          initialData={null}
          key={null}
        />
      </div>
    </ScrollArea>
  );
}
