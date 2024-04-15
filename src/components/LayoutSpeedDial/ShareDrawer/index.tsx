"use client";

import { variablesAtom } from "@/jotai/atoms/Variables";
import {
  Container,
  Stack,
  SwipeableDrawer,
  SwipeableDrawerProps,
} from "@mui/material";
import { useAtomValue } from "jotai";
import { useMemo } from "react";

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

function ShareDrawer({ ...props }: Props) {
  const url = useMemo(() => window.location.origin, []);

  const variables = useAtomValue(variablesAtom);
  const shareDetails = {
    title: variables?.share_title,
    url,
    round: true,
    windowPosition: "screenCenter",
    windowHeight: 720,
    windowWidth: 1280,
  } as const;
  const hashtags = variables?.share_hashtags?.replaceAll(" ", "").split("#");

  return (
    <SwipeableDrawer anchor="bottom" {...props}>
      <Container maxWidth="sm">
        <Stack
          key={`${hashtags?.join()} ${variables?.share_title}`}
          direction="row"
          gap={1}
          py={{ xs: 4, md: 8 }}
          flexWrap="wrap"
        >
          <FacebookShare
            {...shareDetails}
            quote={shareDetails.title}
            hashtag={hashtags?.join(" #")}
          />
          <EmailShare {...shareDetails} subject={shareDetails.title} />
          <LinkedinShare {...shareDetails} />
          <WhatsappShare {...shareDetails} />
          <RedditShare {...shareDetails} />
          <TwitterShare {...shareDetails} hashtags={hashtags} />
          <TumblrShare {...shareDetails} caption={shareDetails.title} />
          <TelegramShare {...shareDetails} />
        </Stack>
      </Container>
    </SwipeableDrawer>
  );
}

type Props = {} & SwipeableDrawerProps;

export default ShareDrawer;
