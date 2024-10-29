import { Box } from "@mui/system";
import React from "react";
import CustomImageContainer from "../CustomImageContainer";
import CustomContainer from "../container";

const DiscountBanner = ({ bannerImage, isSmall }) => {
	
	return (
		<>
			{isSmall ? (
				<CustomContainer>
					<Box
						sx={{
							position: "relative",
							width: "100%",
							// height: "250px",
							borderRadius: "5px",
							marginBottom: "20px ",
						}}
					>
						<CustomImageContainer
							src={'https://drhome.drhomeonline.net/storage/app/public/promotional_banner/2024-10-28-671fc45d7a77a.png'}
							alt="banner"
							height="100%"
							width="100%"
							obejctfit="contained"
							borderRadius="5px"
						/>
					</Box>
				</CustomContainer>
			) : (
				<Box
					sx={{
						position: "relative",
						width: "100%",
						height: "250px",
						borderRadius: "5px",
					}}
				>
					<CustomImageContainer
						src={'https://drhome.drhomeonline.net/storage/app/public/promotional_banner/2024-10-28-671fc45d7a77a.png'}
						alt="banner"
						height="100%"
						width="100%"
						obejctfit="contained"
					/>
				</Box>
			)}
		</>
	);
};

export default DiscountBanner;
