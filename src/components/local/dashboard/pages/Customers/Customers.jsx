import { Delete, Edit } from "@mui/icons-material";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import { Box } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useGetCustomersQuery } from "../../../../../api/customersApi";
import useModal from "../../../../../hooks/useModal";
import useTabs from "../../../../../hooks/useTabs";
import AllModals from "../../../../common/AllModals/AllModals";
import CustomGrid from "../../../../common/CustomGrid/CustomGrid";
import CustomModal from "../../../../common/CustomModal/CustomModal";
import CustomMoreOptionButton from "../../../../common/CustomMoreOptionButton/CustomMoreOptionButton";
import CustomersLeft from "./CustomersList/CustomersLeft";
import CustomersDetails from "./customerDetails/CustomersDetails";
const items = [
   {
      icon: <Edit fontSize="small" />,
      text: "Edit",
      modalType: "edit",
      permission: "customer-update",
   },
   {
      icon: <Delete fontSize="small" />,
      text: "Delete",
      modalType: "delete",
      permission: "customer-delete",
   },
];

function ActionComponent(props) {
   const [openModal, setOpenModal] = useState(false);
   const [modalType, setModalType] = useState("");
   const handleOpenModal = (modalType) => {
      setOpenModal(true);
      setModalType(modalType);
   };
   const handleCloseModal = () => {
      setOpenModal(false);
   };
   return (
      <Box>
         <CustomMoreOptionButton
            items={items}
            handleOpenModal={handleOpenModal}
         />

         <CustomModal
            open={openModal && modalType === "edit"}
            handleClose={() => handleCloseModal()}
            modalTitle={`Edit`}
         >
            edit
            <pre>{JSON.stringify(props?.row, null, 2)}</pre>
         </CustomModal>
         <CustomModal
            open={openModal && modalType === "delete"}
            handleClose={() => handleCloseModal()}
            modalTitle={`DELETE`}
         >
            DELETE{" "}
         </CustomModal>
      </Box>
   );
}

const columns = [
   {
      flex: 1,
      field: "name",
      headerName: "Full Name",
   },
   {
      flex: 1,
      field: "group",
      headerName: "Group",
   },
   {
      flex: 1,
      field: "phone",
      headerName: "Contact Number",
      valueGetter: (params) =>
         `${params.row?.customer_detail?.phone || "-"}`,
   },
   {
      flex: 1,
      field: "email",
      headerName: "Email Address",
      valueGetter: (params) =>
         `${params.row?.customer_detail?.email || "-"}`,
   },

   {
      flex: 0.4,
      field: "action",
      headerName: "Action",
      sortable: false,
      editable: false,
      renderCell: ActionComponent,
      headerAlign: "center",
      align: "center",
      disableColumnMenu: true,
   },
];

const data = [
   {
      label: "All Customers",
      value: "customers",
      icon: <PeopleOutlinedIcon />,
   },
];

const Customers = ({ pos, deliveryForm }) => {
   const navigate = useNavigate();
   const { modals, handleOpen, handleClose } = useModal();
   const { value, Tabs } = useTabs({
      data,
      hideSearch: true,
   });

   const { search_keyword = "" } = useSelector(
      (state) => state?.utils
   );

   const params = {
      search_keyword,
   };

   const {
      data: students,
      isFetching: isStudentsFetching,
      isLoading: isStudentsLoading,
      isSuccess: isStudentsSuccess,
   } = useGetCustomersQuery(params);
   const handleButtonClick = () => {
      navigate(`/students/add`);
   };

   return (
      <div>
         {Tabs}
         {!students?.data?.length && search_keyword === "" ? (
            <Box
               sx={{
                  display: " flex",
                  justifyContent: "center",
                  paddingTop: "80px",
                  height: "100%",
                  width: "100%",
                  color: "#343434",
               }}
            >
               No customers found
            </Box>
         ) : (
            // <AddButton
            //    value={"Customer"}
            //    // handleButtonClick={handleButtonClick}
            // />
            <CustomGrid
               info={
                  <CustomersLeft
                     students={students}
                     isStudentsFetching={isStudentsFetching}
                     isStudentsLoading={isStudentsLoading}
                     isStudentsSuccess={isStudentsSuccess}
                  />
               }
               details={<CustomersDetails />}
            />
         )}
         <AllModals
            modalType={"add_students"}
            open={modals?.add_students}
            handleClose={() => handleClose("add_students")}
            value={value}
         />
      </div>
   );
};

export default Customers;
