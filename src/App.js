import { useState } from 'react';
import Notification from './Notification';
import { toast } from 'react-toastify';
function App() {
   const [work, setWork] = useState('');
   const [todos, setTodos] = useState([]);
   const handleAdd = () => {
      if (todos.some((todo) => todo.id === work?.replace(/\s/g, ''))) {
         toast.warn('Đã tồn tại công việc');
      } else {
         setTodos((prev) => [...prev, { id: work?.replace(/\s/g, ''), job: work }]);
         setWork('');
      }
   };
   const handleDeleteJob = (id) => {
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
   };
   console.log(todos);
   return (
      <>
         <div className="flex flex-col h-screen gap-8 items-center border border-red-400 justify-center">
            <div className="flex gap-8">
               <input
                  className="outline-none border border-blue-500 px-4 py-2 w-[400px]"
                  type="text"
                  value={work}
                  onChange={(e) => setWork(e.target.value)}
               />
               <button
                  type="button"
                  className="outline-none px-4 py-2 bg-blue-400 rounded-md text-white"
                  onClick={handleAdd}
               >
                  Add
               </button>
            </div>
            <div>
               <h3>Content</h3>
               <ul>
                  {todos.map((todo) => (
                     <li key={todo.id} className="flex gap-10 items-center">
                        <span className="my-4">{todo.job}</span>
                        <span onClick={() => handleDeleteJob(todo.id)} className="my-4 cursor-pointer p-2">
                           X
                        </span>
                     </li>
                  ))}
               </ul>
            </div>
         </div>
         <Notification />
      </>
   );
}

export default App;
