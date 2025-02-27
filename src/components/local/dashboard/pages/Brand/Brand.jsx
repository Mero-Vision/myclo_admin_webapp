import { Add, Delete, Edit } from "@mui/icons-material";
import PeopleIcon from "@mui/icons-material/People";
import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
   useDeleteBrandMutation,
   useGetBrandQuery,
} from "../../../../../api/brandApi";
import useModal from "../../../../../hooks/useModal";
import useTabs from "../../../../../hooks/useTabs";
import AllModals from "../../../../common/AllModals/AllModals";
import CustomDataGrid from "../../../../common/CustomDataGrid/CustomDataGrid";
import CustomLoaderLin from "../../../../common/CustomLoader/CustomLoaderLin";
import CustomDeleteModal from "../../../../common/CustomModal/CustomDeleteModal";
import CustomMoreOptionButton from "../../../../common/CustomMoreOptionButton/CustomMoreOptionButton";

const items = [
   {
      icon: <Edit fontSize="small" />,
      text: "Edit",
      modalType: "edit_brand",
      permission: "department-edit",
   },
   {
      icon: <Delete fontSize="small" />,
      text: "Delete",
      modalType: "delete_brand",
      permission: "department-delete",
   },
];

const data = [
   {
      label: "Brand",
      value: "brand",
      icon: <PeopleIcon />,
   },
];

const Brand = () => {
   const { modals, handleOpen, handleClose, row } = useModal();
   const [rowId, setRowId] = useState();
   const [tableStatus, setTableStatus] = useState();
   console.log({ row, rowId });
   const { search_keyword = "" } = useSelector(
      (state) => state?.utils
   );

   const [page, setPage] = useState(1);
   const [paginationModel, setPaginationModel] = useState({
      page: 0,
      pageSize: 10,
   });

   const params = {
      page: paginationModel?.page + 1,
      pagination_limit: paginationModel?.pageSize,
      search_keyword,
   };
   const {
      data: departmentData,
      isFetching,
      isSuccess,
   } = useGetBrandQuery(params);

   const [
      deleteBrand,
      {
         isSuccess: isDeleteSuccess,
         isLoading,
         error,
         data: successData,
      },
   ] = useDeleteBrandMutation();

   const handleDelete = () => {
      console.log({ row });

      deleteBrand(row?.id);
   };

   useEffect(() => {
      if (isDeleteSuccess) {
         handleClose("delete_brand");
      }
   }, [isDeleteSuccess]);
   const { value, Tabs } = useTabs({
      data,
      button: (
         <Button
            variant="contained"
            startIcon={<Add />}
            onClick={() => handleOpen("add_brand")}
            sx={{
               fontSize: "12px",
               textTransform: "capitalize",
               backgroundColor: "#746be3",
               borderRadius: "8px",
               "&:hover": {
                  backgroundColor: "#6259CA",
               },
            }}
         >
            Add New
         </Button>
      ),
   });

   const columns = [
      {
         flex: 0.6,
         field: "brand_image",
         headerName: "Brand Image",
         renderCell: (params) => {
            console.log({ params });
            return (
               <Box
                  sx={{
                     display: "flex",
                     alignItems: "center ",
                     height: "100%",
                  }}
               >
                  <Box sx={{ width: "40px", height: "80%" }}>
                     <img
                        style={{
                           width: "100%",
                           height: "100%",
                           objectFit: "cover",
                        }}
                        src={
                           params?.row?.brand_image &&
                           params?.row?.brand_image
                        }
                        alt={"blog image"}
                     />
                  </Box>
               </Box>
            );
         },
      },
      {
         flex: 1,
         field: "name",
         headerName: "Name",
      },

      {
         flex: 0.3,
         field: "action",
         headerName: "Actions",
         //  renderCell: ActionComponent,
         renderCell: (params) => (
            <>
               {console.log({ params })}
               <CustomMoreOptionButton
                  items={items}
                  handleOpenModal={handleOpen}
                  row={params?.row}
               />
            </>
         ),
      },
   ];

   const handleButtonClick = () => {
      handleOpen("add_brand");
   };

   return (
      <div>
         {Tabs}

         {isFetching && <CustomLoaderLin />}

         {!isFetching && isSuccess && (
            <CustomDataGrid
               rows={departmentData?.data}
               columns={columns}
               rowCount={10}
               setPage={setPage}
               // isFetching={queryFetching}
               paginationModel={paginationModel}
               setPaginationModel={setPaginationModel}
               pageInfo={departmentData?.meta}
               // tabsData={data}
               // handleButtonClick={handleButtonClick}
               // value={value}
               // name="Menu Category"
               // isSingleTab
               // paginationMode={"client"}
            />
         )}

         <AllModals
            modalType={"add_brand"}
            open={modals?.add_brand}
            handleClose={() => handleClose("add_brand")}
            value={value}
         />
         <AllModals
            modalType={"edit_brand"}
            open={modals?.edit_brand}
            handleClose={() => handleClose("edit_brand")}
            value={value}
            modalTitle={"Edit Category"}
            row={row}
         />

         <CustomDeleteModal
            handleClose={() => handleClose("delete_brand")}
            open={modals?.delete_brand}
            isLoading={isLoading}
            handleConfirm={handleDelete}
            success={isDeleteSuccess}
            error={error}
            successData={successData}
         />
      </div>
   );
};

export default Brand;
