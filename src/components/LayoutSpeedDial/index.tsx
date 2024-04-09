"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction, {
  SpeedDialActionProps,
} from "@mui/material/SpeedDialAction";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import SendIcon from "@mui/icons-material/Send";
import MessageIcon from "@mui/icons-material/Message";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import TranslateIcon from "@mui/icons-material/Translate";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import SettingsIcon from "@mui/icons-material/Settings";
import CloseIcon from "@mui/icons-material/Close";
import ContactDialog from "./ContactDialog";
import ShareDrawer from "./ShareDrawer";
import { CustomThemeContext } from "@/theme/CustomThemeContext";
import { ThemeMode } from "@/theme/ThemeMode.enum";

function LayoutSpeedDial() {
  const [contactOpen, setContactOpen] = React.useState(false);
  const handleOpenContact = () => setContactOpen(true);
  const handleCloseContact = () => setContactOpen(false);

  const [shareOpen, setShareOpen] = React.useState(false);
  const handleOpenShare = () => setShareOpen(true);
  const handleCloseShare = () => setShareOpen(false);
  const { mode, toggleMode } = React.useContext(CustomThemeContext);
  const actions = React.useMemo<
    (SpeedDialActionProps & { tooltipTitle: string })[]
  >(
    () => [
      {
        icon: <MessageIcon />,
        tooltipTitle: "Leave a message",
        onClick: handleOpenContact,
      },
      { icon: <AccountBoxIcon />, tooltipTitle: "View Resume" },
      { icon: <ShareIcon />, tooltipTitle: "Share", onClick: handleOpenShare },
      { icon: <TranslateIcon />, tooltipTitle: "Translate to Arabic" },
      mode === ThemeMode.DARK
        ? {
            icon: <LightModeIcon />,
            tooltipTitle: "Switch to Light Mode",
            onClick: () => toggleMode(ThemeMode.LIGHT),
          }
        : {
            icon: <DarkModeIcon />,
            tooltipTitle: "Switch to Dark Mode",
            onClick: () => toggleMode(ThemeMode.DARK),
          },
    ],
    [mode]
  );

  return (
    <>
      <ContactDialog open={contactOpen} onClose={handleCloseContact} />
      <ShareDrawer
        open={shareOpen}
        onClose={handleCloseShare}
        onOpen={handleOpenShare}
      />
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{
          position: "fixed",
          bottom: { xs: 16, md: 32 },
          right: { xs: 16, md: 32 },
        }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction key={action.tooltipTitle} {...action} />
        ))}
      </SpeedDial>
    </>
  );
}

export default LayoutSpeedDial;
