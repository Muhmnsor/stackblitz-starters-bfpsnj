import { prisma } from '@/lib/prisma';
import { format } from 'date-fns';
import { ar } from 'date-fns/locale';

async function getRecentActivities() {
  const [ideas, meetings, projects, tasks] = await Promise.all([
    prisma.idea.findMany({
      take: 5,
      orderBy: { createdAt: 'desc' },
      include: { creator: true },
    }),
    prisma.meeting.findMany({
      take: 5,
      orderBy: { createdAt: 'desc' },
    }),
    prisma.project.findMany({
      take: 5,
      orderBy: { createdAt: 'desc' },
    }),
    prisma.task.findMany({
      take: 5,
      orderBy: { createdAt: 'desc' },
      include: { assignedTo: true },
    }),
  ]);

  return { ideas, meetings, projects, tasks };
}

export default async function RecentActivities() {
  const { ideas, meetings, projects, tasks } = await getRecentActivities();

  return (
    <div className="mt-8">
      <h2 className="text-base font-semibold leading-6 text-gray-900">النشاطات الأخيرة</h2>
      <div className="mt-6 divide-y divide-gray-100 border-t border-gray-200">
        {ideas.map((idea) => (
          <div key={idea.id} className="relative py-6">
            <div className="flex gap-x-4">
              <div className="flex-auto">
                <div className="flex items-baseline justify-between gap-x-4">
                  <p className="text-sm font-semibold leading-6 text-gray-900">
                    فكرة جديدة: {idea.title}
                  </p>
                  <p className="flex-none text-xs text-gray-600">
                    {format(idea.createdAt, 'PPP', { locale: ar })}
                  </p>
                </div>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  تم إنشاؤها بواسطة {idea.creator.name}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}