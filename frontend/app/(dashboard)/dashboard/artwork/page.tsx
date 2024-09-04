import BreadCrumb from '@/components/breadcrumb';
import { ArtworksClient } from '@/components/tables/artworks-tables/client';

const breadcrumbItems = [{ title: 'Artwork', link: '/dashboard/artwork' }];

export default function page() {
  return (
    <>
      <div className="flex-1 space-y-4  p-4 pt-6 md:p-8">
        <BreadCrumb items={breadcrumbItems} />
        <ArtworksClient />
      </div>
    </>
  );
}
