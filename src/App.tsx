
import React,{useState,useEffect} from 'react'
// const App = function(){
//   let [num,setNum] = useState(1)
//   function handleAdd(){
//     setNum(num+2)
//   }
//   return <div>
//     <h1 onClick={handleAdd}>{num}</h1>
//   </div>
// }

//1.React 全部都是JS
//使用ts
//1.你自己定义的变量类型
//2.宿主环境（浏览器，node）环境内的变量类型
//3.第三方框架的数据类型
//4.泛型等等类型推导，熟练使用一些工具函数Omit,Pick,Partial等函数
interface Todo{
  title:string,
  done:boolean,
  id:any,
}
type  inputEvent = React.ChangeEvent<HTMLInputElement>
const App:React.FC = function(){
  const [val,setVal] = useState<string>('')
  const [todos,setTodos] = useState<Todo[]>([
    {title:'吃饭',done:false,id:Date.now}, 
  ])
  const active = todos.filter(todo=>todo.done).length
  function handleAdd():void{
    setTodos([...todos,{title:val,done:false,id:Date.now}])
    setVal('')
  }
  function handleSetTodo(e:inputEvent,i:number){
    // todos[i].done = e.target.checked;
    const nextTodos = [...todos]
    nextTodos[i].done = e.target.checked
    setTodos(nextTodos)
  }
  const [allDone,setAllDone] = useState(false)
  function handleToggleAll(e:inputEvent){
    const nextTodos = [...todos];
    nextTodos.forEach(todo=>{
      todo.done = e.target.checked;
    })
    setAllDone(e.target.checked)
    setTodos(nextTodos)
  }
  function handleRemoteTodo(i:number){
    const nextTodos = [...todos]
    nextTodos.splice(i,1)
    setTodos(nextTodos);
  }
  function handleClear(){
    setTodos(todos.filter(todo=>!todo.done))
  }
  useEffect(()=>{
    if(todos.length === 0){
    return setAllDone(false)
    }
    setAllDone(active === todos.length)
  },[todos])
  return <div>
    <input type="text" value={val} onChange={e=>{setVal(e.target.value)}}/>
    <button onClick={handleAdd}>添加</button>
    <button onClick={handleClear}>清理</button>
    <ul>
      {todos.map((todo,i) =>{
        return <li key={todo.id}>
        <input type="checkbox" checked={todo.done}
          onChange={e=>{handleSetTodo(e,i)}}
        />
        <span>{todo.title}</span>
        <span onClick={()=>handleRemoteTodo(i)}>X</span>
        </li>
        })
      }
    </ul>
    {todos.length === 0?<div>小老弟暂无数据！！！</div>: 
      <div>
        全选<input type="checkbox" checked={allDone} onChange={e=>handleToggleAll(e)}/>
        <span>{active}/{todos.length}</span>
      </div>
    }
  </div>
}
export default App