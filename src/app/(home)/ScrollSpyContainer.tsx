"use client";
import ScrollSpy from "react-ui-scrollspy";

function ScrollSpyContainer({ children }: Props) {
  return (
    <ScrollSpy
      activeClass="active"
      offsetBottom={100}
      offsetTop={200}
      scrollThrottle={10}
    >
      {children}
    </ScrollSpy>
  );
}

type Props = { children: React.ReactNode };

export default ScrollSpyContainer;
