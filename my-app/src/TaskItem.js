export const TaskItem =({isChecked,taskName})=>{
    return (
        <li>
            <Input checked={isChecked} type="checkbox" />
            <span>{taskName}</span>
        </li>
    );  
};