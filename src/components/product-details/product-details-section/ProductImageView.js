import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {
  IconButton,
  NoSsr,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import { FoodHalalHaram } from "components/cards/SpecialCard";
import { useEffect, useState } from "react";
import ReactImageMagnify from "react-image-magnify";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { getLanguage } from "../../../helper-functions/getLanguage";
import { SliderCustom } from "../../../styled-components/CustomStyles.style";
import CustomImageContainer from "../../CustomImageContainer";
import { ProductsThumbnailsSettings } from "./ProductsThumbnailsSettings";

const ChildrenImageWrapper = styled(Box)(({ theme, index, image_index }) => ({
  cursor: "pointer",
  border: index === image_index && `2px solid ${theme.palette.primary.main}`,
  borderRadius: ".3rem",
  boxSizing: "border-box",
  height: "100%",
  width: "100%",
  //filter: "drop-shadow(0px 3.41085px 8.52713px rgba(0, 0, 0, 0.1))",
  position: "relative",
  minHeight: "60px",
}));

const ProductImageView = ({
  productImage,
  productThumbImage,
  imageBaseUrl,
  configData,
  addToWishlistHandler,
  removeFromWishlistHandler,
  isWishlisted,
  productDetailsData,
}) => {
  const [preViewImage, setPreViewImage] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const tempProduct = productImage;
  useEffect(() => {
    setPreViewImage(tempProduct);
  }, [productImage]);

  const handleClick = (item, index) => {
    setPreViewImage(configData?.base_urls?.item_image_url+'/'+item);
    setImageIndex(index);
  };
  const borderColor = theme.palette.primary.main;
  return (
    <Stack justifyContent="flex-start" spacing={2} width="100%">
      <NoSsr>
        <Stack sx={{ position: "relative" }}>
          <Stack
            position="absolute"
            right="10px"
            top={{ xs: "48px", sm: "48px", md: "10px" }}
            zIndex="99"
          >
            {isWishlisted ? (
              <IconButton
                sx={{
                  backgroundColor: (theme) => theme.palette.neutral[300],
                }}
                onClick={(e) => removeFromWishlistHandler(e)}
              >
                <FavoriteIcon
                  style={{
                    width: "15px",
                    height: "15px",
                    color: borderColor,
                  }}
                />
              </IconButton>
            ) : (
              <IconButton
                sx={{
                  backgroundColor: (theme) => theme.palette.neutral[300],
                }}
                onClick={(e) => addToWishlistHandler(e)}
              >
                <FavoriteBorderIcon
                  style={{
                    width: "15px",
                    height: "15px",
                    color: borderColor,
                  }}
                />
              </IconButton>
            )}
          </Stack>
          <ReactImageMagnify
            className="magnify-container"
            {...{
              smallImage: {
                alt: "image",
                isFluidWidth: true,
                src: preViewImage,
                //sizes: "(min-width: 480px) 30vw, 80vw",
                // width: tem,
                // height: hs,
              },
              imageClassName: "magnify-image",

              largeImage: {
                src: preViewImage,
                width: 1200,
                height: 1800,
              },
              enlargedImageContainerStyle: {
                backgroundColor: theme.palette.neutral[100],
                zIndex: "1500",
              },
              enlargedImageContainerDimensions: {
                width: "150%",
                height: "100%",
              },
              enlargedImagePosition: isSmall ? "over" : "beside",
              enlargedImageContainerClassName:
                getLanguage() === "rtl" && "rtl-large-image",
            }}
          />
          {productDetailsData?.halal_tag_status &&
          productDetailsData?.is_halal ? (
            <FoodHalalHaram width={30} />
          ) : (
            ""
          )}
        </Stack>
      </NoSsr>

      {productThumbImage?.length > 0 && (
        <SliderCustom
          sx={{
            margin: {
              xs: "58px 0px 0px 0px !important",
              sm: "40px 0px 0px 0px !important",
              md: "10px 0px 0px 0px !important",
            },
          }}
        >
          <Slider {...ProductsThumbnailsSettings}>
            {productThumbImage?.map((item, index) => {
              return (
                <ChildrenImageWrapper
                  key={index}
                  onClick={() => handleClick(item, index)}
                  index={index}
                  image_index={imageIndex}
                >
                  <CustomImageContainer
                    src={configData?.base_urls?.item_image_url+'/'+item}
                    width="100%"
                    height="100%"
                    objectfit="cover"
                  />
                </ChildrenImageWrapper>
              );
            })}
          </Slider>
        </SliderCustom>
      )}
    </Stack>
  );
};

export default ProductImageView;
