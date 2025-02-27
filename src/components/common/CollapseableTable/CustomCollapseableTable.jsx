import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import {
   Box,
   Checkbox,
   Collapse,
   IconButton,
   Menu,
   MenuItem,
   Skeleton,
   Table,
   TableBody,
   TableCell,
   TableContainer,
   TableHead,
   TablePagination,
   TableRow,
} from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";
// MAIN Component
const CollapseTable = ({
   isMulti = true,
   tableHeads,
   tableData,
   onEdit,
   ChildComponent,
   onDelete,
   loading = false,
   rowsPerPage = 10,
   setRowsPerPage,
   page = 0,
   setPage,
   total = 1,
}) => {
   const [selectedRows, setSelectedRows] = useState([]);
   const [anchorEl, setAnchorEl] = useState(null);
   const [actionSelectedData, setActionSelectedData] = useState(null);
   const open = Boolean(anchorEl);
   const handleActionButtonClick = (event, data) => {
      setAnchorEl(event.currentTarget);
      setActionSelectedData(data);
   };
   const handleClose = () => {
      setAnchorEl(null);
   };
   const handleEditClicked = () => {
      onEdit(actionSelectedData);
      handleClose();
   };

   const handleDeleteClicked = () => {
      onDelete(actionSelectedData);
      handleClose();
   };
   const handleChangePage = (event, newPage) => {
      setPage(newPage);
   };

   const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
   };

   const onSelectAllClick = (e, tableData) => {
      if (!e.target.checked) return setSelectedRows([]);
      const newDatas = tableData.map((singleData, idx) => ({
         ...singleData,
         id: idx,
      }));
      setSelectedRows(newDatas);
   };

   const handleSingleRowSelect = (singleData, idx) => {
      const singleRow = { id: idx, ...singleData };
      if (selectedRows.find((el) => el.id === idx)) {
         return setSelectedRows(
            selectedRows.filter((el) => el.id !== idx)
         );
      }
      return setSelectedRows([...selectedRows, singleRow]);
   };

   const checkChecked = (idx) => {
      const el = selectedRows.find((el) => el.id === idx);
      if (el) return true;
      return false;
   };

   return (
      <TableContainer>
         <Table>
            <TableHead
               sx={{
                  backgroundColor: "#fff",
                  color: "#212121",
                  borderTop: "1px solid #9D9CAF",
                  borderBottom: "2.2px solid #9D9CAF",
                  textTransform: "uppercase",
                  fontWeight: 500,
                  fontSize: "12px",
               }}
            >
               <TableRow sx={{ padding: "10px 0px !important" }}>
                  <TableCell width="20px"></TableCell>
                  {isMulti && (
                     <TableCell padding="checkbox">
                        <Checkbox
                           onChange={(e) =>
                              onSelectAllClick(e, tableData)
                           }
                           inputProps={{
                              "aria-label": "select all desserts",
                           }}
                        />
                     </TableCell>
                  )}
                  {tableHeads?.map((element, idx) => {
                     return (
                        <TableCell
                           key={idx}
                           sx={{
                              textAlign: "start",
                              padding: "8px 10px",
                              fontSize: "12px",
                              fontWeight: "600",
                           }}
                        >
                           {`${element.title}`.toUpperCase()}
                        </TableCell>
                     );
                  })}
               </TableRow>
            </TableHead>

            <TableBody
               sx={{
                  backgroundColor: "#FCFCFC",
                  color: "#212121",
                  fontWeight: 500,
                  fontSize: "13px",
               }}
            >
               {!loading
                  ? tableData.map((singleData, index) => {
                       return (
                          <Rows
                             key={index}
                             index={index}
                             isMulti={isMulti}
                             checkChecked={checkChecked}
                             handleSingleRowSelect={
                                handleSingleRowSelect
                             }
                             singleData={singleData}
                             tableHeads={tableHeads}
                             handleActionButtonClick={
                                handleActionButtonClick
                             }
                             ChildComponent={ChildComponent}
                          />
                       );
                    })
                  : [...Array(8).keys()].map((index) => (
                       <TableRow key={index}>
                          <TableCell>
                             <Skeleton height={30} />
                          </TableCell>
                          {tableHeads?.map((item, list) => (
                             <TableCell
                                key={list}
                                sx={{
                                   minWidth: item?.minWidth,
                                   textAlign: "start",
                                   padding: "10px",
                                   borderBottom: "1px solid #E0E0E0",
                                }}
                                align={item?.align}
                             >
                                <Skeleton height={30} />
                             </TableCell>
                          ))}
                       </TableRow>
                    ))}
            </TableBody>
         </Table>
         <TablePagination
            rowsPerPageOptions={[10, 25, 50, 100]}
            component="div"
            count={total}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
         />

         <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
               "aria-labelledby": "basic-button",
            }}
         >
            <MenuItem onClick={handleEditClicked}>Edit</MenuItem>
            <MenuItem onClick={handleDeleteClicked}>Delete</MenuItem>
         </Menu>
      </TableContainer>
   );
};

export default CollapseTable;

CollapseTable.propTypes = {
   isMulti: PropTypes.bool, // this is to render the multiple row selectbox
   tableHeads: PropTypes.array, // header for table (will write custom documentation on it later)
   tableData: PropTypes.array,
   onEdit: PropTypes.func,
   onDelete: PropTypes.func,
   childHeads: PropTypes.component,
};
CollapseTable.defaultProps = {
   isMulti: false,
   onEdit: () => {},
   tableHeads: [
      { title: "#", type: "Index", isSortable: true },
      { title: "Name", field: "name" },
      { title: "LastName", field: "lname" },
      { title: "Actions", type: "actions" },
   ],
   tableData: [
      { name: "ariana", lname: "grande" },
      { name: "jamie", lname: "laninster" },
      {
         name: "romeo",
         lname: () => {
            let a = 3;
            if (a === 3) return 3;
            return "hell";
         },
      },
   ],
};

const Rows = ({
   index,
   isMulti,
   checkChecked,
   handleSingleRowSelect,
   singleData,
   tableHeads,
   handleActionButtonClick,
   ChildComponent,
}) => {
   const [openCollapse, setOpenCollapse] = useState(false);

   return (
      <>
         <TableRow
            key={index}
            sx={{
               backgroundColor: openCollapse
                  ? "#f5f5f5"
                  : "transparent",
               color: "#212121",
            }}
         >
            <TableCell sx={{ padding: "5px 10px" }}>
               <IconButton
                  aria-label="expand row"
                  size="small"
                  onClick={() => setOpenCollapse(!openCollapse)}
               >
                  {openCollapse ? (
                     <KeyboardArrowUpIcon />
                  ) : (
                     <KeyboardArrowDownIcon />
                  )}
               </IconButton>
            </TableCell>
            {isMulti && (
               <TableCell>
                  <Checkbox
                     checked={checkChecked(index)}
                     onChange={() =>
                        handleSingleRowSelect(singleData, index)
                     }
                     inputProps={{
                        "aria-label": "select row",
                     }}
                     sx={{
                        padding: "10px",
                        fontWeight: 400,
                        fontSize: "13px",
                     }}
                  />
               </TableCell>
            )}
            {tableHeads.map((el, idx) => {
               if (el.type?.toLowerCase() === "index") {
                  return (
                     <TableCell
                        key={idx}
                        sx={{
                           padding: "10px",
                           fontWeight: 400,
                           fontSize: "13px",
                        }}
                     >
                        {index + 1}
                     </TableCell>
                  );
               }

               return (
                  <TableCell
                     key={idx}
                     sx={{
                        padding: "5px 10px",
                        borderBottom: "1px solid #E0E0E0",
                        fontWeight: 400,
                        fontSize: "13px",
                     }}
                  >
                     {singleData[el.field]}
                  </TableCell>
               );
            })}
         </TableRow>

         <TableRow key={index + "a"}>
            <TableCell
               colSpan={tableHeads?.length + 1}
               style={{ padding: 0 }}
            >
               <Collapse
                  in={openCollapse}
                  timeout="auto"
                  unmountOnExit
               >
                  <Box>
                     <ChildComponent row={singleData} />
                  </Box>
               </Collapse>
            </TableCell>
         </TableRow>
      </>
   );
};
