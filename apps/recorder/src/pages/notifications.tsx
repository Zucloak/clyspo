// import { events } from "~/utils/tauri";
import { Toaster } from "solid-toast";
// import { createTauriEventListener } from "~/utils/createEventListener";

export default function Page() {
  // createTauriEventListener(events.newNotification, (payload) => {
  //   if (payload.is_error) {
  //     toast.error(payload.body, {
  //       style: {
  //         background: "#FEE2E2",
  //         color: "#991B1B",
  //         border: "1px solid #F87171",
  //       },
  //       iconTheme: {
  //         primary: "#991B1B",
  //         secondary: "#FEE2E2",
  //       },
  //     });
  //   } else {
  //     toast.success(payload.body, {
  //       icon: <SuccessIcon />,
  //       style: {
  //         background: "#FFFFFF",
  //         color: "#000000",
  //         border: "1px solid #FFFFFF",
  //       },
  //     });
  //   }
  // });

  return (
    <>
      <style>
        {`
          body {
            background: transparent !important;
          }
        `}
      </style>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3500,
          style: {
            padding: "8px 16px",
            "border-radius": "15px",
            "font-size": "1rem",
          },
        }}
      />
    </>
  );
}
