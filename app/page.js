import Image from "next/image";
import DatePicker from './components/DatePicker';
import './globals.css';

export default function Home() {
  return (
    <div className="   gap-16 pt-8 font-[family-name:var(--font-geist-sans)] bg-purple-300 ">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full ">
      <h1 className="font-bold text-4xl text-purple-700 text-center mb-6 bg-purple-100 p-4 rounded-lg shadow-md w-full sm:w-3/4 mx-auto main-font">Date Picker App</h1>
      
        <DatePicker />
             
      </main>  
    </div>
  );
}
