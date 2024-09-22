import { BoxWrapper } from '../components/BoxWrapper';
import { IoBagHandle } from 'react-icons/io5';

function DashboardStatsGrid() {
  return (
    <div className="flex gap-4 w-full">
      <BoxWrapper iconBgColor="#00f" icon={<IoBagHandle />} title="Total sales" value="$3425.60" unit="+254" />
      <BoxWrapper iconBgColor="#FF5733" icon={<IoBagHandle />} title="Total sales" value="$3425.60" unit="+254" />
      <BoxWrapper iconBgColor="#8C33FF" icon={<IoBagHandle />} title="Total sales" value="$3425.60" unit="+254" />
      <BoxWrapper iconBgColor="#2E8B57" icon={<IoBagHandle />} title="Total sales" value="$3425.60" unit="+254" />
    </div>
  );
}

export { DashboardStatsGrid };
