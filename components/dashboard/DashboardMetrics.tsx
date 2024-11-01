export default function DashboardMetrics({
  metrics,
}: {
  metrics: { name: string; value: number }[];
}) {
  return (
    <div className="mt-8">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <div
            key={metric.name}
            className="relative overflow-hidden rounded-lg bg-white px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6"
          >
            <dt>
              <p className="truncate text-sm font-medium text-gray-500">{metric.name}</p>
            </dt>
            <dd className="flex items-baseline pb-6 sm:pb-7">
              <p className="text-2xl font-semibold text-gray-900">{metric.value}</p>
            </dd>
          </div>
        ))}
      </div>
    </div>
  );
}