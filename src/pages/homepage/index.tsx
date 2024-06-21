import React from "react"
import { RunningString } from "./elems/runningNameString"
import { TopInfoBlock } from "./elems/topInfoBlock"
import { WorksBlock } from "./elems/worksBlock/worksBlock"
export const Homepage:React.FC = () => {
	return (
		<>
			<RunningString/>
			<TopInfoBlock/>
			<WorksBlock/>
		</>
	)
}