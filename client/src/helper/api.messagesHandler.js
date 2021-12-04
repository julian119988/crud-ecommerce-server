import { NotificationManager } from "react-notifications";
export const errorHandler = (type, title, message) => {
    switch (type) {
        case "warning":
            NotificationManager.warning(message, title, 4000);
            break;
        case "error":
            NotificationManager.error(message, title, 4000);
            break;
        default:
            NotificationManager.error(
                "Something unexpected happened.",
                "Error",
                4000
            );
            break;
    }
};
export const successfullOperationHandler = (type, title, message) => {
    switch (type) {
        case "info":
            NotificationManager.info(message, title, 4000);
            break;
        case "success":
            NotificationManager.success(message, title, 4000);
            break;
        default:
            NotificationManager.error(
                "Something unexpected happened.",
                "Error",
                4000
            );
            break;
    }
};
