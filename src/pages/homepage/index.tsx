import React from "react"
import { RunningString } from "../runningString/runningNameString"
import { TopInfoBlock } from "./elems/topInfoBlock"
import { WorksBlock } from "./elems/worksBlock/worksBlock"
export const Homepage:React.FC = () => {
	return (
		<>
      		<RunningString strToRun="Oleh Yurchenko" />
	  		<TopInfoBlock/>
			<WorksBlock/>
		</>
	)
}