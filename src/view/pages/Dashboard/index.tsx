// import { DashboardProvider } from './DashboardContext';
import { DashboardProvider } from './DashboardContext';
import { NewContactModal } from './NewContactModal';
import { RegisterContacts } from './RegisterContacts';

export function Dashboard() {
  return (
    <DashboardProvider>
      <div className='h-full w-full md:p-4 md:px-8 md:pb-8 md:pt-6 flex items-center justify-center gap-4'>
        <div className=' flex gap-4 w-full h-full md:w-[600px] md:h-[700px]  bg-gray-50'>
          <RegisterContacts />
        </div>
        <NewContactModal />
      </div>
      //{' '}
    </DashboardProvider>
  );
}

/*
 <div className='h-full w-full p-4 md:px-8 md:pb-8 md:pt-6 flex flex-col gap-4'>
      <main className='flex-1 flex flex-col md:flex-row gap-4 max-h-full'>
        <div className='w-full md:w-1/2'>
          <RegisterContacts />
        </div>
      </main>
    </div>
*/
