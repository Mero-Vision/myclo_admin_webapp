import { Person } from "@mui/icons-material";
import PeopleIcon from "@mui/icons-material/People";
import React from "react";
import CustomDeleteModal from "../../common/CustomModal/CustomDeleteModal";
import CustomModal from "../../common/CustomModal/CustomModal";
import BrandForm from "../../local/dashboard/pages/Brand/BrandForm";
import CategoryForm from "../../local/dashboard/pages/Category/CategoryForm";
import ProductsForm from "../../local/dashboard/pages/Products/ProductsForm";
const AllModals = ({
   modalType,
   open,
   value,
   handleClose,
   row,
   handleConfirm,
   isLoading,
   isService,
   id,
   inputValue = "",
   uuid,
   account_type,
   modalTitle,
   parentCategory,
   rosterTime,
   initialRow,
   employees,
   isEditMode,
   selectedDate,
   closeModal,
   pos,
   deliveryForm,
}) => {
   const returnModal = () => {
      console.log("llcllcllvlllll", { initialRow });

      switch (modalType) {
         case "edit_menu_category":
         case "add_menu_category":
            return (
               <CustomModal
                  open={open}
                  handleClose={handleClose}
                  modalTitle={` ${modalTitle ?? "New Menu Category"}`}
                  icon={<Person />}
                  width={"700px"}
                  // deliveryForm={deliveryForm}
               >
                  {
                     <CategoryForm
                        type={value}
                        handleClose={handleClose}
                        row={row}
                        inputValue={inputValue}
                     />
                  }
               </CustomModal>
            );
         case "delete_menu_category":
            return (
               <>
                  <CustomDeleteModal
                     open={open}
                     handleClose={handleClose}
                     isLoading={isLoading}
                     handleConfirm={handleConfirm}
                  />
               </>
            );
         case "edit_brand":
         case "add_brand":
            return (
               <CustomModal
                  open={open}
                  handleClose={handleClose}
                  modalTitle={` ${modalTitle ?? "New Brand"}`}
                  icon={<Person />}
                  width={"700px"}
                  // deliveryForm={deliveryForm}
               >
                  {
                     <BrandForm
                        type={value}
                        handleClose={handleClose}
                        row={row}
                        inputValue={inputValue}
                     />
                  }
               </CustomModal>
            );
         case "delete_brand":
            return (
               <>
                  <CustomDeleteModal
                     open={open}
                     handleClose={handleClose}
                     isLoading={isLoading}
                     handleConfirm={handleConfirm}
                  />
               </>
            );
         case "edit_products":
         case "add_products":
            return (
               <CustomModal
                  open={open}
                  handleClose={handleClose}
                  modalTitle={` ${modalTitle ?? "New Product"}`}
                  icon={<Person />}
                  width={"900px"}
                  // deliveryForm={deliveryForm}
               >
                  {
                     <ProductsForm
                        type={value}
                        handleClose={handleClose}
                        row={row}
                        inputValue={inputValue}
                     />
                  }
               </CustomModal>
            );
         case "delete_products":
            return (
               <>
                  <CustomDeleteModal
                     open={open}
                     handleClose={handleClose}
                     isLoading={isLoading}
                     handleConfirm={handleConfirm}
                  />
               </>
            );

         default:
            return (
               <CustomModal
                  open={open}
                  handleClose={handleClose}
                  modalTitle={`New Account`}
                  icon={<PeopleIcon />}
               >
                  NICE{" "}
               </CustomModal>
            );
      }
   };
   return <div>{returnModal()}</div>;
};

export default AllModals;
