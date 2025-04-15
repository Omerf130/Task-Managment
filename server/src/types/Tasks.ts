export interface ITask {
  title:string
  status:TStatus
  tags:string[]
  priority: TPriority
  projectId:string
}

type TStatus = "To-Do" | "In Progress" | "Done"

type TPriority = "low" | "medium" | "high"
