import bgImg from "../../new/banner/bg.png"
import photoBoardImg from "../../new/banner/photoBoard.png"
import descriptionBoardImg from "../../new/banner/descriptionBoard.png"
import photoImg from "../../new/gallery/main.gif"
import Countdown from "./CoundDown"
import MintBtn from "./MintBtn"

import "./Banner.scss"
import "./Banner.css"

export default function Banner() {
	return (
		<div
			className="bannerContainer"
			style={{
				backgroundImage: `url(${bgImg})`,
				backgroundSize: "100% 100%",
			}}
		>
			{/* <Countdown date={startTimeOfPreSale} /> */}
			<div className="bannerPaperContainer">
				<div className="bannerPaper">
					<PhotoBoard />

					<div
						className="descriptionBoard"
						style={{
							backgroundImage: `url(${descriptionBoardImg})`,
							backgroundSize: "100% 100%",
						}}
					>
						<p>
							A pack of <span>5,555</span> Wulfz finding their way
							through the Metaverse. Using the power of{" "}
							<span>$AWOO</span>, they can expand and evolve to
							ensure that they are prepared to defend themselves
							against unknown threats.
						</p>
					</div>

					<div className="mintPackageContainer">
						<div className="mintPackage">
							<MintBtn txt="MINT 1" amount="1" />
							{/* <MintBtn txt="MINT 2" amount="2" /> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

function PhotoBoard() {
	return (
		<div className="photoBoard">
			<img src={photoBoardImg} className="photoBoardImg" />
			<img src={photoImg} className="photoImg" />
		</div>
	)
}
