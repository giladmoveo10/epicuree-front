import "./ErrorHandler.scss";

const ErrorHandler: React.FC<{ message: string }> = ({ message }) => {
    return (
        <div className="error">
            <p className="error-message">{message}</p>
        </div>
    );
};

export default ErrorHandler;
