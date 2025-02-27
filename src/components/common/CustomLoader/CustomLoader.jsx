import { Triangle } from "react-loader-spinner";

const CustomLoader = () => {
   return (
      <div
         style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            alignItems: "center",
            // paddingTop: "1.5rem",
            paddingBottom: "2.5rem",
            height: "90dvh",
         }}
      >
         <Triangle
            height="80"
            width="80"
            color="#FF7A5C"
            ariaLabel="triangle-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
         />
      </div>
   );
};

export default CustomLoader;
