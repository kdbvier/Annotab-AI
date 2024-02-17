import Link from 'next/link';

import DatasetManagementList from '@/components/annotab/settings/dataset-management/dataset-management-list';

export default async function DatasetManagement() {
  return (
    <div className="w-2/4 pt-6 2xl:w-3/4">
      <Link
        href="/"
        className="mb-[120px] ml-auto block w-[260px] rounded-lg border border-gray-100 bg-gray-100 px-8 py-1 text-[14px] text-dark-navy-blue hover:bg-gray-100/80 hover:text-black/80"
      >
        Go to your personal setting
      </Link>
      <DatasetManagementList />
    </div>
  );
}
