"use client";

import { getAttendance } from "@/apiMethods/attendance";
import { defaultClientHeaders } from "@/constants/defaultClientHeaders";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import AttendanceTable from "./Table";
import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  List,
  ListItem,
  ListItemText,
  Pagination,
  Stack,
} from "@mui/material";
import AddShiftDialog from "./AddShiftDialog";

function AttendanceContent() {
  const [page, setPage] = useState(1);
  const [dialogOpen, setDialogOpen] = useState(false);
  const headers = defaultClientHeaders();
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["attendance", page],
    queryFn: async () => await getAttendance({ page, limit: 100 }, headers),
  });

  return (
    <>
      <AddShiftDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        refresh={refetch}
      />
      <Backdrop open={isLoading}>
        <CircularProgress />
      </Backdrop>
      <Box>
        <Button variant="outlined" onClick={() => setDialogOpen(true)}>
          Add New Shift
        </Button>
      </Box>
      {data && <AttendanceTable shifts={data.data.data} refresh={refetch} />}
      <Stack alignItems="center">
        <Pagination
          page={page}
          onChange={(e, page) => setPage(page)}
          count={data?.data.pages}
        />
      </Stack>
      <Box width={300}>
        <List>
          <ListItem>
            <ListItemText
              primary={"Total Work Hours"}
              secondary={data?.statistics.totalWorkHours}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={"Total Pay"}
              secondary={data?.statistics.totalPay}
            />
          </ListItem>
        </List>
      </Box>
    </>
  );
}

export default AttendanceContent;
