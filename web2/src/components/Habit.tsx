interface HabitProps {
    completed: number
}

export function Habit(props: HabitProps){
    return(
        <div className="bg-black w-10 h-10 text-white m-2">{props.completed}</div>
    )

}