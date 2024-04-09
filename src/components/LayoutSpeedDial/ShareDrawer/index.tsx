"use client";

import {
  Container,
  Stack,
  SwipeableDrawer,
  SwipeableDrawerProps,
} from "@mui/material";

import {
  FacebookShare,
  EmailShare,
  LinkedinShare,
  WhatsappShare,
  RedditShare,
  TwitterShare,
  TumblrShare,
  TelegramShare,
  FacebookMessengerShare,
} from "react-share-lite";
const shareDetails = {
  title: "See This amazing portfolio of Ali Soliman",
  url: "https://www.npmjs.com/package/react-share-lite",
  round: true,
};
const hashtags =
  "#web #web_developer #frontend #backend #fullstack #portfolio #react #nestjs #nextjs";

function ShareDrawer({ ...props }: Props) {
  return (
    <SwipeableDrawer anchor="bottom" {...props}>
      <Container maxWidth="sm">
        <Stack direction="row" gap={1} py={{ xs: 4, md: 8 }} flexWrap="wrap">
          <FacebookShare {...shareDetails} quote="Hello" hashtag={hashtags} />
          <EmailShare {...shareDetails} subject={shareDetails.title} />
          <LinkedinShare {...shareDetails} />
          <WhatsappShare {...shareDetails} />
          <RedditShare {...shareDetails} />
          <TwitterShare
            {...shareDetails}
            hashtags={hashtags.split("#").slice(1)}
          />
          <TumblrShare {...shareDetails} caption={shareDetails.title} />
          <TelegramShare {...shareDetails} />
        </Stack>
      </Container>
    </SwipeableDrawer>
  );
}

type Props = {} & SwipeableDrawerProps;

export default ShareDrawer;
