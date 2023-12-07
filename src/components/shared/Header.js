import { Box, Typography } from "@mui/material";
import image from "@/assets/The Dragon News.png";
import Image from "next/image";
import { getCurrentDate } from "@/utils/getCurrentDate";

const Header = () => {

    const currentDate = getCurrentDate();
    return (
        <Box className="my-3">
            <Image src={image} height={500} width={500} alt="Image" className="mx-auto" />
            <Typography className="my-2" color={"gray"} variant="body2" textAlign={"center"}>
                Journalism Without Fear or Favour
            </Typography>
            <Typography color={"gray"} variant="body2" textAlign={"center"}>
                {currentDate}
            </Typography>

        </Box>
    );
};

export default Header;