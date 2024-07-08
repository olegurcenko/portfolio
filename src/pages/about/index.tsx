import React from "react"
//import { RunningString } from "../runningString/runningNameString"
import { RunningString } from '../runningString/runningNameString'
import { TopInfoBlock } from "./elems/topInfoBlock"
import { SkillBox } from "./elems/skillBlox"

export const About:React.FC = () => {
	return (
		<section>
      		<RunningString strToRun="About me" />
			<TopInfoBlock/>
			<SkillBox/>
		</section>
	)
}