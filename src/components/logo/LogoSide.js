import CustomLogo from "./CustomLogo";
import { Stack } from "@mui/system";
import { getImageUrl } from "utils/CustomFunctions";

const LogoSide = ({ configData, width, height, objectFit }) => {
  const businessLogo = configData?.base_urls?.business_logo_url;
  //console.log(configData);
  //console.log(configData?.base_urls.business_logo_url+'/'+configData?.logo);
  return (
    <Stack
      direction="row"
      alignItems="center"
      width="150px"
      justifyContent="flex-start"
    >
      <CustomLogo
        atlText="logo"
        logoImg={configData?.base_urls.business_logo_url+'/'+configData?.logo}
        //height="1.5rem"
        width={width}
        height={height}
        objectFit={objectFit}
      />
    </Stack>
  );
};

LogoSide.propTypes = {};

export default LogoSide;
