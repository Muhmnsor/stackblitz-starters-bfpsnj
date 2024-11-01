import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import DashboardMetrics from '@/components/dashboard/DashboardMetrics';
import RecentActivities from '@/components/dashboard/RecentActivities';
import { prisma } from '@/lib/prisma';

export default async function Home() {
  const session = await getServerSession();
  
  if (!session) {
    redirect('/auth/signin');
  }

  const [ideas, meetings, projects, tasks] = await Promise.all([
    prisma.idea.count(),
    prisma.meeting.count(),
    prisma.project.count(),
    prisma.task.count(),
  ]);

  return (
    <DashboardLayout>
      <div className="py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-semibold text-gray-900">لوحة التحكم</h1>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <DashboardMetrics
            metrics={[
              { name: 'الأفكار', value: ideas },
              { name: 'الاجتماعات', value: meetings },
              { name: 'المشاريع', value: projects },
              { name: 'المهام', value: tasks },
            ]}
          />
          <RecentActivities />
        </div>
      </div>
    </DashboardLayout>
  );
}